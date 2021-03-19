import { FunctionComponent } from 'react'
import { FullPage } from '../../containers/full-page'

export const Home: FunctionComponent = () => (
  <FullPage className="text-center">
    <p className="lead">
      Welcome to College Search!
    </p>
    <p>
      This site is a demo for an interview with Paperless Parts in Boston!
      Find the link to schools to see a directory of higher education
      insitutions in Massachusetts.
    </p>
    <p>
      Please enjoy this picture of my favorite Pokémon!
    </p>
    <img
      src="/gmax-chari-glitch.gif"
    />
  </FullPage>
)
// for lazy loading
export default Home
