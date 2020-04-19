export * from './utils/views'

import * as React from 'react'
import { Planner } from './component/Planner'
import { PlannerContextProvider } from './provider/PlannerContextProvider'
import { ICapacity, ViewMode, IItem } from './utils'
import 'moment/locale/fr';
import 'moment/locale/nl';
import 'moment/locale/de';
import 'moment/locale/en-gb';
import moment from 'moment'

moment.locale(navigator.language)

interface IProps {
  numberOfCols?: number
  numberOfRows?: number
  rowHeight?: number
  colWidth?: number
  scale?: number
  viewMode?: ViewMode
  startDate?: Date
  capacity?: ICapacity[]
  items?: IItem[]
}

export const PlannerComponent = (props: IProps) => (
  
  <PlannerContextProvider startDate={props.startDate || new Date()}
    colWidth={props.colWidth}
    numberOfCols={props.numberOfCols}
    numberOfRows={props.numberOfRows}
    rowHeight={props.rowHeight}
    scale={props.scale}
    viewMode={props.viewMode}
    capacity={props.capacity}
    items={props.items}
  >
    <Planner />
  </PlannerContextProvider>
)