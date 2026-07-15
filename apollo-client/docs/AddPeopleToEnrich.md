
# AddPeopleToEnrich


## Properties

Name | Type
------------ | -------------
`status` | string
`errorCode` | string
`errorMessage` | string

## Example

```typescript
import type { AddPeopleToEnrich } from ''

// TODO: Update the object below with actual values
const example = {
  "status": failed,
  "errorCode": INVALID_REQUEST,
  "errorMessage": invalid request, missing details,
} satisfies AddPeopleToEnrich

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddPeopleToEnrich
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


