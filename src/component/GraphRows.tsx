import React from 'react'
import * as utils from '../utils'
import { Row, Col } from './graph'
import { GraphCols } from './GraphCols'
import styles from '../styles.module.css'

interface IProps {
    numberRows?: number
    numberOfCols?: number
    rowHeight?: number
    colWidth?: number
    scale?: number
}

export const GraphRows = (props: IProps) => {
    let rowHeight = props.rowHeight === undefined ? utils.MIN_ROW_HEIGHT : props.rowHeight
    if (rowHeight <= utils.MIN_ROW_HEIGHT) rowHeight = utils.MIN_ROW_HEIGHT
    let numberRows = props.numberRows === undefined ? utils.DEFAULT_NUMBER_OF_ROWS : props.numberRows
    if (numberRows <= 0) numberRows = 1

    if (numberRows > 0) {
        let totalRowHeight = rowHeight * numberRows    
        
        if (totalRowHeight < (window.innerHeight + rowHeight)) {
            rowHeight = window.innerHeight / numberRows
        }
    }

    if (numberRows === 1) {
        rowHeight = window.innerHeight
    }

    const labels = []

    for (let i = numberRows; i > 0; i--) {
        labels.push(
            <Row id={`dm-Row${i}`}
                key={`dm-Row${i}`}
                rowHeight={rowHeight}
            >
                <div className={styles.rowContent}>
                    <div className={styles.FirstXCol} style={{height: rowHeight}}>
                        <Col id="dm-FirstLabelCol"
                            key="dm-FirstLabelCol"
                            numberOfCols={props.numberOfCols}
                            width={34}
                        >
                            <div className={styles.yLabel}>
                                {(i * (props.scale === undefined ? utils.DEFAULT_SCALE : props.scale)) || i}
                            </div>
                        </Col>
                    </div>
                    <div className={styles.FirstXLabelRow} style={{height: rowHeight}}>
                        <GraphCols id={`dm-col-${i}`}
                            colWidth={props.colWidth}
                            numberOfCols={props.numberOfCols}
                        />
                    </div>
                </div>                    
            </Row>
        )
    }

    return (
        <React.Fragment>
            {labels}
        </React.Fragment>
    )
}