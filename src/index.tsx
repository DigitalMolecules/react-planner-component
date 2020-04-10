import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const PlannerComponent = ({ text }: Props) => (
  <div className={styles.test}> 
    Example Planner Component: {text}
  </div>
)
