import {
  FunctionComponent,
  useEffect,
  useState,
} from 'react'
import { useObservable } from '@libreact/use-observable'
import cx from 'classnames'

import * as schoolService from '../../services/schools'

import { TextInput } from '../../components/text-input'
import { SchoolCard } from '../../components/school-card'

import styles from './index.module.scss'
import {
  Option,
  Select,
} from '../../components/select'
import { School } from '../../models/school'
import { KeysMatching } from '../../utils/keys-matching'

export type SchoolSortKeys = NonNullable<KeysMatching<School, string>>

const schoolSortOptions: Array<Option<SchoolSortKeys>> = [
  {
    id: 'INSTNM',
    label: 'Name',
  },
  {
    id: 'ADM_RATE',
    label: 'Admission Rate',
  },
  {
    id: 'SAT_AVG',
    label: 'SAT Average',
  },
]

export const SchoolList: FunctionComponent = () => {
  const [ schools ] = useObservable(schoolService.store.query.selectAll())
  const [ searchText, setSearchText ] = useState('')
  const [ sortBy, setSortBy ] = useState(schoolSortOptions[0])

  useEffect(() => {
    if (schools.length === 0) {
      schoolService.getAll().toPromise().catch(() => undefined)
    }
  }, [ schools ])

  if (schools.length === 0) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const filtered = schools.filter(
    ({ INSTNM }) =>
      INSTNM.toLowerCase().includes(searchText.toLowerCase()),
  ).sort((a, b) => a[sortBy.id] < b[sortBy.id] ? -1 : 1)

  return (
    <div className="mt-4">
      <form className={styles['school-filter']}>
        <TextInput
          id={styles['school-search']}
          label="Search"
          placeholder="Search by name..."
          value={searchText}
          onChange={setSearchText}
        />
        <Select
          id={styles['school-sort']}
          label="Sort By"
          options={schoolSortOptions}
          value={sortBy}
          onChange={setSortBy}
        />
      </form>
      <div className={cx('mt-4', styles['school-list'])}>
        {
          filtered.map((school, key) => (
            <SchoolCard key={key} data={school} />
          ))
        }
      </div>
    </div>
  )
}

// for lazy loading
export default SchoolList
