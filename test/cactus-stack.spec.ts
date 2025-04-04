import { CactusStack, CactusStackError } from '../src'
import { describe, it } from 'mocha'
import { equal } from 'node:assert'

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
        equal(n11.pop(), 321)
        equal(n12.pop(), 1234)
        equal(n21.pop(), 654)
        equal(n22.pop(), 4567)
        equal(n1.pop(), 123)
        equal(n2.pop(), 456)
        equal(n1.pop() instanceof CactusStackError, true)
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
