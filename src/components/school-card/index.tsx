import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { School } from '../../models/school'
import { getCarnegieData } from '../../utils/carnegie-data'
import { AnchorToTab } from '../anchor-to-tab'

import styles from './index.module.scss'

type Props = {
  data: School
}

export const SchoolCard: FunctionComponent<Props> = ({
  data,
}) => {
  const carnegieData = getCarnegieData(data.CCSIZSET)

  return (
    <article className={styles['school-card']}>
      <header>
        <h3>
          <NavLink to={`/schools/${data.INSTURL}`}>
            {data.INSTNM}
          </NavLink>
        </h3>
      </header>
      <main>
        <div>
          <img height="150px" src="/university-small.png" />
        </div>
        <div className={styles.data}>
          <div>
            {data.CITY},&nbsp;{data.STABBR}
          </div>
          <div>
            Size:&nbsp;{carnegieData?.size ?? 'Unknown'}
          </div>
        </div>
      </main>
      <footer>
        <div>
          {data.PROGRAMS.length}&nbsp;Programs
        </div>
        <div>
          {/* hopefully this works for most URLs */}
          <AnchorToTab href={`https://${data.INSTURL}`}>
            Website
          </AnchorToTab>
        </div>
      </footer>
    </article>

  )
}
