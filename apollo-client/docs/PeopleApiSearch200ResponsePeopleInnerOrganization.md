
# PeopleApiSearch200ResponsePeopleInnerOrganization

Information about the person\'s current employer organization.

## Properties

Name | Type
------------ | -------------
`name` | string
`hasIndustry` | boolean
`hasPhone` | boolean
`hasCity` | boolean
`hasState` | boolean
`hasCountry` | boolean
`hasZipCode` | boolean
`hasRevenue` | boolean
`hasEmployeeCount` | boolean

## Example

```typescript
import type { PeopleApiSearch200ResponsePeopleInnerOrganization } from ''

// TODO: Update the object below with actual values
const example = {
  "name": Apollo.io,
  "hasIndustry": true,
  "hasPhone": true,
  "hasCity": true,
  "hasState": true,
  "hasCountry": true,
  "hasZipCode": true,
  "hasRevenue": true,
  "hasEmployeeCount": true,
} satisfies PeopleApiSearch200ResponsePeopleInnerOrganization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleApiSearch200ResponsePeopleInnerOrganization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


