import React from 'react'
import * as office from 'office-ui-fabric-react'
import { PlannerContext } from './PlannerContextProvider'
import { YAxis } from './YAxis'
import { XAxis } from './XAxis'

export const Graph = () => {
    const context = React.useContext(PlannerContext)

    return (
        <office.ScrollablePane styles={{ root: { display: "flex", flexGrow: 1, flexDirection: 'column' } }}
            initialScrollPosition={context.numberOfRows * context.rowHeight}
        >
            <React.Fragment>
                <YAxis/>
            </React.Fragment>

            <office.Sticky stickyPosition={office.StickyPositionType.Footer}>
                <XAxis/>               
            </office.Sticky>
        </office.ScrollablePane>
    )
}