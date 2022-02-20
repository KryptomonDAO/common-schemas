import { generateValidator, JSONSchema, ValidateFunction } from '../validation'
import { ChainId } from './chain-id'
import { ListingStatus } from './listing-status'
import { Network } from './network'

export type BreedingOrder = {
  id: string
  kryptomonAddress: string
  tokenId: string
  breeder: string
  price: string
  status: ListingStatus
  createdAt: number
  updatedAt: number
  network: Network
  chainId: ChainId
}

export namespace BreedingOrder {
  export const schema: JSONSchema<BreedingOrder> = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      kryptomonAddress: {
        type: 'string',
      },
      tokenId: {
        type: 'string',
      },
      breeder: {
        type: 'string',
      },
      price: {
        type: 'string',
      },
      status: ListingStatus.schema,
      network: Network.schema,
      chainId: ChainId.schema,
      createdAt: {
        type: 'integer',
      },
      updatedAt: {
        type: 'integer',
      },
    },
    required: [
      'id',
      'kryptomonAddress',
      'tokenId',
      'breeder',
      'price',
      'status',
      'network',
      'chainId',
      'createdAt',
      'updatedAt',
    ],
  }

  export const validate: ValidateFunction<BreedingOrder> = generateValidator(schema)
}
