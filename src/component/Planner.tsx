import React from 'react'
import * as office from 'office-ui-fabric-react'
import { PlannerContext } from './PlannerContextProvider'
import { YAxis } from './UI/YAxis'
import { XAxis } from './UI/XAxis'
import { DataCols } from './UI/DataCols'

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