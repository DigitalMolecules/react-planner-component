import React from 'react'
import styles from './styles.module.css'
import { VERTICAL_MARGINS_PX } from '../../utils'

interface IProps {
    id: string
    ref?: React.RefObject<HTMLDivElement> | null
    children?: React.ReactNode
}

interface IRowProps extends IProps {
    scrollWidth?: number
    verticalMarginsPx?: number
}

interface IColProps extends IProps {
    scrollWidth?: number
    width?: number
}

export const Grid = (props: IProps) => (
    <div id={props.id}
        ref={props.ref}        
        className={styles.grid}
    >
        {props.children}
    </div>
)

export const Row = (props: IRowProps) => (
    <div id={props.id}
        ref={props.ref}
        className={styles.row}
        style={{ height: `${props.verticalMarginsPx || VERTICAL_MARGINS_PX}px` }}
    >
        {props.children}
    </div>
)

export const Col = (props: IColProps) => (
    <div id={props.id}
        ref={props.ref}
        className={styles.col}
        style={{width: `${styles.width}px`}}
    >
        {props.children}
    </div>
)