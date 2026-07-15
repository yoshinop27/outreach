
# CreateACustomFieldRequest


## Properties

Name | Type
------------ | -------------
`label` | string
`modality` | string
`type` | string
`meta` | [CreateACustomFieldRequestMeta](CreateACustomFieldRequestMeta.md)

## Example

```typescript
import type { CreateACustomFieldRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "label": null,
  "modality": null,
  "type": null,
  "meta": null,
} satisfies CreateACustomFieldRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateACustomFieldRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


