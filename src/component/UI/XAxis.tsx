import React from 'react'
import { PlannerContext } from '../PlannerContextProvider'
import * as office from 'office-ui-fabric-react'
import * as utils from '../../utils'
import styles from './styles.module.css'
import moment from 'moment'

export const XAxis = () => {
    const context = React.useContext(PlannerContext)

    const buildXLabels = (): React.ReactNode[] => {
        const xLabelArray: React.ReactNode[] = []
    
        if (context.dimensions) {            
            const rotateDeg = context.colWidth < 70 ? 90 : 0
            let startLeftPos = context.yAxisWidth
    
            for (var i = 0; i < (context.numberOfCols); i++) {
                let colDate = utils.getDate(context.viewMode === 'Day' ? i : i * 7, context.startDate)
                const momentDate = moment(colDate)

                xLabelArray.push(
                    <div id={`dmXCol${i}`}
                        key={`dmXCol${i}`}
                        className={styles.col}
                        style={{ width: context.colWidth, left: startLeftPos, height: context.xAxisHeight }}
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

                startLeftPos += context.colWidth
            }
        }
        return xLabelArray
    }

    return (
        <div id='dmXRow0'
            key='dmXRow0'
            className={styles.row}
            style={{ 
                height: context.xAxisHeight, 
                width: (context.colWidth * context.numberOfCols) + context.yAxisWidth,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 10
            }}
        >
            <div id='dmXCol'
                key='dmXCol'
                className={styles.yCol}
                style={{ 
                    height: context.xAxisHeight, 
                    width: context.yAxisWidth
                }}
            />
            {buildXLabels()}
        </div>
    )
}