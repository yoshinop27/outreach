
# ListAllDeals403Response


## Properties

Name | Type
------------ | -------------
`error` | string
`errorCode` | string
`message` | string

## Example

```typescript
import type { ListAllDeals403Response } from ''

// TODO: Update the object below with actual values
const example = {
  "error": deals/api/v1/opportunities/search is not accessible with this api_key,
  "errorCode": API_INACCESSIBLE,
  "message": This endpoint is only available to Apollo users on paid plans.,
} satisfies ListAllDeals403Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListAllDeals403Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


