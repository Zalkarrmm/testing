import { validateValue } from "./validateValue"

describe(('Validate value'), () => {
  test('Validate value in range 0-100', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Less than 0', () => {
    expect(validateValue(-10)).toBe(false)
  })
  test('More than 100', () => {
    expect(validateValue(150)).toBe(false)
  }) 
  test('Equal to 0', () => {
    expect(validateValue(0)).toBe(true)
  })
  test('Equal to 100', () => {
    expect(validateValue(100)).toBe(true)
  })
})