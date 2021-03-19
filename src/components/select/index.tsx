import { FunctionComponent } from 'react'
import cx from 'classnames'

import { InputWrapper } from '../../containers/input-wrapper'
import { InputData } from '../../models/input-data'

import styles from './index.module.scss'

export type OptionID = number | string

export interface Option<ID extends OptionID> {
  id: ID
  label: string
}

export type Props<ID extends OptionID> = InputData<Option<ID>> & {
  options: Array<Option<ID>>
}

export function Select<ID extends OptionID> ({
  id,
  label,
  placeholder,
  value,
  options,
  onChange,
}: Props<ID>): ReturnType<FunctionComponent> {
  return (
    <InputWrapper
      id={id}
      label={label}
    >
      <select
        className={cx(styles['pcs-select'], 'pcs-input')}
        id={id}
        value={value.id}
        onChange={
          ({ target }) =>
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onChange(options.find((option) => option.id === target.value)!)
        }
      >
        <option value="" disabled={true}>
          {placeholder ?? 'Choose one...'}
        </option>
        {
          options.map((option, key) => (
            <option key={key} value={option.id}>
              {option.label}
            </option>
          ))
        }
      </select>
    </InputWrapper>
  )
}
