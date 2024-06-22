import {
  runHashmapCreationBenchmark,
  runHashmapDeleteBenchmark,
  runHashmapReadBenchmark,
  runHashmapUpdateBenchmark,
} from './hashmaps/index.js'
import { runSideEffectBenchmarks } from './loops/side-effect/index.js'
import { runTransformDataBenchmarks } from './loops/transform-data/index.js'

runTransformDataBenchmarks(10000, 500)
runSideEffectBenchmarks(10000, 500)

runHashmapCreationBenchmark(10000, 10000)
runHashmapReadBenchmark(10000, 10000)
runHashmapUpdateBenchmark(10000, 10000)
runHashmapDeleteBenchmark(10000, 10000)
