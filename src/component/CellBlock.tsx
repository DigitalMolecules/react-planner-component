import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { PlannerContext } from '../provider/PlannerContextProvider'
import { ViewMode, IItem, DEFAULT_CELL_COLOR, hexToRgb } from '../utils'
import moment from 'moment'

interface ICellBlockProps {
    date: Date
    leftPos: number
    totalHeight: number
}

export const CellBlock = (props: ICellBlockProps) => {
    const context = React.useContext(PlannerContext)
    const [itemData, setItemData] = React.useState<React.ReactNode[]>([])

    useEffect(() => {
        let data: React.ReactNode[] = []
        let filteredItems: IItem[] = []

        switch (context.viewMode) {
            case ViewMode.Day: {
                filteredItems = context.items.filter(value => {
                    if (moment(value.date).isSame(props.date, 'date')) {
                        return value
                    }

                    return null
                })

                break;
            }

            case ViewMode.Week: {
                const firstDayOfWeek = moment(props.date).startOf('week')
                const lastDayOfWeek = moment(props.date).endOf('week')

                filteredItems = context.items.filter((value => {
                    if (moment(value.date).isBetween(firstDayOfWeek, lastDayOfWeek, 'date', '[]')) {
                        return value
                    }

                    return null
                }))

                break;
            }
        }

        const sortedItems = filteredItems.sort((a, b) => {
            return a.date.getTime() - b.date.getTime() || a.sequenceNumber - b.sequenceNumber
        })

        let prevHeight = 0

        sortedItems.forEach(value => {
            const cellColor = value.hexColor || DEFAULT_CELL_COLOR
            const rgbTransparent = hexToRgb(`${cellColor}40`)
            let background = cellColor

            if (value.displayAsGradient) {
                background = `repeating-linear-gradient(45deg,${cellColor} , ${cellColor} 2px, ${rgbTransparent} 5px, ${rgbTransparent} 9px)`
            }

            const height = (context.rowHeight * (value.capacity / context.scale))
            const top = (props.totalHeight - height) - prevHeight
            prevHeight += height

            data.push(
                <div key={`dmDataCol ${moment(value.date).toDate()} - Sequence ${value.sequenceNumber}`}
                    id={`dmDataCol ${moment(value.date).toDate()} - Sequence ${value.sequenceNumber}`}
                    className={styles.cell}
                    style={{
                        background: background,
                        top: top + 2,
                        left: props.leftPos + 4,
                        width: context.colWidth - 8,
                        height: height - 4
                    }}
                >
                    <p>
                        {moment(value.date).format('dddLL')}
                        <br/>
                        {value.sequenceNumber}
                    </p>
                </div>
            )
        })
        
        setItemData(data)

    }, [props])


    return (
        <React.Fragment>
            {itemData}
        </React.Fragment>
    )
}