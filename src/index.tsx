import * as React from 'react'
import * as office from 'office-ui-fabric-react'
import * as utils from './utils'
import { Graph, Row, Col } from './component/graph'
import { GraphLabels } from './component/GraphLabels'
import styles from './styles.module.css'
import { GraphRows } from './component/GraphRows'

interface IProps {
  numberOfCols?: number
  numberOfRows?: number
  rowHeight?: number
  colWidth?: number
  scale?: number
  viewMode?: 'Day' | 'Week'
  startDate?: Date
}
/*
export const DEFAULT_SCALE = 1
*/

export const PlannerComponent = (props: IProps) => {

  return (
    <div id="dm-Planner" className={styles.planner}>
      <office.ScrollablePane styles={{ root: { display: "flex", flexGrow: 1, flexDirection: 'column' } }}
        initialScrollPosition={(props.numberOfRows === undefined ? utils.DEFAULT_NUMBER_OF_ROWS : props.numberOfRows) * (props.rowHeight || utils.MIN_ROW_HEIGHT)}
      >
        <Graph id="dm-Graph">
          <GraphRows key="dm-GraphRows"
            numberRows={props.numberOfRows}
            numberOfCols={props.numberOfCols}
            rowHeight={props.rowHeight}
            colWidth={props.colWidth}
            scale={props.scale}
          />
        </Graph>

        <office.Sticky stickyPosition={office.StickyPositionType.Footer}>
          <Row id="dm-XRow"
            key="dm-XRow"
            rowHeight={80}            
          >
            <div className={styles.rowContent}>
              <div className={styles.FirstXCol}>
                <Col id="dm-XCol"
                  key="dm-XCol"
                  width={34}
                >
                  <div style={{ backgroundColor: 'White', display: 'flex', flexGrow: 1 }} />
                </Col>
              </div>
              <div className={styles.FirstXLabelRow}>
                <GraphLabels numberOfCols={props.numberOfCols}
                  viewMode={props.viewMode}
                  startDate={props.startDate}
                  colWidth={props.colWidth}
                />
              </div>
            </div>
          </Row>
        </office.Sticky>
      </office.ScrollablePane>
    </div>
  )
}