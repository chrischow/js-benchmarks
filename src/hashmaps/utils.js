import { getTiming } from '../utils/index.js'

/**
 *
 * @param {number} numIterations
 * @param {number} arraySize
 * @returns {BenchmarkResult} The results of the benchmark
 */
export function runIterations(numIterations, fn, setupFn) {
  /** @type {number[]} */
  const timings = []

  /** @type {number} */
  let total = 0

  for (let i = 0; i < numIterations; i++) {
    if (setupFn !== undefined) {
      setupFn()
    }
    const timing = getTiming(() => fn())
    timings.push(timing)
    total += timing
  }

  timings.sort()

  return {
    mean: total / numIterations,
    median: timings[Math.round(numIterations / 2)],
  }
}
