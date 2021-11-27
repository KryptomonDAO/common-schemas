import expect from 'expect'
import { ChainId, ChainName, getChainName } from '../src'
import { testTypeSignature } from './test-utils'

describe('ChainId tests', () => {
  const chainId: ChainId = ChainId.ETHEREUM_RINKEBY

  testTypeSignature(ChainId, chainId)

  it('static tests must pass', () => {
    expect(ChainId.validate(chainId)).toEqual(true)
    expect(ChainId.validate(null)).toEqual(false)
    expect(ChainId.validate({})).toEqual(false)
  })

  it('Should get a valid chain name', () => {
    expect(getChainName(ChainId.ETHEREUM_RINKEBY)).toEqual(ChainName.ETHEREUM_RINKEBY)
  })

  it('Should get null if the chain id is not valid', () => {
    expect(getChainName(-1 as ChainId)).toEqual(null)
  })
})
