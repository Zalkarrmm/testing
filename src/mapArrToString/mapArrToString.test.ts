import { mapArrToString } from "./mapArrToString"

describe(('Map array to string'), () => {
  test('Correcly values', () => {
    expect(mapArrToString( [1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Many any values', () => {
    expect(mapArrToString( [1, 2, 3, null, undefined, 'asasfafafs'])).toEqual(['1', '2', '3'])
  })
  test('Empty arr', () => {
    expect(mapArrToString( [])).toEqual([])
  })
  test('Rejecting', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4', '5'])
  })
})