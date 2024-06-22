import { generateIntegerArray, getTiming } from '../../utils/index.js'

/**
 *
 * @param {number} numIterations
 * @param {number} arraySize
 * @returns {BenchmarkResult} The results of the benchmark
 */
export function runIterations(numIterations, arraySize, fn) {
  const data = generateIntegerArray(arraySize)

  /** @type {number[]} */
  const timings = []

  /** @type {number} */
  let total = 0

  for (let i = 0; i < numIterations; i++) {
    const timing = getTiming(() => fn(data))
    timings.push(timing)
    total += timing
  }

  timings.sort()

  return {
    mean: total / numIterations,
    median: timings[Math.round(numIterations / 2)],
  }
}
