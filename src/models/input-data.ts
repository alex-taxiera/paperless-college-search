export interface InputData<T extends unknown> {
  id: string
  label: string
  placeholder?: string
  value: T
  onChange: (value: T) => void
}
