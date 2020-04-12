import * as React from 'react'
import * as utils from '../utils'
import { Col, Cell } from './graph'

interface IProps {
    id: string
    numberOfCols?: number
    colWidth?: number
}

export const DataCols = (props: IProps) => {
    let numberOfCols = props.numberOfCols === undefined ? utils.DEFAULT_NUMBER_OF_COLS : props.numberOfCols
    if (numberOfCols <= 0) numberOfCols = 1

    const colArray = []

    for (var i = 0; i < (numberOfCols); i++) {
        colArray.push(
            <Col id={`dm-Row${props.id}-Col${i}`}
                key={`dm-Row${props.id}-Col${i}`}
                width={props.colWidth === undefined ? utils.MIN_COL_WIDTH : props.colWidth}
            >
                {i % 2 === 0 &&
                    <Cell id={`dm-Cell-Row${props.id}-Col${i}`}/>
                }
            </Col>
        )
    }

    return (
        <React.Fragment>
            {colArray}
        </React.Fragment>
    )
}