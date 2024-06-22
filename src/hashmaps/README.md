# Hash Maps

## Types of Hash Maps

1. `Map`
2. `Object`

## Scenarios
1. Creation of hash map
2. Retrieving from hash map
3. Updating hash map

## Summary
We run several operations on hash maps containing 10,000 items, 10,000 times. The median processing times in milliseconds were:

| Hash Map Type  | Creation     | Read         | Update        | Delete      |
| :------------- | :----------: | :----------: | :-----------: | :---------: |
| `Object`       | **0.043137** | **0.025898** | **0.0047890** | 0.23763     |
| `Map`          | 0.35005      | 0.35290      | 0.11644       | **0.21607** |