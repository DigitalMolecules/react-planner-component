import * as React from 'react'
import * as utils from '../utils'
import styles from './styles.module.css'
import { PlannerContext } from '../provider/PlannerContextProvider'
import moment from 'moment'

interface ICapacityProps {
    moment: moment.Moment
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
                    value.date.setHours(0, 0, 0, 0)
                    var date = moment(value.date)

                    if (moment(date.toDate()).isSame(props.moment.toDate())) {
                        updCapacity = value.capacity
                    }
                })

                break;
            }

            case utils.ViewMode.Week: {
                const firstDayOfWeek = moment(props.moment).startOf('week').toDate()
                const lastDayOfWeek = moment(props.moment).endOf('week').toDate()

                context.capacity.forEach(value => {
                    value.date.setHours(0, 0, 0, 0)
                    var date = moment(value.date)

                    if (moment(date.toDate()).isBetween(firstDayOfWeek, lastDayOfWeek)) {
                        updCapacity += value.capacity
                    }
                })

                break;
            }
        }
        
        setCapacity(updCapacity)
    }, [context.capacity, context.viewMode, context.noOfDaysOffset])

    return (
        <div id={`dmCapacity${props.moment.toString()}`}
            key={`dmCapacity${props.moment.toString()}`}
            className={styles.capacity}
            style={{
                width: context.colWidth,
                left: props.leftPos,
                top: (props.totalHeight) - (context.rowHeight * (capacity / context.scale))
            }}
        />
    )
}