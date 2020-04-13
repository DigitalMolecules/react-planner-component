import * as React from 'react'
import { PlannerContext } from '../PlannerContextProvider'
import styles from './styles.module.css'
import { CellBlock } from '.'

export const DataCols = () => {
    const context = React.useContext(PlannerContext)

    const build = (): React.ReactNode[] => {
        const data: React.ReactNode[] = []

        if (context.dimensions) {
            const totalHeight = context.rowHeight * context.numberOfRows
            let startLeftPos = context.yAxisWidth
            for (var i = 0; i < (context.numberOfCols); i++) {
                //let colDate = utils.getDate(context.viewMode === 'Day' ? i : i * 7, context.startDate)

                // Column
                data.push(
                    <div id={`dmYCol${i}`}
                        key={`dmYCol${i}`}
                        className={styles.col}
                        style={{
                            width: context.colWidth,
                            left: startLeftPos,
                            height: totalHeight,
                            top: 0
                        }}
                    />
                )

                // Capacity test at 5
                const capacity = 5
                data.push(
                    <div id={`dmCapacity${i}`}
                        key={`dmCapacity${i}`}
                        className={styles.capacity}
                        style={{ 
                            width: context.colWidth, 
                            left: startLeftPos,
                            top: (totalHeight) - (context.rowHeight * (capacity / context.scale)) }}
                    />
                )

                // TODO Loop through data items for this date in sequence order and render on top of each other
                // Data Test at i + 1
                const dataItem = (i + 1) + 1
                let height = (context.rowHeight * (dataItem  / context.scale))
                let top = totalHeight - height
                data.push(
                    <CellBlock id={`dmDataItem${i}`}
                        key={`dmDataItem${i}`}
                        top={top}
                        left={startLeftPos}
                        width={context.colWidth}
                        height={height}
                    />
                )

                // Data Test at 1 on top
                height = (context.rowHeight * (1 / context.scale))
                top = top - height
                data.push(
                    <CellBlock id={`dmFDataItem${i}`}
                        key={`dmFDataItem${i}`}
                        top={top}
                        left={startLeftPos}
                        width={context.colWidth}
                        height={height}
                        forecast
                    />
                )                

                startLeftPos += context.colWidth
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
