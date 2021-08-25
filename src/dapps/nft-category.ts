import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

export enum NFTCategory {
  KRYPTOMON = 'kryptomon'
}

export namespace NFTCategory {
  export const schema: JSONSchema<NFTCategory> = {
    type: 'string',
    enum: Object.values(NFTCategory),
  }

  export const validate: ValidateFunction<NFTCategory> =
    generateValidator(schema)
}
