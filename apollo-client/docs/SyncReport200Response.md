
# SyncReport200Response


## Properties

Name | Type
------------ | -------------
`response` | [SyncReport200ResponseResponse](SyncReport200ResponseResponse.md)
`incompatibleFilters` | { [key: string]: Array&lt;string&gt;; }
`goals` | Array&lt;object&gt;

## Example

```typescript
import type { SyncReport200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "response": null,
  "incompatibleFilters": null,
  "goals": null,
} satisfies SyncReport200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SyncReport200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


