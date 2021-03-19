import { CarnegieClass } from '../models/carnegie-class'

export function getCarnegieSize (
  id: number,
): CarnegieClass['size'] | undefined {
  switch (id) {
    case 1:
    case 6:
    case 7:
    case 8:
      return 'Very Small'
    case 2:
    case 9:
    case 10:
    case 11:
      return 'Small'
    case 3:
    case 12:
    case 13:
    case 14:
      return 'Medium'
    case 4:
    case 15:
    case 16:
    case 17:
      return 'Large'
    case 5:
      return 'Very Large'
    default:
      return undefined
  }
}

export function getCarnegieType (id: number): CarnegieClass['type'] {
  return id < 6
    ? 'Two-year'
    : id < 18
      ? 'Four-year'
      : 'Exclusively Graduate/Professional'
}

export function getCarnegieResidentiality (
  id: number,
): CarnegieClass['residentiality'] | undefined {
  switch (id) {
    case 6:
    case 9:
    case 12:
    case 15:
      return {
        mod: 'Primarily',
        type: 'Nonresidential',
      }
    case 7:
    case 10:
    case 13:
    case 16:
      return {
        mod: 'Primarily',
        type: 'Residential',
      }
    case 8:
    case 11:
    case 14:
    case 17:
      return {
        mod: 'Highly',
        type: 'Residential',
      }
    default:
      return undefined
  }
}

export function getCarnegieData (id: string): CarnegieClass | undefined {
  const num = parseInt(id)
  if (num < 1 || num > 18) {
    return undefined
  }

  return {
    type: getCarnegieType(num),
    size: getCarnegieSize(num),
    residentiality: getCarnegieResidentiality(num),
  }
}
