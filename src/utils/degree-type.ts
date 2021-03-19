// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getDegreeType (id: string) {
  switch (parseInt(id)) {
    case 0:
      return 'None'
    case 1:
      return 'Certificate'
    case 2:
      return 'Associate'
    case 3:
      return 'Bachelor\'s'
    case 4:
      return 'Graduate'
    default:
      return 'N/A'
  }
}
