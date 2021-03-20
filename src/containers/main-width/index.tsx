import { FunctionComponent } from 'react'
import styles from './index.module.scss'

export const MainWidth: FunctionComponent = ({ children }) => (
  <div className={styles.mainWidth}>
    {children}
  </div>
)
