import React from 'react'
import * as utils from '../../utils'
import styles from './styles.module.css'

interface IProps {
    id: string
}

export const Cell = (props: IProps) => {

    const cellColor = utils.DEFAULT_CELL_COLOR
    let rgbTransparent = utils.hexToRgb(`${utils.DEFAULT_CELL_COLOR}40`)

    const cellStyle = {
        background: `repeating-linear-gradient(45deg,${cellColor} , ${cellColor} 2px, ${rgbTransparent} 5px, ${rgbTransparent} 9px)`,
        marginTop: '2px',
        marginBottom: '2px'
    }

    return (
        <div id={props.id}
            key={props.id}
            className={styles.cell}
            style={cellStyle}
        >

        </div>
    )
}