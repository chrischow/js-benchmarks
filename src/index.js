import { runArrayToArrayBenchmark } from './array-conversion/array-to-array/index.js'
import { runSetToArrayBenchmark } from './array-conversion/set-to-array/index.js'
import {
  runHashmapCreationBenchmark,
  runHashmapDeleteBenchmark,
  runHashmapReadBenchmark,
  runHashmapUpdateBenchmark,
} from './hashmaps/index.js'
import { runSideEffectBenchmarks } from './loops/side-effect/index.js'
import { runTransformDataBenchmarks } from './loops/transform-data/index.js'

const separator = '\n================================================\n'

runTransformDataBenchmarks(10000, 1000)
runSideEffectBenchmarks(10000, 1000)

console.log(separator)
runHashmapCreationBenchmark(10000, 10000)
runHashmapReadBenchmark(10000, 10000)
runHashmapUpdateBenchmark(10000, 10000)
runHashmapDeleteBenchmark(10000, 10000)

console.log(separator)

runArrayToArrayBenchmark(100000, 10000)
runSetToArrayBenchmark(100000, 10000)
