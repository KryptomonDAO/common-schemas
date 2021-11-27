import { generateValidator, JSONSchema, ValidateFunction } from '../validation'
import { ChainId } from './chain-id'

/**
 * Different supported chain names
 * @alpha
 */
export enum ChainName {
  ETHEREUM_RINKEBY = 'RINKEBY',
  BSC_MAINNET = 'BSC_MAINNET',
  BSC_TESTNET = 'BSC_TESTNET',
}

/**
 * Get chain id by chain name
 * @alpha
 */
export function getChainId(chainName: ChainName): ChainId | null {
  switch (chainName) {
    case ChainName.ETHEREUM_RINKEBY:
      return ChainId.ETHEREUM_RINKEBY
    case ChainName.BSC_MAINNET:
      return ChainId.BSC_MAINNET
    case ChainName.BSC_TESTNET:
      return ChainId.BSC_TESTNET
    default:
      return null
  }
}

/**
 * @alpha
 */
export namespace ChainName {
  export const schema: JSONSchema<ChainName> = {
    type: 'string',
    enum: Object.values(ChainName),
  }

  export const validate: ValidateFunction<ChainName> = generateValidator(schema)
}
