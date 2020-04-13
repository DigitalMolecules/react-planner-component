//export * from './proto/array'
export * from './proto/date'
export * from './colors'

export const DEFAULT_VIEW_MODE = 'Day'
export const DEFAULT_NUMBER_OF_COLS = 15
export const DEFAULT_NUMBER_OF_ROWS = 10
export const MIN_ROW_HEIGHT = 40
export const MIN_COL_WIDTH = 50
export const DEFAULT_SCALE = 1
export const DEFAULT_CELL_COLOR = '#941919'
export const DEFAULT_YAXIS_WIDTH = 34
export const DEFAULT_XAXIS_HEIGHT = 80

export const getDate = (days: number, startDate: Date) => {
    const retDate = new Date(startDate)
    return new Date(retDate.setDate(startDate.getDate() + days))
}

export const calcColWidth = (width: number, cols: number, dimensionWidth: number, offset: number = 0): number => {
    if (cols > 0) {
        const totalWidth = dimensionWidth - offset - 18

        if ((width * cols) < totalWidth) {
            return (totalWidth / cols)
        }
    }

    return width
}

export const calcRowHeight = (height: number, rows: number, dimensionHeight: number, offset: number = 0): number => {
    if (rows > 0) {     
        const totalHeight = dimensionHeight - offset

        if ((height * rows) < totalHeight) {
            return (totalHeight / rows)
        }
    }

    return height
}