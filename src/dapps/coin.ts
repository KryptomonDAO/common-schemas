import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

/**
 * Different supported coins
 * @alpha
 */
export enum Coin {
  ETH = 'ETH',
  BNB = 'BNB',
}

/**
 * @alpha
 */
export namespace Coin {
  export const schema: JSONSchema<Coin> = {
    type: 'string',
    enum: Object.values(Coin),
  }

  export const validate: ValidateFunction<Coin> = generateValidator(schema)
}
