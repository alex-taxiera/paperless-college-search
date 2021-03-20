import { FunctionComponent } from 'react'

import styles from './index.module.scss'

interface Props {
  label: string
  id: string
}

export const InputWrapper: FunctionComponent<Props> = ({
  id,
  label,
  children,
}) => (
  <div className={styles['input-wrapper']}>
    <label htmlFor={id}>
      {label}
    </label>
    {children}
  </div>
)
