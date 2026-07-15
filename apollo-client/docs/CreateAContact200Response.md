
# CreateAContact200Response


## Properties

Name | Type
------------ | -------------
`contact` | [CreateAContact200ResponseContact](CreateAContact200ResponseContact.md)
`labels` | [Array&lt;CreateAContact200ResponseLabelsInner&gt;](CreateAContact200ResponseLabelsInner.md)

## Example

```typescript
import type { CreateAContact200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "contact": null,
  "labels": null,
} satisfies CreateAContact200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAContact200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


