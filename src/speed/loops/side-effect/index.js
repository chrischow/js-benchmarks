import { squareEvenAndCubeOdd } from '../../../utils/transform.js'
import { runIterations } from '../utils.js'

/**
 * Runs benchmarks for the different types of loops
 * @param {number} numIterations Number of iterations
 * @param {number} arraySize Size of array
 */
export function runSideEffectBenchmarks(numIterations, arraySize) {
  console.log(`\n[ SIDE EFFECT BENCHMARK ]`)
  console.log(`${numIterations} iterations`)
  console.log(`${arraySize} array size`)

  // forEach
  const forEachResult = runIterations(numIterations, arraySize, (data) => {
    const output = new Map()
    data.forEach((item) => output.set(item, squareEvenAndCubeOdd(item)))
    return output
  })

  console.log(`\nforEach:`)
  console.log(`- Mean: ${forEachResult.mean}`)
  console.log(`- Median: ${forEachResult.median}`)

  // Normal for loop
  const normalForResult = runIterations(numIterations, arraySize, (data) => {
    /** @type {Map<number, number>} */
    const output = new Map()
    for (let i = 0; i < data.length; i++) {
      output.set(i, squareEvenAndCubeOdd(data[i]))
    }
    return output
  })

  console.log(`\nNormal for loop:`)
  console.log(`- Mean: ${normalForResult.mean}`)
  console.log(`- Median: ${normalForResult.median}`)

  // for...of loop
  const forOfResult = runIterations(numIterations, arraySize, (data) => {
    const output = new Map()
    for (const item of data) {
      output.set(item, squareEvenAndCubeOdd(item))
    }
    return output
  })

  console.log(`\nfor...of loop:`)
  console.log(`- Mean: ${forOfResult.mean}`)
  console.log(`- Median: ${forOfResult.median}`)

  // Map
  const mapResult = runIterations(numIterations, arraySize, (data) => {
    const output = new Map()
    data.map((item) => output.set(item, squareEvenAndCubeOdd(item)))
    return output
  })

  console.log(`\nMap:`)
  console.log(`- Mean: ${mapResult.mean}`)
  console.log(`- Median: ${mapResult.median}`)
}
