import React, { useState } from 'react'

import { PlannerComponent } from 'react-planner-component'
import * as office from 'office-ui-fabric-react'
import 'react-planner-component/dist/index.css'

const App = () => {
    const [numberOfRows, setNumberOfRows] = useState(20)
    const [numberOfCols, setNumberOfCols] = useState(10)
    const [rowHeight, setRowHeight] = useState(70)
    const [colWidth, setColWidth] = useState(50)
    const [viewMode, setViewMode] = useState('Day')

    return (
        <div id="content">
            <div id="sliders">
                <div style={{ maxWidth: 300, display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                    <office.Slider key="RowSlider"
                        label="number of rows"
                        min={0}
                        max={100}
                        defaultValue={numberOfRows}
                        onChange={(value) => setNumberOfRows(value)}
                        showValue={true}
                    />
                    <office.Slider key="rowHeightSlider"
                        label="row height"
                        min={0}
                        step={10}
                        max={300}
                        snapToStep
                        defaultValue={rowHeight}
                        onChange={(value) => setRowHeight(value)}
                        showValue={true}
                    />
                </div>
                <div style={{ maxWidth: 300, display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                    <office.Slider key="ColumnSlider"
                        label="number of columns"
                        min={0}
                        max={100}
                        defaultValue={numberOfCols}
                        onChange={(value) => setNumberOfCols(value)}
                        showValue={true}
                    />
                    <office.Slider key="colWidthSlider"
                        label="column width"
                        min={0}
                        step={10}
                        max={300}
                        snapToStep
                        defaultValue={colWidth}
                        onChange={(value) => setColWidth(value)}
                        showValue={true}
                    />
                </div>
                <div style={{ maxWidth: 300, display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                    <office.Dropdown placeholder="Select an option"
                        label="View mode"
                        selectedKey={viewMode}
                        options={[
                            { key: 'Day', text: 'Day' },
                            { key: 'Week', text: 'Week' },
                        ]}
                        onChange={(ev, option) => setViewMode(option.key)}
                    />
                </div>
            </div>
            <div id="graph">
                <PlannerComponent key="Planner"
                    numberOfRows={numberOfRows}
                    numberOfCols={numberOfCols}
                    colWidth={colWidth}
                    rowHeight={rowHeight}
                    viewMode={viewMode}
                />
            </div>
        </div>
    )
}

export default App