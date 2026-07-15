
# CreateACustomField200ResponseTypedCustomFieldsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`modality` | string
`textFieldMaxLength` | number

## Example

```typescript
import type { CreateACustomField200ResponseTypedCustomFieldsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 32d42c92-5be4-4ec4-96c7-f689b43ec8a8,
  "name": Test Name,
  "modality": contact,
  "textFieldMaxLength": 120,
} satisfies CreateACustomField200ResponseTypedCustomFieldsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateACustomField200ResponseTypedCustomFieldsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


