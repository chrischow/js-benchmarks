# Array Conversion

## Array-to-Array
1. Spread operator (shallow)
2. Normal for loop (shallow)
3. `Array.map` (shallow)
4. `Array.from` (shallow)
5. `JSON.stringify` then `JSON.parse` (deep)

Converting arrays with 10,000 items to arrays, 100,000 times:

| Conversion Method | Median Processing Time |
| :---------------- | :--------------------: |
| Spread operator   | **0.0018330**          |
| Normal for loop   | 0.023979               |
| `Array.map`       | 0.0068080              |
| `Array.from`      | 0.0026100              |
| Deep copy         | 0.14076                |

## Set-to-Array
1. Spread operator
2. Normal for loop
3. `Array.from`
4. `forEach`

Converting sets with 10,000 items to arrays, 100,000 times:

| Conversion Method | Median Processing Time |
| :---------------- | :--------------------: |
| Spread operator   | **0.0073840**          |
| Normal for loop   | 0.024662               |
| `Array.from`      | 0.0089670              |
| `forEach`         | 0.041196               |