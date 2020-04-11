import * as React from 'react'
import * as utils from '../utils'
import { GraphLabel } from './graph'
import moment from 'moment'
import { Col } from './graph'

interface IProps {
    viewMode?: 'Day' | 'Week'
    startDate?: Date
    colWidth?: number
    numberOfCols?: number
}

export const GraphLabels = (props: IProps) => {
    const startDate = props.startDate || new Date()
    startDate.setHours(0, 0, 0, 0)
    const labelArray = []

    const getDate = (days: number) => {
        let retDate = new Date(startDate)
        retDate = new Date(retDate.setDate(startDate.getDate() + days))
        return retDate
    }

    let numberOfCols = props.numberOfCols === undefined ? utils.DEFAULT_NUMBER_OF_COLS : props.numberOfCols
    if (numberOfCols <= 0) numberOfCols = 1

    for (var i = 0; i < (numberOfCols); i++) {
        let colDate = getDate(props.viewMode === utils.DEFAULT_VIEW_MODE ? i : i * 7)
        const momentDate = moment(colDate)

        labelArray.push(
            <Col id={`dm-LabelCol ${i}`}
                key={`dm-LabelCol ${i}`}
                numberOfCols={props.numberOfCols}
                width={props.colWidth === undefined ? utils.MIN_COL_WIDTH : props.colWidth}
            >
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', flexGrow: 1 }}>
                    <GraphLabel id={`dm-Label ${i}`}
                        key={`dm-Label ${i}`}
                        numberOfCols={props.numberOfCols}
                        colWidth={props.colWidth}
                    >
                        {(props.viewMode || utils.DEFAULT_VIEW_MODE) === 'Day' &&
                            <div style={{ whiteSpace: 'nowrap'}}>
                                {momentDate.format('ddd')} <b> {momentDate.format('Do')} </b> <br /> {momentDate.format('MMM YYYY')}
                            </div>
                        }

                        {(props.viewMode || utils.DEFAULT_VIEW_MODE) === 'Week' &&
                            <div style={{ whiteSpace: 'nowrap'}}>
                                Week {momentDate.format('ww')} <br /> {momentDate.format('MMM YYYY')}
                            </div>
                        }
                    </GraphLabel>
                </div>
            </Col>
        )
    }

    return (
        <React.Fragment>
            {labelArray}
        </React.Fragment>
    )
}