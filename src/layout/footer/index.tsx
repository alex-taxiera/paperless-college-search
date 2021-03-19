import { FunctionComponent } from 'react'
import { AnchorToTab } from '../../components/anchor-to-tab'

export const Footer: FunctionComponent = () => (
  <footer className="d-flex justify-content-center p-2">
    <AnchorToTab href="https://github.com/alex-taxiera">
      Alex Taxiera
    </AnchorToTab>
    &nbsp;
    <AnchorToTab href="https://github.com/alex-taxiera/paperless-college-search">
      {'<Code />'}
    </AnchorToTab>
  </footer>
)
