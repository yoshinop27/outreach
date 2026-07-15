
# PeopleApiSearch200Response


## Properties

Name | Type
------------ | -------------
`totalEntries` | number
`people` | [Array&lt;PeopleApiSearch200ResponsePeopleInner&gt;](PeopleApiSearch200ResponsePeopleInner.md)

## Example

```typescript
import type { PeopleApiSearch200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "totalEntries": 2,
  "people": null,
} satisfies PeopleApiSearch200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleApiSearch200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


