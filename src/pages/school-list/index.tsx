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
  ).sort((a, b) => {
    // our data is a bit unclean so we don't have actual numbers
    // this could have been done in the service level
    // but setting up complicated data massaging on the front end seems counterintuitive
    const numA = parseFloat(a[sortBy.id])
    const numB = parseFloat(b[sortBy.id])
    if (!isNaN(numA) || !isNaN(numB)) {
      return (isNaN(numB) ? 0 : numB) - (isNaN(numA) ? 0 : numA)
    }

    return a[sortBy.id] < b[sortBy.id] ? -1 : 1
  })

  return (
    <div className="mt-4">
      <form
        className={styles.schoolFilter}
        onSubmit={(event) => event.preventDefault()}
      >
        <TextInput
          id={styles.schoolSearch}
          label="Search"
          placeholder="Search by name..."
          value={searchText}
          onChange={setSearchText}
        />
        <Select
          id={styles.schoolSort}
          label="Sort By"
          options={schoolSortOptions}
          value={sortBy}
          onChange={setSortBy}
        />
      </form>
      <div className={cx('mt-4', styles.schoolList)}>
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
