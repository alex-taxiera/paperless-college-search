import { FunctionComponent } from 'react'

type Props = Partial<HTMLHyperlinkElementUtils>

export const AnchorToTab: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <a target="_blank" {...props}>
      {children}
    </a>
  )
}
