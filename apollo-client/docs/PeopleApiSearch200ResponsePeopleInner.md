
# PeopleApiSearch200ResponsePeopleInner


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastNameObfuscated` | string
`title` | string
`lastRefreshedAt` | Date
`hasEmail` | boolean
`hasCity` | boolean
`hasState` | boolean
`hasCountry` | boolean
`hasDirectPhone` | string
`organization` | [PeopleApiSearch200ResponsePeopleInnerOrganization](PeopleApiSearch200ResponsePeopleInnerOrganization.md)

## Example

```typescript
import type { PeopleApiSearch200ResponsePeopleInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 587cf802f65125cad923a266,
  "firstName": John,
  "lastNameObfuscated": Do***e,
  "title": VP of Sales,
  "lastRefreshedAt": 2024-01-15T10:30:00.000Z,
  "hasEmail": true,
  "hasCity": true,
  "hasState": true,
  "hasCountry": true,
  "hasDirectPhone": Yes,
  "organization": null,
} satisfies PeopleApiSearch200ResponsePeopleInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleApiSearch200ResponsePeopleInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


