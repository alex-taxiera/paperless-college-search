import { FunctionComponent } from 'react'
import cx from 'classnames'

import styles from './index.module.scss'

export interface Props {
  className?: string
}

export const FullPage: FunctionComponent<Props> = ({ className, children }) => (
  <div className={cx(className, 'p-4', styles['full-page'])}>
    {children}
  </div>
)
