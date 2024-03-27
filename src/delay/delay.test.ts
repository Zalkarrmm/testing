import { delay } from "./delay"

describe('delay function', () => {
  test('Correct delay', async () => {
    const sum = await delay(() => 5 + 5, 1000)
    expect(sum).toEqual(10)
  })
})