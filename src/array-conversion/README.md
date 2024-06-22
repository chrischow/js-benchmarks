# Array Conversion

## Array-to-Array
1. Spread operator (shallow)
2. Normal for loop (shallow)
3. `Array.map` (shallow)
4. `Array.from` (shallow)
5. `JSON.stringify` then `JSON.parse` (deep)

| Conversion Method | Median Processing Time |
| :---------------- | :--------------------: |
| Spread operator   | **0.0018330**          |
| Normal for loop   | 0.023979               |
| `Array.map`       | 0.0068080              |
| `Array.from`      | 0.0026100              |
| Deep copy         | 0.14076                |