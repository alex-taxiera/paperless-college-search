import { FunctionComponent } from 'react'
import { MainWidth } from '../containers/main-width'
import { Footer } from './footer'
import { Header } from './header'
import styles from './index.module.scss'

export const Layout: FunctionComponent = ({ children }) => (
  <>
    <Header/>
    <main id="main-content-area" className={styles.main}>
      <MainWidth>
        {children}
      </MainWidth>
    </main>
    <Footer/>
  </>
)
