
# PeopleEnrichment200ResponsePerson


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`name` | string
`linkedinUrl` | string
`title` | string
`emailStatus` | string
`photoUrl` | string
`twitterUrl` | any
`githubUrl` | any
`facebookUrl` | any
`extrapolatedEmailConfidence` | number
`headline` | string
`email` | string
`organizationId` | string
`employmentHistory` | [Array&lt;PeopleEnrichment200ResponsePersonEmploymentHistoryInner&gt;](PeopleEnrichment200ResponsePersonEmploymentHistoryInner.md)
`state` | string
`city` | string
`country` | string
`contactId` | string
`contact` | [PeopleEnrichment200ResponsePersonContact](PeopleEnrichment200ResponsePersonContact.md)
`revealedForCurrentTeam` | boolean
`organization` | [PeopleEnrichment200ResponsePersonOrganization](PeopleEnrichment200ResponsePersonOrganization.md)
`isLikelyToEngage` | boolean
`intentStrength` | any
`showIntent` | boolean
`departments` | Array&lt;string&gt;
`subdepartments` | Array&lt;string&gt;
`functions` | Array&lt;string&gt;
`seniority` | string

## Example

```typescript
import type { PeopleEnrichment200ResponsePerson } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 64a7ff0cc4dfae00013df1a5,
  "firstName": Tim,
  "lastName": Zheng,
  "name": Tim Zheng,
  "linkedinUrl": http://www.linkedin.com/in/tim-zheng-677ba010,
  "title": Founder & CEO,
  "emailStatus": verified,
  "photoUrl": https://static.licdn.com/aero-v1/sc/h/uzfsocwl05iywf1hd7ba3915x,
  "twitterUrl": null,
  "githubUrl": null,
  "facebookUrl": null,
  "extrapolatedEmailConfidence": null,
  "headline": Founder & CEO at Apollo,
  "email": tim@apollo.io,
  "organizationId": 5e66b6381e05b4008c8331b8,
  "employmentHistory": null,
  "state": California,
  "city": San Francisco,
  "country": United States,
  "contactId": 664fa05cf8299f0001f90876,
  "contact": null,
  "revealedForCurrentTeam": true,
  "organization": null,
  "isLikelyToEngage": true,
  "intentStrength": null,
  "showIntent": false,
  "departments": null,
  "subdepartments": null,
  "functions": null,
  "seniority": founder,
} satisfies PeopleEnrichment200ResponsePerson

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeopleEnrichment200ResponsePerson
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


