
# NeedMasterAPIKey


## Properties

Name | Type
------------ | -------------
`error` | string
`errorCode` | string

## Example

```typescript
import type { NeedMasterAPIKey } from ''

// TODO: Update the object below with actual values
const example = {
  "error": deals/api/v1/opportunities/search is not accessible with this api_key,
  "errorCode": API_INACCESSIBLE,
} satisfies NeedMasterAPIKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NeedMasterAPIKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


