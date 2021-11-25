import expect from 'expect'
import { Coin } from '../src'
import { testTypeSignature } from './test-utils'

describe('Coin tests', () => {
  const coin: Coin = Coin.BNB

  testTypeSignature(Coin, coin)

  it('static tests must pass', () => {
    expect(Coin.validate(coin)).toEqual(true)
    expect(Coin.validate(null)).toEqual(false)
    expect(Coin.validate({})).toEqual(false)
  })
})
