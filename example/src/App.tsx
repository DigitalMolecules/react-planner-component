import React, { useState } from 'react'

import { PlannerComponent, ViewMode } from 'react-planner-component'
import * as office from 'office-ui-fabric-react'
import 'react-planner-component/dist/index.css'
import { mockCapacity } from './mockData'

const App = () => {
    const [numberOfRows, setNumberOfRows] = useState(20)
    const [numberOfCols, setNumberOfCols] = useState(5)
    const [rowHeight, setRowHeight] = useState(70)
    const [colWidth, setColWidth] = useState(50)
    const [scale, setScale] = useState(5)
    const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Day)
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)

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
                    <office.Slider key="ScaleSlider"
                        label="Scale"
                        min={0}
                        max={20}
                        defaultValue={scale}
                        onChange={(value) => setScale(value)}
                        showValue={true}
                    />
                    <office.Dropdown placeholder="Select an option"
                        label="View mode"
                        selectedKey={viewMode}
                        options={[
                            { key: ViewMode.Day, text: 'Day' },
                            { key: ViewMode.Week, text: 'Week' },
                        ]}
                        onChange={(ev, option) => setViewMode(option?.key as ViewMode)}
                    />
                </div>
                <div style={{ maxWidth: 300, display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                    <office.Slider key="heightSlider"
                        label="height"
                        min={0}
                        max={100}
                        defaultValue={height}
                        onChange={(value) => setHeight(value)}
                        showValue={true}
                    />
                    <office.Slider key="widthSlider"
                        label="width"
                        min={0}
                        max={100}
                        snapToStep
                        defaultValue={width}
                        onChange={(value) => setWidth(value)}
                        showValue={true}
                    />
                </div>
            </div>
            <div id="graph">
                <div id="planner" style={{ width: `${width}%`, height: `${height}%` }}>
                    <PlannerComponent key="Planner"
                        numberOfRows={numberOfRows}
                        numberOfCols={numberOfCols}
                        colWidth={colWidth}
                        rowHeight={rowHeight}
                        viewMode={viewMode}
                        scale={scale}
                        capacity={mockCapacity()}
                    />
                </div>
            </div>
        </div>
    )
}

export default App