import {
  runHashmapCreationBenchmark,
  runHashmapDeleteBenchmark,
  runHashmapReadBenchmark,
  runHashmapUpdateBenchmark,
} from './speed/hashmaps/index.js'
import { runExternalObjectLookupBenchmarks } from './speed/loops/external-object-lookup/index.js'
import { runSideEffectBenchmarks } from './speed/loops/side-effect/index.js'
import { runTransformDataBenchmarks } from './speed/loops/transform-data/index.js'

// runTransformDataBenchmarks(10000, 500)
// runSideEffectBenchmarks(10000, 500)
// runExternalObjectLookupBenchmarks(10000, 500)

runHashmapCreationBenchmark(10000, 10000)
runHashmapReadBenchmark(10000, 10000)
runHashmapUpdateBenchmark(10000, 10000)
runHashmapDeleteBenchmark(10000, 10000)
