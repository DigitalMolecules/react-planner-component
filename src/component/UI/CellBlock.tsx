import React from 'react'
import * as utils from '../../utils'
import styles from './styles.module.css'

interface IProps {
    id: string
    left: number
    top: number
    width: number
    height: number
    forecast?: boolean
}

export const CellBlock = (props: IProps) => {

    const cellColor = utils.DEFAULT_CELL_COLOR
    let rgbTransparent = utils.hexToRgb(`${utils.DEFAULT_CELL_COLOR}40`)

    let background = cellColor

    if (props.forecast) {
        background = `repeating-linear-gradient(45deg,${cellColor} , ${cellColor} 2px, ${rgbTransparent} 5px, ${rgbTransparent} 9px)`
    }

    return (
        <div id={props.id}
            key={props.id}
            className={styles.cell}
            style={{
                background: background,
                top: props.top + 2,
                left: props.left + 4,
                width: props.width - 8,
                height: props.height - 4
            }}
        />
    )
}