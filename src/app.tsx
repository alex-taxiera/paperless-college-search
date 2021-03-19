import { FunctionComponent } from 'react'
import { Layout } from './layout'
import { Routes } from './pages'

export const App: FunctionComponent = () => (
  <Layout>
    <Routes/>
  </Layout>
)
