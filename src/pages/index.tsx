import {
  Suspense,
  lazy,
  FunctionComponent,
} from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

const Home = lazy(() => import('./home'))
const SchoolList = lazy(() => import('./school-list'))
const SchoolDetails = lazy(() => import('./school-details'))

export const Routes: FunctionComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/schools" component={SchoolList}/>
      <Route path="/schools/:id" component={SchoolDetails} />
    </Switch>
  </Suspense>
)
