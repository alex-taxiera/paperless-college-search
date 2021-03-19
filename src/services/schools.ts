import {
  Observable,
  from,
} from 'rxjs'
import {
  map,
  tap,
} from 'rxjs/operators'

import { School } from '../models/school'
import { createStore } from '../utils/create-store'

export const store = createStore<School>('schools')

export function getAll (): Observable<Array<School>> {
  return from(
    fetch('/ma_schools.json')
      .then((res) => res.json() as Promise<Array<School>>),
  ).pipe(
    // the URL field is a somewhat unique identifier
    // but it can be a little hard to use for routing
    // since UNITID is not actually in the data we will tidy up URL and use that instead
    map((schools) =>
      schools.map((school) => ({
        ...school,
        id: school.INSTURL
          .replace(/https?:\/\//, '')
          .replace(/\/.*$/, '')
          .toLowerCase(),
      })),
    ),
    tap((schools) => store.data.upsertMany(schools)),
  )
}
