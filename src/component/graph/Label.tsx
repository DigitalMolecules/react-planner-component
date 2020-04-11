import React from 'react'
import * as utils from '../../utils'
import styles from './styles.module.css'
import * as office from 'office-ui-fabric-react'

interface IProps {
    id: string
    children: React.ReactNode
    numberOfCols?: number
    colWidth?: number
}

export const GraphLabel = (props: IProps) => {
    let height = '80px'
    let rotateDeg = 0
    let paddingLeft = '0'

    if ((props.colWidth === undefined ? utils.MIN_COL_WIDTH : props.colWidth) < 70) {
        rotateDeg = 90
        height = '70px'
        paddingLeft = '5px'
    }

    return (
        <div id={props.id}
            key={props.id}
            className={styles.colLabel}
            style={{ transform: `${'rotate(' + rotateDeg + 'deg)'}`, height: height, paddingLeft: paddingLeft }}
        >
            <office.Label>
                {props.children}
            </office.Label>

        </div>
    )
}