const Counter = artifacts.require('Counter')

contract('Counter', (accounts) => {
  it('initial count of 0', async () => {
    const counterInstance = await Counter.deployed()
    const initialCount = await counterInstance.read()

    assert.equal(initialCount, 0, 'Count of 0')
  })
  it('The result of incrementing is 1.', async () => {
    const counterInstance = await Counter.deployed()
    await counterInstance.increment()
    const count = await counterInstance.read()

    assert.equal(count, 1, 'Count of 1')
  })
  it('Adding up results in 100.', async () => {
    const counterInstance = await Counter.deployed()
    await counterInstance.add(99) // 一つ前のテストで1がcountされているので100にするために99を指定
    const count = await counterInstance.read()

    assert.equal(count.toString(), 100, 'Count of 100')
  })
})
