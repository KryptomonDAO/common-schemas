import { generateValidator, JSONSchema, ValidateFunction } from '../validation'
import { ChainId } from './chain-id'
import { Network } from './network'
import { NFTCategory } from './nft-category'

export type Contract = {
  name: string
  address: string
  category: NFTCategory
  network: Network
  chainId: ChainId
}

export namespace Contract {
  export const schema: JSONSchema<Contract> = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
      category: NFTCategory.schema,
      network: Network.schema,
      chainId: ChainId.schema,
    },
    required: ['name', 'address', 'category', 'network', 'chainId'],
  }

  export const validate: ValidateFunction<Contract> = generateValidator(schema)
}
