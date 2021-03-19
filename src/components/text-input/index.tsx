import { FunctionComponent } from 'react'
import { InputWrapper } from '../../containers/input-wrapper'
import { InputData } from '../../models/input-data'

export type Props = InputData<string>

export const TextInput: FunctionComponent<Props> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}) => (
  <InputWrapper
    id={id}
    label={label}
  >
    <input
      type="text"
      className="pcs-input"
      id={id}
      placeholder={placeholder ?? 'Enter text'}
      value={value}
      onChange={({ target }) => onChange(target.value)}
    />
  </InputWrapper>
)
