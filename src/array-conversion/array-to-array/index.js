import { runIterations } from '../../loops/utils.js'

/**
 * Runs benchmarks for the different types of spread operations
 * @param {number} numIterations Number of iterations
 * @param {number} arraySize Size of array
 */
export function runArrayToArrayBenchmark(numIterations, arraySize) {
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
    for (let i = 0; i < data.length; i++) {
      output.push(data[i])
    }
    return output
  })

  console.log(`\nNormal for loop:`)
  console.log(`- Mean: ${normalForResult.mean}`)
  console.log(`- Median: ${normalForResult.median}`)

  // Array map
  const mapResult = runIterations(numIterations, arraySize, (data) => {
    const output = data.map((item) => item)
    return output
  })

  console.log(`\nArray.map:`)
  console.log(`- Mean: ${mapResult.mean}`)
  console.log(`- Median: ${mapResult.median}`)

  // Array from
  const fromResult = runIterations(numIterations, arraySize, (data) => {
    const output = Array.from(data)
    return output
  })

  console.log(`\nArray.from:`)
  console.log(`- Mean: ${fromResult.mean}`)
  console.log(`- Median: ${fromResult.median}`)

  // Deep copy
  const deepCopyResult = runIterations(numIterations, arraySize, (data) => {
    const output = JSON.parse(JSON.stringify(data))
    return output
  })

  console.log(`\nDeep copy:`)
  console.log(`- Mean: ${deepCopyResult.mean}`)
  console.log(`- Median: ${deepCopyResult.median}`)
}
