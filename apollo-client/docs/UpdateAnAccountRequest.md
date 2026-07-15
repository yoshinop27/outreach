
# UpdateAnAccountRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`domain` | string
`ownerId` | string
`accountStageId` | string
`rawAddress` | string
`phone` | string
`typedCustomFields` | { [key: string]: string; }

## Example

```typescript
import type { UpdateAnAccountRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "domain": null,
  "ownerId": null,
  "accountStageId": null,
  "rawAddress": null,
  "phone": null,
  "typedCustomFields": {60c39ed82bd02f01154c470a=2025-08-07},
} satisfies UpdateAnAccountRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAnAccountRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


