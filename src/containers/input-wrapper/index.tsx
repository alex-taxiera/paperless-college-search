import { FunctionComponent } from 'react'

// styles will need to be used "globally"
import './index.scss'

interface Props {
  label: string
  id: string
}

export const InputWrapper: FunctionComponent<Props> = ({
  id,
  label,
  children,
}) => (
  <div className="input-wrapper">
    <label htmlFor={id}>
      {label}
    </label>
    {children}
  </div>
)
