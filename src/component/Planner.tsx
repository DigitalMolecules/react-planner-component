import React from 'react'
import * as office from 'office-ui-fabric-react'
import { PlannerContext } from '../provider/PlannerContextProvider'
import { YAxis } from './YAxis'
import { XAxis } from './XAxis'
import { DataCols } from './DataCols'

export const Planner = () => {
    const context = React.useContext(PlannerContext)

    return (
        <office.ScrollablePane styles={{ root: { display: "flex", flexGrow: 1, flexDirection: 'column' } }}
            initialScrollPosition={context.numberOfRows * context.rowHeight}
        >
            <YAxis/>
            <DataCols/>
        
            <office.Sticky stickyPosition={office.StickyPositionType.Footer}>
                <XAxis/>               
            </office.Sticky>
        </office.ScrollablePane>
    )
}