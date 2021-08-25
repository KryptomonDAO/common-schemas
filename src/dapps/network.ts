import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

/**
 * Different supported networks
 * @alpha
 */
export enum Network {
  ETHEREUM = 'ETHEREUM',
  BSC = 'BSC',
  MATIC = 'MATIC',
}

/**
 * @alpha
 */
export namespace Network {
  export const schema: JSONSchema<Network> = {
    type: 'string',
    enum: Object.values(Network),
  }

  export const validate: ValidateFunction<Network> = generateValidator(schema)
}
