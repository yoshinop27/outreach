
# PeopleApiSearch403Response


## Properties

Name | Type
------------ | -------------
`error` | string
`errorCode` | string

## Example

```typescript
import type { PeopleApiSearch403Response } from ''

// TODO: Update the object below with actual values
const example = {
  "error": api/v1/mixed_people/api_search is not accessible with this api_key,
  "errorCode": API_INACCESSIBLE,
} satisfies PeopleApiSearch403Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleApiSearch403Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


