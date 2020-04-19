import React from 'react'
import { PlannerContext } from '../provider/PlannerContextProvider'
import * as office from 'office-ui-fabric-react'
import styles from './styles.module.css'

export const YAxis = () => {
    const context = React.useContext(PlannerContext)
    const totalHeight = (context.rowHeight * context.numberOfRows)
    
    const buildYLabels = (): React.ReactNode[] => {
        const yLabels: React.ReactNode[] = []

        if (context.dimensions) {
            const totalRowWidth = context.yAxisWidth + (context.numberOfCols * context.colWidth)

            for (let i = context.numberOfRows; i > 0; i--) {
                yLabels.push(
                    <div key={`dmYRow${i}`}
                        className={styles.row}
                        style={{ 
                            height: context.rowHeight, 
                            width: totalRowWidth, 
                            top: totalHeight - (context.rowHeight * i),
                            position: 'absolute'
                        }}
                    >
                        <div key={`dmYCol${i}`}
                            className={styles.yCol}
                            style={{ 
                                width: context.yAxisWidth, 
                                height: context.rowHeight
                            }}
                        >
                            <office.Label key={`dimYLabel${i}`}>
                                {(i * context.scale) || i}
                            </office.Label>
                        </div>
                    </div>
                )
            }
        }
        return yLabels
    }

    return (
        <React.Fragment>
            <div style={{ height: totalHeight}}>
                {buildYLabels()}
            </div>
        </React.Fragment>
    )
}