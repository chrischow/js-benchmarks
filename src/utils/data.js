/**
 * Generates an array of integers from 0 to n.
 * @param {number} n Size of array
 * @returns {number[]}
 */
export function generateIntegerArray(n) {
  const data = []
  for (let i = 0; i < n; i++) {
    data.push(i)
  }
  return data
}

export function generateSet(n) {
  const output = new Set()
  for (let i = 0; i < n; i++) {
    output.add(i)
  }
  return output
}
