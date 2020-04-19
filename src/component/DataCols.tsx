import * as React from 'react'
import { PlannerContext } from '../provider/PlannerContextProvider'
import styles from './styles.module.css'
import { CellBlock } from '.'
import { Capacity } from './Capacity'
import moment from 'moment'

export const DataCols = () => {
    const context = React.useContext(PlannerContext)
    const [dataCols, setDataCols] = React.useState<React.ReactNode[]>([])

    React.useEffect(() => {
        const data: React.ReactNode[] = []

        if (context.dimensions) {
            const totalHeight = context.rowHeight * context.numberOfRows
            let startLeftPos = context.yAxisWidth
            let colDate = moment(context.startDate)

            for (var i = 0; i < (context.numberOfCols); i++) {

                // Column
                data.push(
                    <div key={`dmYCol${i}`}
                        className={styles.col}
                        style={{
                            width: context.colWidth,
                            left: startLeftPos,
                            height: totalHeight,
                            top: 0
                        }}
                    />
                )

                // Capacity
                data.push(
                    <Capacity key={`dmCapacity${colDate}`}
                        date={colDate.toDate()}
                        leftPos={startLeftPos}
                        totalHeight={totalHeight}
                    />
                )
                
                data.push(
                    <CellBlock key={`dmDataItem${colDate}`}
                        date={colDate.toDate()}
                        leftPos={startLeftPos}                        
                        totalHeight={totalHeight}
                    />
                )

                startLeftPos += context.colWidth
                colDate.add(context.noOfDaysOffset, 'd')
            }
        }

        setDataCols(data)
    }, [context])

    return (
        <React.Fragment>
            {dataCols}
        </React.Fragment>
    )
}
