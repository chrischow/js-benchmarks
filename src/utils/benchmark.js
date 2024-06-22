/**
 * Uses performance module to get runtime for an operation
 * @param {Function} op Operation to time
 * @returns
 */
export function getTiming(op) {
  const start = performance.now()
  op()
  const end = performance.now()
  return end - start
}
