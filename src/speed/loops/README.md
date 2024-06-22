# Loops

## Types of Loops

1. `forEach`
2. `for` loop using indices
3. `for...of` loop
4. `map`

## Scenarios
1. Transforming some data and returning the result
2. Performing a side effect (e.g. modifying an external object)

## Summary
We processed arrays containing 500 items, 10,000 iterations each. The median processing times in milliseconds were:

| Loop Type  | Transform Data | Side Effect  |
| :--------- | :------------: | :----------: |
| `forEach`  | 0.014166       | 0.016408     |
| `for`      | 0.010978       | **0.014937** |
| `for...of` | 0.011345       | 0.015458     |
| `map`      | **0.008751**   | 0.017231     |