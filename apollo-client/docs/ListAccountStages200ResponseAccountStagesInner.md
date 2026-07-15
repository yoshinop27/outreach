
# ListAccountStages200ResponseAccountStagesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`teamId` | string
`displayName` | string
`name` | string
`displayOrder` | number
`defaultExcludeForLeadgen` | boolean
`category` | any
`isMeetingSet` | any

## Example

```typescript
import type { ListAccountStages200ResponseAccountStagesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 6095a710bd01d100a506d4b7,
  "teamId": 6095a710bd01d100a506d4ac,
  "displayName": Review,
  "name": Review,
  "displayOrder": 1,
  "defaultExcludeForLeadgen": false,
  "category": null,
  "isMeetingSet": null,
} satisfies ListAccountStages200ResponseAccountStagesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAccountStages200ResponseAccountStagesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


