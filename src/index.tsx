import * as React from 'react'
import { Graph } from './component/Graph'
import { PlannerContextProvider } from './component/PlannerContextProvider'

interface IProps {
  numberOfCols?: number
  numberOfRows?: number
  rowHeight?: number
  colWidth?: number
  scale?: number
  viewMode?: 'Day' | 'Week'
  startDate?: Date
}

export const PlannerComponent = (props: IProps) => (
  <PlannerContextProvider startDate={props.startDate || new Date()}
    colWidth={props.colWidth}
    numberOfCols={props.numberOfCols}
    numberOfRows={props.numberOfRows}
    rowHeight={props.rowHeight}
    scale={props.scale}
    viewMode={props.viewMode}
  >
    <Graph />
  </PlannerContextProvider>
)