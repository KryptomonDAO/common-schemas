import expect from 'expect'
import { ChainId, ChainName, getChainId } from '../src'
import { testTypeSignature } from './test-utils'

describe('ChainName tests', () => {
  const chainName: ChainName = ChainName.ETHEREUM_RINKEBY

  testTypeSignature(ChainName, chainName)

  it('static tests must pass', () => {
    expect(ChainName.validate(chainName)).toEqual(true)
    expect(ChainName.validate(null)).toEqual(false)
    expect(ChainName.validate({})).toEqual(false)
  })

  it('Should get a valid chain id', () => {
    expect(getChainId(ChainName.ETHEREUM_RINKEBY)).toEqual(ChainId.ETHEREUM_RINKEBY)
  })

  it('Should get null if the chain name is not valid', () => {
    expect(getChainId('invalid chain' as ChainName)).toEqual(null)
  })
})
