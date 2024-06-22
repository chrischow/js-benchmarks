# Loops

## Types of Loops

1. `forEach`
2. `for` loop using indices
3. `for...of` loop
4. `map`
5. `while`

## Scenarios
1. Transforming some data and returning the result
2. Performing a side effect (e.g. modifying an external object)

## Summary
We processed arrays containing 1,000 items, 10,000 iterations each. The median processing times in milliseconds were:

| Loop Type  | Transform Data | Side Effect  |
| :--------- | :------------: | :----------: |
| `forEach`  | 0.028649       | 0.031764     |
| `for`      | 0.022197       | 0.033651     |
| `for...of` | 0.023066       | 0.034199     |
| `map`      | **0.017576**   | 0.035945     |
| `while`    | 0.022830       | **0.032234** |