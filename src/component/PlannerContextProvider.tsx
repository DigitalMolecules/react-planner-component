import React from "react"
import * as utils from '../utils'
import styles from './styles.module.css'

type Dimensions = {
    width: number
    height: number
}

export const PlannerContext = React.createContext({
    numberOfRows: utils.DEFAULT_NUMBER_OF_ROWS,
    numberOfCols: utils.DEFAULT_NUMBER_OF_COLS,
    colWidth: utils.MIN_COL_WIDTH,
    rowHeight: utils.MIN_ROW_HEIGHT,
    scale: utils.DEFAULT_SCALE,
    viewMode: utils.DEFAULT_VIEW_MODE,
    startDate: new Date(),
    yAxisWidth: utils.DEFAULT_YAXIS_WIDTH,
    xAxisHeight: utils.DEFAULT_XAXIS_HEIGHT,
    dimensions: undefined as Dimensions | undefined
})

interface IProps {
    numberOfCols?: number
    numberOfRows?: number
    colWidth?: number
    rowHeight?: number
    scale?: number
    viewMode?: 'Day' | 'Week'
    startDate: Date
    children: React.ReactNode
}

export const PlannerContextProvider = (props: IProps) => {
    const targetRef = React.createRef<HTMLDivElement>()

    const [rowHeight, setRowHeight] = React.useState(utils.MIN_ROW_HEIGHT)
    const [numberOfRows, setNumberOfRows] = React.useState(utils.DEFAULT_NUMBER_OF_ROWS)
    const [numberOfCols, setNumberOfCols] = React.useState(utils.DEFAULT_NUMBER_OF_COLS)
    const [colWidth, setColWidth] = React.useState(utils.MIN_COL_WIDTH)
    const [scale, setScale] = React.useState(utils.DEFAULT_SCALE)
    const [viewMode, setViewMode] = React.useState(utils.DEFAULT_VIEW_MODE)
    const [startDate, setStartDate] = React.useState(new Date())
    const [yAxisWidth] = React.useState(utils.DEFAULT_YAXIS_WIDTH)
    const [xAxisHeight] = React.useState(utils.DEFAULT_XAXIS_HEIGHT)
    const [dimensions, setDimensions] = React.useState<Dimensions>()

    React.useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            })
        }
    }, [])

    React.useEffect(() => {
        if (props.numberOfRows !== undefined && props.numberOfRows > 0) {
            setNumberOfRows(props.numberOfRows)
        }
    }, [props.numberOfRows])

    React.useEffect(() => {
        if (props.numberOfCols !== undefined && props.numberOfCols > 0) {
            setNumberOfCols(props.numberOfCols)
        }
    }, [props.numberOfCols])

    React.useEffect(() => {
        if (props.colWidth !== undefined && props.colWidth >= utils.MIN_COL_WIDTH) {
            setColWidth(props.colWidth)
        }
    }, [props.colWidth])

    React.useEffect(() => {
        if (props.rowHeight !== undefined && props.rowHeight >= utils.MIN_ROW_HEIGHT) {
            setRowHeight(props.rowHeight)
        }
    }, [props.rowHeight])

    React.useEffect(() => {
        if (props.scale !== undefined && props.scale > 0) {
            setScale(props.scale)
        }
    }, [props.scale])

    React.useEffect(() => {
        setViewMode(props.viewMode || utils.DEFAULT_VIEW_MODE)
    }, [props.viewMode])

    React.useEffect(() => {
        const startDate = props.startDate
        startDate.setHours(0, 0, 0, 0)
        setStartDate(startDate)
    }, [props.startDate])

    return (
        <PlannerContext.Provider value={{ numberOfCols, numberOfRows, colWidth, rowHeight, scale, viewMode, startDate, yAxisWidth, xAxisHeight, dimensions }}>
            <div id="dm-Planner"
                className={styles.planner}
                ref={targetRef}
            >
                {props.children}
            </div>
        </PlannerContext.Provider>
    )
}