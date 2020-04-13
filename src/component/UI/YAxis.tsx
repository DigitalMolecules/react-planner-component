import React from 'react'
import { PlannerContext } from '../PlannerContextProvider'
import * as office from 'office-ui-fabric-react'
import * as utils from '../../utils'
import styles from './styles.module.css'

export const YAxis = () => {
    const context = React.useContext(PlannerContext)

    const buildYLabels = (): React.ReactNode[] => {
        const yLabels: React.ReactNode[] = []

        if (context.dimensions) {
            const currentColWidth = utils.calcColWidth(context.colWidth, context.numberOfCols, context.dimensions.width, context.yAxisWidth)
            const currentRowHeight = utils.calcRowHeight(context.rowHeight, context.numberOfRows, context.dimensions.height, context.xAxisHeight)
            const totalRowWidth = context.yAxisWidth + (context.numberOfCols * currentColWidth)

            for (let i = context.numberOfRows; i > 0; i--) {
                yLabels.push(
                    <div id={`dmYRow${i}`}
                        key={`dmYRow${i}`}
                        className={styles.row}
                        style={{ height: currentRowHeight, width: totalRowWidth }}
                    >
                        <div id={`dmYCol${i}`}
                            key={`dmYCol${i}`}
                            className={styles.col}
                            style={{ width: context.yAxisWidth, height: currentRowHeight }}
                        >
                            <office.Label key={`dimYLabel${i}`}
                                className={styles.yLabel}>
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
            {buildYLabels()}
        </React.Fragment>
    )
}