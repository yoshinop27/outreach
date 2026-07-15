
# GetAListOfAllLists200ResponseInner


## Properties

Name | Type
------------ | -------------
`id` | string
`cachedCount` | number
`concurrencyLocks` | object
`createdAt` | string
`modality` | string
`name` | string
`needCachedCountUpdate` | boolean
`needsCountUpdateAt` | string
`ruleConfigTemplateId` | any
`teamId` | string
`updatedAt` | string
`userId` | string
`id` | string
`key` | string

## Example

```typescript
import type { GetAListOfAllLists200ResponseInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e9e215ece19801b2199981,
  "cachedCount": 1,
  "concurrencyLocks": null,
  "createdAt": 2024-09-17T20:09:57.863Z,
  "modality": emailer_campaigns,
  "name": Dublin market,
  "needCachedCountUpdate": false,
  "needsCountUpdateAt": 2024-09-17T20:09:57.885+00:00,
  "ruleConfigTemplateId": null,
  "teamId": 6095a710bd01d100a506d4ac,
  "updatedAt": 2024-09-17T20:09:57.910Z,
  "userId": 66302798d03b9601c7934ebf,
  "id": 66e9e215ece19801b2199981,
  "key": 66e9e215ece19801b2199981,
} satisfies GetAListOfAllLists200ResponseInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfAllLists200ResponseInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


