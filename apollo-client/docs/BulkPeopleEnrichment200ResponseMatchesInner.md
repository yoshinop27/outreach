
# BulkPeopleEnrichment200ResponseMatchesInner


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
`organization` | [BulkPeopleEnrichment200ResponseMatchesInnerOrganization](BulkPeopleEnrichment200ResponseMatchesInnerOrganization.md)
`isLikelyToEngage` | boolean
`accountId` | string
`account` | [BulkPeopleEnrichment200ResponseMatchesInnerAccount](BulkPeopleEnrichment200ResponseMatchesInnerAccount.md)
`departments` | Array&lt;string&gt;
`subdepartments` | Array&lt;string&gt;
`seniority` | string
`functions` | Array&lt;string&gt;
`intentStrength` | any
`showIntent` | boolean
`revealedForCurrentTeam` | boolean

## Example

```typescript
import type { BulkPeopleEnrichment200ResponseMatchesInner } from ''

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
  "organization": null,
  "isLikelyToEngage": true,
  "accountId": 63f53afe4ceeca00016bdd2f,
  "account": null,
  "departments": null,
  "subdepartments": null,
  "seniority": founder,
  "functions": null,
  "intentStrength": null,
  "showIntent": false,
  "revealedForCurrentTeam": true,
} satisfies BulkPeopleEnrichment200ResponseMatchesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkPeopleEnrichment200ResponseMatchesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


