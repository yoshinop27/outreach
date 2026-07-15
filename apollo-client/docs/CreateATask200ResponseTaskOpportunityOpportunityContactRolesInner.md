
# CreateATask200ResponseTaskOpportunityOpportunityContactRolesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`contactId` | string
`isPrimary` | boolean
`createdAt` | string
`updatedAt` | string
`role` | [Array&lt;CreateATask200ResponseTaskOpportunityOpportunityContactRolesInnerRoleInner&gt;](CreateATask200ResponseTaskOpportunityOpportunityContactRolesInnerRoleInner.md)

## Example

```typescript
import type { CreateATask200ResponseTaskOpportunityOpportunityContactRolesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e8c9d7320e8a01b44f1e82,
  "contactId": 665c3338da53130001243ac4,
  "isPrimary": true,
  "createdAt": 2024-09-17T00:14:15.655Z,
  "updatedAt": 2024-09-17T00:14:15.655Z,
  "role": null,
} satisfies CreateATask200ResponseTaskOpportunityOpportunityContactRolesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateATask200ResponseTaskOpportunityOpportunityContactRolesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


