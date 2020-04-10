import * as React from 'react'
import { GridLabel } from './UI/GridLabel'
import moment from 'moment'
import { Col } from './UI/Grid'

interface IProps {
    viewMode?: 'Day' | 'Week'
    startDate?: Date
    numberOfCols?: number
    labelStyle?: React.CSSProperties
    columnBorder?: React.CSSProperties
}

export const Labels = (props: IProps) => {
    const startDate = props.startDate || new Date()
    startDate.setHours(0, 0, 0, 0)
    const labelArray = []

    const getDate = (days: number) => {
        let retDate = new Date(startDate)
        retDate = new Date(retDate.setDate(startDate.getDate() + days))
        return retDate
    }

    for (var i = 0; i < (props.numberOfCols || 10); i++) {
        let colDate = getDate(props.viewMode === 'Day' ? i : i * 7)
        const momentDate = moment(colDate)

        labelArray.push(
            <Col id={`LabelCol ${i}`}>
                <GridLabel id={`Label ${i}`}
                    key={`Label ${i}`}
                    numberOfCols={props.numberOfCols || 10}
                    year={momentDate.format('MMM YYYY')}
                >
                    {props.viewMode === 'Day'
                        ? <span>{momentDate.format('ddd')} < b > {momentDate.format('Do')} </b></span>
                        : <span>"Week" {momentDate.format('ww')} </span>}
                </GridLabel>
            </Col>
        )
    }

    return (
        <React.Fragment>
            {labelArray}
        </React.Fragment>
    )
}