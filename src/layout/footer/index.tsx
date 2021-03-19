import { FunctionComponent } from 'react'
import { AnchorToTab } from '../../components/anchor-to-tab'

export const Footer: FunctionComponent = () => (
  <footer className="d-flex justify-content-center">
    <AnchorToTab href="https://github.com/alex-taxiera">
      Alex Taxiera
    </AnchorToTab>
    &nbsp;
    <AnchorToTab href="https://github.com/alex-taxiera">
      {'<Code />'}
    </AnchorToTab>
  </footer>
)
