const Counter = artifacts.require('Counter')

module.exports = async function (deployer) {
  await deployer.deploy(Counter)

  const instance = await Counter.deployed()
  const value = await instance.read()

  console.log('Count of: ', value.toString())
}
