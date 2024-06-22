import { runIterations } from './utils.js'

/**
 * Runs benchmarks for creating hashmap
 * @param {number} numIterations Number of iterations
 * @param {number} lookupSize Size of lookup
 */
export function runHashmapCreationBenchmark(numIterations, lookupSize) {
  console.log(`\n[ HASH MAP CREATION BENCHMARK ]`)
  console.log(`${numIterations} iterations`)
  console.log(`${lookupSize} lookup size`)

  // Object creation
  const objectCreationResult = runIterations(numIterations, () => {
    const output = {}
    for (let i = 0; i < lookupSize; i++) {
      output[i] = true
    }
    return output
  })

  console.log(`\nObject creation:`)
  console.log(`- Mean: ${objectCreationResult.mean}`)
  console.log(`- Median: ${objectCreationResult.median}`)

  // Map creation
  const mapCreationResult = runIterations(numIterations, () => {
    const output = new Map()
    for (let i = 0; i < lookupSize; i++) {
      output.set(i, true)
    }
    return output
  })

  console.log(`\nMap creation:`)
  console.log(`- Mean: ${mapCreationResult.mean}`)
  console.log(`- Median: ${mapCreationResult.median}`)
}

/**
 * Runs benchmarks for reading from hashmap
 * @param {number} numIterations Number of iterations
 * @param {number} lookupSize Size of lookup
 */
export function runHashmapReadBenchmark(numIterations, lookupSize) {
  console.log(`\n[ HASH MAP READ BENCHMARK ]`)
  console.log(`${numIterations} iterations`)
  console.log(`${lookupSize} lookup size`)

  // Create lookups
  const lookupObject = {}
  const lookupMap = new Map()
  for (let i = 0; i < lookupSize; i++) {
    lookupObject[i] = true
    lookupMap.set(i, true)
  }

  // Object lookup
  const objectReadResult = runIterations(numIterations, () => {
    const output = []
    for (let i = 0; i < lookupSize; i++) {
      output.push(lookupObject[i])
    }
    return output
  })

  console.log(`\nObject lookup:`)
  console.log(`- Mean: ${objectReadResult.mean}`)
  console.log(`- Median: ${objectReadResult.median}`)

  // Map lookup
  const mapReadResult = runIterations(numIterations, () => {
    const output = new Map()
    for (let i = 0; i < lookupSize; i++) {
      output.set(i, true)
    }
    return output
  })

  console.log(`\nMap lookup:`)
  console.log(`- Mean: ${mapReadResult.mean}`)
  console.log(`- Median: ${mapReadResult.median}`)
}

/**
 * Runs benchmarks for updating hashmap
 * @param {number} numIterations Number of iterations
 * @param {number} lookupSize Size of lookup
 */
export function runHashmapUpdateBenchmark(numIterations, lookupSize) {
  console.log(`\n[ HASH MAP UPDATE BENCHMARK ]`)
  console.log(`${numIterations} iterations`)
  console.log(`${lookupSize} lookup size`)

  // Create lookups
  const lookupObject = {}
  const lookupMap = new Map()
  for (let i = 0; i < lookupSize; i++) {
    lookupObject[i] = true
    lookupMap.set(i, true)
  }

  // Object update
  const objectUpdateResult = runIterations(numIterations, () => {
    for (let i = 0; i < lookupSize; i++) {
      if (lookupObject[i] === true) {
        lookupObject[i] = 1
      } else {
        lookupObject[i] = true
      }
    }
  })

  console.log(`\nObject update:`)
  console.log(`- Mean: ${objectUpdateResult.mean}`)
  console.log(`- Median: ${objectUpdateResult.median}`)

  // Map update
  const mapUpdateResult = runIterations(numIterations, () => {
    for (let i = 0; i < lookupSize; i++) {
      if (lookupMap.get(i) === true) {
        lookupMap.set(i, 1)
      } else {
        lookupMap.set(i, true)
      }
    }
  })

  console.log(`\nMap update:`)
  console.log(`- Mean: ${mapUpdateResult.mean}`)
  console.log(`- Median: ${mapUpdateResult.median}`)
}

/**
 * Runs benchmarks for deleting items from hashmap
 * @param {number} numIterations Number of iterations
 * @param {number} lookupSize Size of lookup
 */
export function runHashmapDeleteBenchmark(numIterations, lookupSize) {
  console.log(`\n[ HASH MAP DELETE BENCHMARK ]`)
  console.log(`${numIterations} iterations`)
  console.log(`${lookupSize} lookup size`)

  // Create lookups
  let lookupObject = {}
  let lookupMap = new Map()

  function resetObject() {
    lookupObject = {}
    for (let i = 0; i < lookupSize; i++) {
      lookupObject[i] = true
    }
  }

  function resetMap() {
    lookupMap = new Map()
    for (let i = 0; i < lookupSize; i++) {
      lookupMap.set(i, true)
    }
  }

  // Object delete
  const objectDeleteResult = runIterations(
    numIterations,
    () => {
      for (let i = 0; i < lookupSize; i++) {
        delete lookupObject[i]
      }
    },
    resetObject,
  )

  console.log(`\nObject delete:`)
  console.log(`- Mean: ${objectDeleteResult.mean}`)
  console.log(`- Median: ${objectDeleteResult.median}`)

  // Map delete
  const mapDeleteResult = runIterations(
    numIterations,
    () => {
      for (let i = 0; i < lookupSize; i++) {
        lookupMap.delete(i)
      }
    },
    resetMap,
  )

  console.log(`\nMap delete:`)
  console.log(`- Mean: ${mapDeleteResult.mean}`)
  console.log(`- Median: ${mapDeleteResult.median}`)
}
