/**
 * Squares a number.
 * @param {number} x  The value to square
 */
export function square(x) {
  return x ** 2
}

/**
 * Squares a number if it is even, otherwise cube it if it's odd.
 * @param {number} x
 */
export function squareEvenAndCubeOdd(x) {
  if (x % 2 === 0) {
    return x ** 2
  }
  return x ** 3
}
