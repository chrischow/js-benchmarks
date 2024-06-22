import { squareEvenAndCubeOdd } from '../../../utils/transform.js'
import { runIterations } from '../utils.js'

/**
 * Runs benchmarks for the different types of loops
 * @param {number} numIterations Number of iterations
 * @param {number} arraySize Size of array
 */
export function runTransformDataBenchmarks(numIterations, arraySize) {
  console.log(`\n[ TRANSFORM DATA BENCHMARK ]`)
  console.log(`${numIterations} iterations`)
  console.log(`${arraySize} array size`)

  // forEach
  const forEachResult = runIterations(numIterations, arraySize, (data) => {
    const output = []
    data.forEach((item) => output.push(squareEvenAndCubeOdd(item)))
    return output
  })

  console.log(`\nforEach:`)
  console.log(`- Mean: ${forEachResult.mean}`)
  console.log(`- Median: ${forEachResult.median}`)

  // Normal for loop
  const normalForResult = runIterations(numIterations, arraySize, (data) => {
    const output = []
    for (let i = 0; i < data.length; i++) {
      output.push(squareEvenAndCubeOdd(data[i]))
    }
    return output
  })

  console.log(`\nNormal for loop:`)
  console.log(`- Mean: ${normalForResult.mean}`)
  console.log(`- Median: ${normalForResult.median}`)

  // for...of loop
  const forOfResult = runIterations(numIterations, arraySize, (data) => {
    const output = []
    for (const item of data) {
      output.push(squareEvenAndCubeOdd(item))
    }
    return output
  })

  console.log(`\nfor...of loop:`)
  console.log(`- Mean: ${forOfResult.mean}`)
  console.log(`- Median: ${forOfResult.median}`)

  // Map
  const mapResult = runIterations(numIterations, arraySize, (data) => {
    const output = data.map((item) => squareEvenAndCubeOdd(item))
    return output
  })

  console.log(`\nMap:`)
  console.log(`- Mean: ${mapResult.mean}`)
  console.log(`- Median: ${mapResult.median}`)
}
