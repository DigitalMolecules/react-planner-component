import * as React from 'react'
import * as utils from '../utils'
import styles from './styles.module.css'
import { PlannerContext } from '../provider/PlannerContextProvider'
import moment from 'moment'

interface ICapacityProps {
    date: Date
    leftPos: number
    totalHeight: number
}

export const Capacity = (props: ICapacityProps) => {
    const context = React.useContext(PlannerContext)
    const [capacity, setCapacity] = React.useState(0)

    React.useEffect(() => {
        let updCapacity = 0

        switch (context.viewMode) {
            case utils.ViewMode.Day: {
                context.capacity.forEach(value => {

                    if (moment(value.date).isSame(props.date, 'date')) {
                        updCapacity = value.capacity
                    }
                })

                break;
            }

            case utils.ViewMode.Week: {
                const firstDayOfWeek = moment(props.date).startOf('week')
                const lastDayOfWeek = moment(props.date).endOf('week')

                context.capacity.forEach(value => {
                    if (moment(value.date).isBetween(firstDayOfWeek, lastDayOfWeek, 'date', '[]')) {
                        updCapacity += value.capacity
                    }
                })

                break;
            }
        }
        
        setCapacity(updCapacity)
    }, [props])

    return (
        <div className={styles.capacity}
            style={{
                width: context.colWidth,
                left: props.leftPos,
                top: (props.totalHeight) - (context.rowHeight * (capacity / context.scale))
            }}
        />
    )
}