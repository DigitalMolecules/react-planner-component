import React from 'react'

interface IProps {
    id: string
    numberOfCols?: number
    year?: string
    children: React.ReactNode
}

let colWidth = 10
let rotateDeg = 0

export const GridLabel = (props: IProps) => {
    if (props.numberOfCols && props.numberOfCols > 0) {
        colWidth = 100 / (props.numberOfCols)
    }

    if (colWidth < 6.7) {
        rotateDeg = 90
    }

    const styles = {
        colLabel: {
            transform: `${'rotate(' + rotateDeg + 'deg)'}`,
        } as React.CSSProperties,
    }

    return (
        <div id={props.id}
            key={props.id}
            style={styles.colLabel}
        >
            {props.children}
            <br/>
            {props.year}
        </div>
    )
}