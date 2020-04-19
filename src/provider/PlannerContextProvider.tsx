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
    dimensions: undefined as Dimensions | undefined,
    noOfDaysOffset: 1,
    capacity: [] as utils.ICapacity[]
})

interface IProps {
    numberOfCols?: number
    numberOfRows?: number
    colWidth?: number
    rowHeight?: number
    scale?: number
    viewMode?: utils.ViewMode
    startDate: Date
    capacity?: utils.ICapacity[]
    children: React.ReactNode
}

export const PlannerContextProvider = (props: IProps) => {
    const [targetRef] = React.useState(React.createRef<HTMLDivElement>())

    const [rowHeight, setRowHeight] = React.useState(utils.MIN_ROW_HEIGHT)
    const [numberOfRows, setNumberOfRows] = React.useState(utils.DEFAULT_NUMBER_OF_ROWS)
    const [numberOfCols, setNumberOfCols] = React.useState(utils.DEFAULT_NUMBER_OF_COLS)
    const [colWidth, setColWidth] = React.useState(utils.MIN_COL_WIDTH)
    const [scale, setScale] = React.useState(utils.DEFAULT_SCALE)
    const [viewMode, setViewMode] = React.useState<utils.ViewMode>(utils.DEFAULT_VIEW_MODE)
    const [startDate, setStartDate] = React.useState(new Date())
    const [yAxisWidth] = React.useState(utils.DEFAULT_YAXIS_WIDTH)
    const [xAxisHeight] = React.useState(utils.DEFAULT_XAXIS_HEIGHT)
    const [dimensions, setDimensions] = React.useState<Dimensions>()
    const [noOfDaysOffset, setNoOfDaysOffset] = React.useState(1)

    // data
    const [capacity, setCapacity] = React.useState<utils.ICapacity[]>([])

    const updateSize = () => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            })
        }
    }

    React.useLayoutEffect(() => {
        updateSize()
    }, [])

    React.useEffect(() => {
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    React.useEffect(() => {
        if (props.numberOfRows !== undefined && props.numberOfRows > 0) {
            setNumberOfRows(props.numberOfRows)

            if (dimensions && props.rowHeight !== undefined && props.rowHeight >= 0) {
                setRowHeight(utils.calcRowHeight(props.rowHeight, props.numberOfRows, dimensions.height))
            }
        }
    }, [props.numberOfRows, props.rowHeight, dimensions])

    React.useEffect(() => {
        if (props.numberOfCols !== undefined && props.numberOfCols > 0) {
            setNumberOfCols(props.numberOfCols)

            if (dimensions && props.colWidth !== undefined && props.colWidth >= 0) {
                setColWidth(utils.calcColWidth(props.colWidth, props.numberOfCols, dimensions.width, yAxisWidth))
            }
        }
    }, [props.numberOfCols, props.colWidth, dimensions])

    React.useEffect(() => {
        if (props.scale !== undefined && props.scale > 0) {
            setScale(props.scale)
        }
    }, [props.scale])

    React.useEffect(() => {
        setViewMode(props.viewMode || utils.DEFAULT_VIEW_MODE)
        setNoOfDaysOffset((props.viewMode || utils.DEFAULT_VIEW_MODE) === utils.ViewMode.Day ? 1 : 7)
    }, [props.viewMode])

    React.useEffect(() => {
        const startDate = props.startDate
        startDate.setHours(0, 0, 0, 0)
        setStartDate(startDate)
    }, [props.startDate])

    React.useEffect(() => {
        setCapacity([...props.capacity || []])
    }, [props.capacity])

    return (
        <PlannerContext.Provider value={{ 
            numberOfCols, 
            numberOfRows, 
            colWidth, 
            rowHeight, 
            scale, 
            viewMode, 
            startDate, 
            yAxisWidth, 
            xAxisHeight, 
            dimensions,
            capacity,
            noOfDaysOffset
        }}>
            <div id="dm-Planner"
                className={styles.planner}
                ref={targetRef}
            >
                {props.children}
            </div>
        </PlannerContext.Provider>
    )
}