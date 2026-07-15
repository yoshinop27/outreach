
# ContactHasBeenDeleted


## Properties

Name | Type
------------ | -------------
`error` | string
`deletedContactIds` | Array&lt;string&gt;

## Example

```typescript
import type { ContactHasBeenDeleted } from ''

// TODO: Update the object below with actual values
const example = {
  "error": Cannot update contact as it is deleted.,
  "deletedContactIds": null,
} satisfies ContactHasBeenDeleted

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContactHasBeenDeleted
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


