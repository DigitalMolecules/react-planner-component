import React from 'react'
import styles from './styles.module.css'
import * as utils from '../../utils'

interface IProps {
    id: string
    ref?: React.RefObject<HTMLDivElement> | null
    children?: React.ReactNode
}

interface IRowProps extends IProps {
    rowHeight?: number
}

interface IColProps extends IProps {
    numberOfCols?: number
    width?: number
}

export const Graph = (props: IProps) => (
    <div id={props.id}
        ref={props.ref}
        className={styles.graphPlanner}
    >
        {props.children}
    </div>
)

export const Row = (props: IRowProps) => (
    <div id={props.id}
        ref={props.ref}
        className={styles.row}
        style={{ height: `${props.rowHeight === undefined ? utils.MIN_ROW_HEIGHT : props.rowHeight}px` }}
    >
        {props.children}
    </div>
)

export const Col = (props: IColProps) => {
    let minWidth = props.width === undefined ? utils.MIN_COL_WIDTH : props.width
    if (minWidth < utils.MIN_COL_WIDTH) minWidth = utils.MIN_COL_WIDTH

    return (
        <div id={props.id}
            ref={props.ref}
            className={styles.col}
            style={{ width: `${minWidth}px` }}
        >
            {props.children}
        </div>
    )
}