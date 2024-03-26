import { square } from "./square"

describe('Square function', () => {
  let mockValue;

  beforeAll(() => { // called before each tests only once
    mockValue = Math.random() * 10
  })

  beforeEach(() => { // called before each every test

  })

  test('Correc values', () => {
    // expect(square(1)).toBe(1)
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBe(undefined)
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })

  afterEach(() => { // called after each test

  })

  afterAll(() => { // called after finish of all test only once

  })
})