
# BulkPeopleEnrichment200ResponseMatchesInnerOrganization


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`websiteUrl` | string
`blogUrl` | any
`angellistUrl` | any
`linkedinUrl` | string
`twitterUrl` | string
`facebookUrl` | string
`primaryPhone` | object
`languages` | Array&lt;any&gt;
`alexaRanking` | number
`phone` | any
`linkedinUid` | string
`foundedYear` | number
`publiclyTradedSymbol` | any
`publiclyTradedExchange` | any
`logoUrl` | string
`crunchbaseUrl` | any
`primaryDomain` | string
`industry` | string
`keywords` | Array&lt;string&gt;
`estimatedNumEmployees` | number
`industries` | Array&lt;string&gt;
`secondaryIndustries` | Array&lt;any&gt;
`snippetsLoaded` | boolean
`industryTagId` | string
`industryTagHash` | [PeopleEnrichment200ResponsePersonOrganizationIndustryTagHash](PeopleEnrichment200ResponsePersonOrganizationIndustryTagHash.md)
`retailLocationCount` | number
`rawAddress` | string
`streetAddress` | string
`city` | string
`state` | string
`postalCode` | string
`country` | string

## Example

```typescript
import type { BulkPeopleEnrichment200ResponseMatchesInnerOrganization } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 5e66b6381e05b4008c8331b8,
  "name": Apollo.io,
  "websiteUrl": http://www.apollo.io,
  "blogUrl": null,
  "angellistUrl": null,
  "linkedinUrl": http://www.linkedin.com/company/apolloio,
  "twitterUrl": https://twitter.com/meetapollo/,
  "facebookUrl": https://www.facebook.com/MeetApollo,
  "primaryPhone": null,
  "languages": null,
  "alexaRanking": 3514,
  "phone": null,
  "linkedinUid": 18511550,
  "foundedYear": 2015,
  "publiclyTradedSymbol": null,
  "publiclyTradedExchange": null,
  "logoUrl": https://zenprospect-production.s3.amazonaws.com/uploads/pictures/79049be00ff8e398b5935de8/picture,
  "crunchbaseUrl": null,
  "primaryDomain": apollo.io,
  "industry": information technology & services,
  "keywords": null,
  "estimatedNumEmployees": 1600,
  "industries": null,
  "secondaryIndustries": null,
  "snippetsLoaded": true,
  "industryTagId": 5567cd4773696439b10b0000,
  "industryTagHash": null,
  "retailLocationCount": 0,
  "rawAddress": 415 Mission St, Floor 37, San Francisco, California 94105, US,
  "streetAddress": 415 Mission St,
  "city": San Francisco,
  "state": California,
  "postalCode": 94105-2301,
  "country": United States,
} satisfies BulkPeopleEnrichment200ResponseMatchesInnerOrganization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkPeopleEnrichment200ResponseMatchesInnerOrganization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


