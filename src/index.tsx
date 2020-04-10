import * as React from 'react'
import * as office from 'office-ui-fabric-react'
import { Grid, Row, Col } from './component/UI/Grid'
import { Labels } from './component/labels'
import { Sticky, StickyPositionType } from 'office-ui-fabric-react'
import styles from './styles.module.css'

interface IProps {
  numberOfCols?: number
  numberOfRows?: number
  viewMode?: 'Day' | 'Week'
  startDate?: Date
  labelStyle?: React.CSSProperties
}

const DEFAULT_NUMBER_OF_COLS = 10
const DEFAULT_NUMBER_OF_ROWS = 10

export const PlannerComponent = (props: IProps) => {
  //const [mpsGraphScale, setMpsGraphScale] = React.useState(1)
  //const [zoom, setZoom] = React.useState(1)
  //const [height, setHeight] = React.useState(window.innerHeight - 5 /*initial*/ - VERTICAL_MARGINS_PX)
  //const [lastWindowInnerHeight, setLastWindowInnerHeight] = React.useState(window.innerHeight)
  //const [plannerTop, setPlannerTop] = React.useState(0)
  //const [scale, setScale] = React.useState<number>()
  //const [maxValue, setMaxValue] = React.useState(1)
  const [, setNumberOfRows] = React.useState(DEFAULT_NUMBER_OF_ROWS)
  const [numberOfCols, setNumberOfCols] = React.useState(DEFAULT_NUMBER_OF_COLS)
  //const [scrollWidth] = React.useState(16)

  React.useEffect(() => {
    setNumberOfCols(props.numberOfCols || DEFAULT_NUMBER_OF_COLS)
  }, [props.numberOfCols])

  React.useEffect(() => {
    setNumberOfRows(props.numberOfRows || DEFAULT_NUMBER_OF_ROWS)
  }, [props.numberOfRows])

  return (
    <div id="planner" className={styles.planner}>
      <office.ScrollablePane style={{ display: "flex", flexGrow: 1 }}>
        <div className={styles.mpsMain}>
          <Grid id="MPSMain">

          </Grid>
        </div>        

        <Sticky stickyPosition={StickyPositionType.Footer}>
          <Grid id="MPSRow">
            <Row id="MPSLabelRow">
              <Col id="FirstLabelCol"
                width={34}
              />
              <Labels numberOfCols={numberOfCols}
                viewMode={props.viewMode}
                startDate={props.startDate}
              />
            </Row>
          </Grid>
        </Sticky>
      </office.ScrollablePane>
    </div>
  )
}