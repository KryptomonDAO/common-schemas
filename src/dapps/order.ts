import { generateValidator, JSONSchema, ValidateFunction } from '../validation'
import { ChainId } from './chain-id'
import { ListingStatus } from './listing-status'
import { Network } from './network'

export type Order = {
  id: string
  contractAddress: string
  tokenId: string
  owner: string
  buyer: string | null
  price: string
  status: ListingStatus
  paymentToken: string
  expiresAt: number
  createdAt: number
  updatedAt: number
  network: Network
  chainId: ChainId
}

export namespace Order {
  export const schema: JSONSchema<Order> = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      contractAddress: {
        type: 'string',
      },
      tokenId: {
        type: 'string',
      },
      owner: {
        type: 'string',
      },
      buyer: {
        type: ['string'],
        nullable: true,
      },
      price: {
        type: 'string',
      },
      status: ListingStatus.schema,
      paymentToken: {
        type: 'string',
      },
      network: Network.schema,
      chainId: ChainId.schema,
      expiresAt: {
        type: 'integer',
      },
      createdAt: {
        type: 'integer',
      },
      updatedAt: {
        type: 'integer',
      },
    },
    required: [
      'id',
      'contractAddress',
      'tokenId',
      'owner',
      'buyer',
      'price',
      'status',
      'paymentToken',
      'network',
      'chainId',
      'expiresAt',
      'createdAt',
      'updatedAt',
    ],
  }

  export const validate: ValidateFunction<Order> = generateValidator(schema)
}
