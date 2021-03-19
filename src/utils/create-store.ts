import {
  createEntityStore,
  createEntityQuery,
  EntityState,
} from '@datorama/akita'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createStore<T> (
  name: string,
  options: {
    initial?: Record<string, T>
    idKey?: string
  } = {},
) {
  const store = createEntityStore<EntityState<T>>({}, {
    name,
    idKey: options.idKey,
  })
  if (options.initial) {
    store.set(options.initial)
  }

  const query = createEntityQuery(store)

  return {
    data: store,
    query,
  }
}
