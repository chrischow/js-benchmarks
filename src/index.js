import { runExternalObjectLookupBenchmarks } from './speed/loops/external-object-lookup/index.js'
import { runSideEffectBenchmarks } from './speed/loops/side-effect/index.js'
import { runTransformDataBenchmarks } from './speed/loops/transform-data/index.js'

runTransformDataBenchmarks(10000, 500)
runSideEffectBenchmarks(10000, 500)
runExternalObjectLookupBenchmarks(10000, 500)
