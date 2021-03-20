import { FunctionComponent } from 'react'
import { MainWidth } from '../../containers/main-width'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'

export const Header: FunctionComponent = () => (
  <header className={styles.siteHeader}>
    <a className={styles.skipToContentLink} href="#main-content-area">
      Skip Navigation
    </a>
    <MainWidth>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>
            <NavLink to="/" className="no-decorate">
              College Search
            </NavLink>
          </h1>
        </div>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/schools">
            Schools
          </NavLink>
        </nav>
      </div>
    </MainWidth>
  </header>
)
