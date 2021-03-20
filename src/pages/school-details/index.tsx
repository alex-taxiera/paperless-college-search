import { useObservable } from '@libreact/use-observable'
import cx from 'classnames'
import {
  FunctionComponent,
  useState,
  useEffect,
} from 'react'
import { useParams } from 'react-router-dom'
import { Locale } from '../../models/locale'

import * as schoolService from '../../services/schools'
import * as programService from '../../services/programs'
import { getCarnegieData } from '../../utils/carnegie-data'
import { getDegreeType } from '../../utils/degree-type'

import styles from './index.module.scss'
import { Program } from '../../models/program'
import { FullPage } from '../../containers/full-page'

export const SchoolDetails: FunctionComponent = () => {
  const params = useParams<{ id: string }>()
  const [ programs, setPrograms ] = useState<Array<Program>>([])

  const [
    data,
  ] = useObservable(schoolService.store.query.selectEntity(params.id))

  useEffect(() => {
    if (!data) {
      schoolService.getAll().toPromise().catch(() => undefined)
    } else {
      // feels not very straightforward here but
      // not sure what the best observable tooling is here and this seems somewhat elegant
      // basically just setting my observable subscription up once i know which programs i need
      // and optionally fetching them if they don't seem to be there
      programService.store.query.selectMany(data.PROGRAMS)
        .subscribe((programs) => {
          if (programs.length !== data.PROGRAMS.length) {
            programService.getAll().toPromise().catch(() => undefined)
          }
          setPrograms(programs)
        })
    }
  }, [ data ])

  if (!data) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const averageSAT = data.SAT_AVG === 'NULL' ? 'Unknown' : data.SAT_AVG
  const admissionRate = data.ADM_RATE === 'NULL'
    ? 'Unknown'
    : (parseFloat(data.ADM_RATE) * 100).toFixed(2) + '%'

  const carnegieData = getCarnegieData(data.CCSIZSET)
  const highestDegree = getDegreeType(data.HIGHDEG)

  const residentiality = !carnegieData?.residentiality
    ? null
    : (
      <li>
        {carnegieData.residentiality.mod}&nbsp;
        {carnegieData.residentiality.type}
      </li>
    )

  const programList = programs.length === 0
    ? 'None'
    : programs.map((program, key) => (
      <div key={key}>
        <h5>
          {program.id}
        </h5>
        <p>
          {program.description}
        </p>
      </div>
    ))

  return (
    <FullPage>
      <h2 className="mb-4">
        {data.INSTNM}
      </h2>
      <img src="/university-big.jpg" />
      <div className={cx('mt-4', styles.contentArea)}>
        <div>
          <div>
            <h3 className="mb-3">
              General Information
            </h3>
            <ul>
              <li>
                {carnegieData?.type}s
              </li>
              <li>
                Highest Degree Awarded:&nbsp;{highestDegree}
              </li>
              <li>
                School Size:&nbsp;{carnegieData?.size}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3">
              Admission Stats
            </h3>
            <ul>
              <li>
                Admission Rate:&nbsp;{admissionRate}
              </li>
              <li>
                Average SAT Score:&nbsp;{averageSAT}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3">
              Area
            </h3>
            <ul>
              <li>
                {Locale[data.LOCALE]}
              </li>
              {residentiality}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="mb-3">
            Academic Programs
          </h3>
          {programList}
        </div>
      </div>
    </FullPage>
  )
}
// for lazy loading
export default SchoolDetails
