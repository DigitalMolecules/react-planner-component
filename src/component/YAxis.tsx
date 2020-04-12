import React from 'react'
import { PlannerContext } from './PlannerContextProvider'
import * as office from 'office-ui-fabric-react'
import * as utils from '../utils'
import styles from './styles.module.css'

export const YAxis = () => {
    const context = React.useContext(PlannerContext)

    const buildYLabels = (): JSX.Element[] => {
        if (context.dimensions) {
            const currentRowHeight = utils.calcRowHeight(context.rowHeight, context.numberOfRows, context.dimensions.height)
            const currentColWidth = utils.calcColWidth(context.colWidth, context.numberOfCols, context.dimensions.width)

            const yLabels: JSX.Element[] = []
            const totalRowWidth = context.yAxisWidth + (context.numberOfCols * currentColWidth)

            for (let i = context.numberOfRows; i > 0; i--) {
                yLabels.push(
                    <div id={`dmYRow${i}`}
                        key={`dmYRow${i}`}
                        className={styles.row}
                        style={{ height: currentRowHeight, width: totalRowWidth }}
                    >
                        <office.Label key={`dimYLabel${i}`}
                            className={styles.yLabel}
                            style={{ height: currentRowHeight, width: context.yAxisWidth }}>
                            {(i * context.scale) || i}
                        </office.Label>
                    </div>
                )
            }

            return yLabels
        }

        return []
    }

    return (
        <React.Fragment>
            {buildYLabels()}
        </React.Fragment>
    )
}