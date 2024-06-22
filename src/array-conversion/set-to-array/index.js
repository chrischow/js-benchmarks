import { runIterations } from './utils.js'

/**
 * Runs benchmarks for the different types of set-to-array conversions
 * @param {number} numIterations Number of iterations
 * @param {number} arraySize Size of array
 */
export function runSetToArrayBenchmark(numIterations, arraySize) {
  console.log(`\n[ ARRAY-TO-ARRAY BENCHMARK ]`)
  console.log(`${numIterations} iterations`)
  console.log(`${arraySize} array size`)

  // Spread operator
  const spreadResult = runIterations(numIterations, arraySize, (data) => {
    return [...data]
  })

  console.log(`\nSpread operator:`)
  console.log(`- Mean: ${spreadResult.mean}`)
  console.log(`- Median: ${spreadResult.median}`)

  // Normal for loop
  const normalForResult = runIterations(numIterations, arraySize, (data) => {
    const output = []
    for (const item of data) {
      output.push(item)
    }
    return output
  })

  console.log(`\nNormal for loop:`)
  console.log(`- Mean: ${normalForResult.mean}`)
  console.log(`- Median: ${normalForResult.median}`)

  // Array from
  const fromResult = runIterations(numIterations, arraySize, (data) => {
    const output = Array.from(data)
    return output
  })

  console.log(`\nArray.from:`)
  console.log(`- Mean: ${fromResult.mean}`)
  console.log(`- Median: ${fromResult.median}`)

  // forEach
  const forEachResult = runIterations(numIterations, arraySize, (data) => {
    const output = []
    data.forEach((item) => output.push(item))
    return output
  })

  console.log(`\nforEach:`)
  console.log(`- Mean: ${forEachResult.mean}`)
  console.log(`- Median: ${forEachResult.median}`)
}
