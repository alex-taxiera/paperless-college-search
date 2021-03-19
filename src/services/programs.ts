import {
  Observable,
  from,
} from 'rxjs'
import {
  tap,
  map,
} from 'rxjs/operators'

import { Program } from '../models/program'
import { createStore } from '../utils/create-store'

export const store = createStore<Program>('programs')

export function getAll (): Observable<Array<Program>> {
  return from(
    fetch('/programs.json')
      .then((res) => res.json() as Promise<Record<string, string>>),
  ).pipe(
    map((res) => Object.entries(res).map(([ id, description ]) => ({
      id,
      description,
    }))),
    tap((programs) => {
      // eslint-disable-next-line no-console
      console.log('upseting')
      store.data.upsertMany(programs)
    }),
  )
}
