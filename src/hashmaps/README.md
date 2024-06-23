# Hash Maps

## Types of Hash Maps

1. `Map`
2. `Object`

## Scenarios
1. Creation of hash map
2. Retrieving from hash map, assuming you know what keys to read beforehand
3. Updating hash map, assuming you know what keys you're looking to update beforehand
4. Deleting items from hash map, assuming you know what keys to delete beforehand

## Summary
We run several operations on hash maps containing 10,000 items, 10,000 times. The median processing times in milliseconds were:

| Hash Map Type  | Creation     | Read         | Update      | Delete      |
| :------------- | :----------: | :----------: | :---------: | :---------: |
| `Object`       | **0.043137** | **0.12116**  | **0.16884** | 0.35124     |
| `Map`          | 0.35005      | 0.19368      | 0.20443     | **0.30455** |