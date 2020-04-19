export * from '../utils/views'

export const DEFAULT_VIEW_MODE = 'Day'
export const DEFAULT_NUMBER_OF_COLS = 15
export const DEFAULT_NUMBER_OF_ROWS = 10
export const MIN_ROW_HEIGHT = 40
export const MIN_COL_WIDTH = 50
export const DEFAULT_SCALE = 1
export const DEFAULT_CELL_COLOR = '#CD5B33'
export const DEFAULT_YAXIS_WIDTH = 34
export const DEFAULT_XAXIS_HEIGHT = 65

export const getDate = (days: number, startDate: Date) => {
    const retDate = new Date(startDate)
    return new Date(retDate.setDate(startDate.getDate() + days))
}

export const calcColWidth = (width: number, cols: number, dimensionWidth: number, offset: number = 0): number => {
    if (cols > 0) {
        const totalWidth = dimensionWidth - offset - 20

        if ((width * cols) < totalWidth) {
            const newWidth = (totalWidth / cols)
            return newWidth < MIN_COL_WIDTH ? MIN_COL_WIDTH : newWidth
        }
    }

    return width < MIN_COL_WIDTH ? MIN_COL_WIDTH : width
}

export const calcRowHeight = (height: number, rows: number, dimensionHeight: number, offset: number = 0): number => {
    if (rows > 0) {     
        const totalHeight = dimensionHeight - offset

        if ((height * rows) < totalHeight) {
            const newHeight = (totalHeight / rows)
            return newHeight < MIN_ROW_HEIGHT ? MIN_ROW_HEIGHT : newHeight
        }
    }

    return height < MIN_ROW_HEIGHT ? MIN_ROW_HEIGHT : height
}