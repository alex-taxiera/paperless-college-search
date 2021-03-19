export interface CarnegieClass {
  type: 'Two-year' | 'Four-year' | 'Exclusively Graduate/Professional'
  size?: 'Very Small' | 'Small' | 'Medium' | 'Large' | 'Very Large'
  residentiality?: {
    type: 'Residential' | 'Nonresidential'
    mod: 'Primarily' | 'Highly'
  }
}
