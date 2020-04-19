import React from 'react'
import { PlannerContext } from '../provider/PlannerContextProvider'
import * as office from 'office-ui-fabric-react'
import styles from './styles.module.css'
import moment from 'moment'
import { ViewMode } from '../utils'

export const XAxis = () => {
    const context = React.useContext(PlannerContext)

    const buildXLabels = (): React.ReactNode[] => {
        const xLabelArray: React.ReactNode[] = []
    
        if (context.dimensions) {            
            const rotateDeg = context.colWidth < 70 ? 90 : 0
            let startLeftPos = context.yAxisWidth
            let colDate = moment(context.startDate)

            for (var i = 0; i < (context.numberOfCols); i++) {
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
                            {context.viewMode === ViewMode.Day &&
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    {colDate.format('ddd')} <b> {colDate.format('Do')} </b> <br /> {colDate.format('MMM YYYY')}
                                </div>
                            }

                            {context.viewMode === ViewMode.Week &&
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    Week {colDate.format('ww')} <br /> {colDate.format('MMM YYYY')}
                                </div>
                            }
                        </office.Label>
                    </div>
                )

                startLeftPos += context.colWidth
                colDate.add(context.noOfDaysOffset, 'd')
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