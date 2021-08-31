import { CactusStack, CactusStackError } from '../src'
import { describe, it } from 'mocha'
import { expect } from 'chai'

describe(
  'cactus stack',
  () => {
    it(
      'is able to push and pop',
      () => {
        const c = new CactusStack<number>()
        const n1 = c.push(123)
        const n2 = c.push(456)
        const n11 = n1.push(321)
        const n12 = n1.push(1234)
        const n21 = n2.push(654)
        const n22 = n2.push(4567)
        expect(n11.pop()).to.be.eq(321)
        expect(n12.pop()).to.be.eq(1234)
        expect(n21.pop()).to.be.eq(654)
        expect(n22.pop()).to.be.eq(4567)
        expect(n1.pop()).to.be.eq(123)
        expect(n2.pop()).to.be.eq(456)
        expect(n1.pop()).to.be.an.instanceOf(CactusStackError)
      },
    )
    it(
      'is iterable',
      () => {
        const c = new CactusStack<number>()
        let n = c
        for (let i = 0; i < 1024; i++) {
          const op = Math.floor(Math.random() * 3)
          const r = Math.floor(Math.random() * 256)
          if (op === 0)
            n.push(r)
          else if (op === 1)
            n = n.push(r)
        }
        for (const node of n)
          console.debug(node)
      },
    )
  }
)
