const Counter = artifacts.require('Counter')

module.exports = async function (deployer) {
  await deployer.deploy(Counter)
  const value = await Counter.count
  console.log('Count of: ', value)
}
