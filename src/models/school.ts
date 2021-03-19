import { Locale } from './locale'

export interface School {
  id?: string
  CITY: string
  STABBR: string
  ADM_RATE: string
  ZIP: string
  HIGHDEG: string
  LOCALE: keyof typeof Locale
  PROGRAMS: Array<string>
  SAT_AVG: string
  LONGITUDE: string
  INSTNM: string
  LATITUDE: string
  CCSIZSET: string
  INSTURL: string
}
