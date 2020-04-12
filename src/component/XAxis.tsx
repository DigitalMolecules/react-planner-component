import React from 'react'
import { PlannerContext } from './PlannerContextProvider'
import * as office from 'office-ui-fabric-react'
import * as utils from '../utils'
import styles from './styles.module.css'
import moment from 'moment'

export const XAxis = () => {
    const context = React.useContext(PlannerContext)

    const buildXLabels = (): React.ReactNode => {
        if (context.dimensions) {
            const currentColWidth = utils.calcColWidth(context.colWidth, context.numberOfCols, context.dimensions.width)

            const xLabelArray: JSX.Element[] = []

            xLabelArray.push(
                <div id='dmXCol'
                    key='dmXCol'
                    className={styles.yLabel}
                    style={{ height: context.xAxisHeight, width: context.yAxisWidth - 1 }}
                />
            )

            let rotateDeg = 0
            if (currentColWidth < 70) rotateDeg = 90

            let startLeftPos = context.yAxisWidth

            for (var i = 0; i < (context.numberOfCols); i++) {
                let colDate = utils.getDate(context.viewMode === 'Day' ? i : i * 7, context.startDate)
                const momentDate = moment(colDate)

                xLabelArray.push(
                    <div id={`dmXCol${i}`}
                        key={`dmXCol${i}`}
                        className={styles.col}
                        style={{ width: currentColWidth, left: startLeftPos, height: context.xAxisHeight }}
                    >
                        <office.Label key={`dmXLabel${i}`}
                            className={styles.xLabel}
                            style={{ transform: `${'rotate(' + rotateDeg + 'deg)'}` }}
                        >
                            {context.viewMode === 'Day' &&
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    {momentDate.format('ddd')} <b> {momentDate.format('Do')} </b> <br /> {momentDate.format('MMM YYYY')}
                                </div>
                            }

                            {context.viewMode === 'Week' &&
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    Week {momentDate.format('ww')} <br /> {momentDate.format('MMM YYYY')}
                                </div>
                            }
                        </office.Label>
                    </div>
                )

                startLeftPos += currentColWidth
            }

            return (
                <div id='dmXRow'
                    className={styles.row}
                    style={{ height: context.xAxisHeight, width: currentColWidth * context.numberOfRows, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                >
                    {xLabelArray}
                </div>
            )
        }

        return null
    }


    return (
        <React.Fragment>
            {buildXLabels()}
        </React.Fragment>
    )
}