import * as React from 'react'
import * as utils from '../../utils'
import { PlannerContext } from '../PlannerContextProvider'
import styles from './styles.module.css'

export const DataCols = () => {
    const context = React.useContext(PlannerContext)

    const build = (): React.ReactNode[] => {
        const data: React.ReactNode[] = []

        if (context.dimensions) {
            const currentColWidth = utils.calcColWidth(context.colWidth, context.numberOfCols, context.dimensions.width, context.yAxisWidth)
            const currentRowHeight = utils.calcRowHeight(context.rowHeight, context.numberOfRows, context.dimensions.height)
            const totalHeight = currentRowHeight * context.numberOfRows + context.xAxisHeight
            let startLeftPos = context.yAxisWidth
        
            for (var i = 0; i < (context.numberOfCols); i++) {
                //let colDate = utils.getDate(context.viewMode === 'Day' ? i : i * 7, context.startDate)

                data.push(
                    <div id={`dmYCol${i}`}
                        key={`dmYCol${i}`}
                        className={styles.col}
                        style={{
                            position: 'absolute',
                            width: currentColWidth,
                            left: startLeftPos,
                            height: totalHeight,
                            top: 0
                        }}
                    />
                )

                data.push(
                    <div id={`dmCapacity${i}`}
                        style={{ position: 'absolute', width: currentColWidth, left: startLeftPos, bottom: context.xAxisHeight + 100 }}
                    >
                        <hr></hr>
                    </div>
                )

                startLeftPos += currentColWidth
            }
        }

        return data
    }

    return (
        <React.Fragment>
            {build()}
        </React.Fragment>
    )
}