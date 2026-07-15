
# GetAListOfAllCustomFields200ResponseTypedCustomFieldsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`modality` | string
`name` | string
`type` | string
`picklistOptions` | Array&lt;any&gt;
`mappedCrmField` | any
`additionalMappedCrmField` | any
`isReadonlyMappedCrmField` | any
`picklistOptionsLastSyncedAt` | string
`picklistValueSetId` | any
`mirrored` | boolean
`systemName` | any
`textFieldMaxLength` | any
`finderViewIds` | Array&lt;any&gt;
`isLocal` | boolean

## Example

```typescript
import type { GetAListOfAllCustomFields200ResponseTypedCustomFieldsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 60c39ed82bd02f01154c470a,
  "modality": contact,
  "name": New Product Launch Date,
  "type": datetime,
  "picklistOptions": null,
  "mappedCrmField": null,
  "additionalMappedCrmField": null,
  "isReadonlyMappedCrmField": null,
  "picklistOptionsLastSyncedAt": 2021-06-11T17:35:12.000+00:00,
  "picklistValueSetId": null,
  "mirrored": false,
  "systemName": null,
  "textFieldMaxLength": null,
  "finderViewIds": null,
  "isLocal": false,
} satisfies GetAListOfAllCustomFields200ResponseTypedCustomFieldsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfAllCustomFields200ResponseTypedCustomFieldsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


