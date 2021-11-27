import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

import { ChainName } from './chain-name'

/**
 * Different supported chain ids
 * @alpha
 */
export enum ChainId {
  ETHEREUM_RINKEBY = 4,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97
}

/**
 * Get the chain name by chain id
 * @alpha
 */
export function getChainName(chainId: ChainId): ChainName | null {
  switch (chainId) {
    case ChainId.ETHEREUM_RINKEBY:
      return ChainName.ETHEREUM_RINKEBY
    case ChainId.BSC_MAINNET:
      return ChainName.BSC_MAINNET
    case ChainId.BSC_TESTNET:
      return ChainName.BSC_TESTNET
    default:
      return null
  }
}

/**
 * @alpha
 */
export namespace ChainId {
  export const schema: JSONSchema<ChainId> = {
    type: 'number',
    enum: Object.values(ChainId),
  }

  export const validate: ValidateFunction<ChainId> = generateValidator(schema)
}
