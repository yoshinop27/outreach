
# BulkOrganizationEnrichment200ResponseOrganizationsInner


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
`country` | string
`postalCode` | string
`ownedByOrganizationId` | any
`seoDescription` | string
`shortDescription` | string
`accountId` | string
`account` | [BulkOrganizationEnrichment200ResponseOrganizationsInnerAccount](BulkOrganizationEnrichment200ResponseOrganizationsInnerAccount.md)
`departmentalHeadCount` | [OrganizationEnrichment200ResponseOrganizationDepartmentalHeadCount](OrganizationEnrichment200ResponseOrganizationDepartmentalHeadCount.md)
`intentStrength` | any
`showIntent` | boolean
`hasIntentSignalAccount` | boolean
`intentSignalAccount` | any
`organizationHeadcountSixMonthGrowth` | number
`organizationHeadcountTwelveMonthGrowth` | number
`organizationHeadcountTwentyFourMonthGrowth` | number

## Example

```typescript
import type { BulkOrganizationEnrichment200ResponseOrganizationsInner } from ''

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
  "rawAddress": 415 mission st, floor 37, san francisco, california 94105, us,
  "streetAddress": 415 Mission St,
  "city": San Francisco,
  "state": California,
  "country": United States,
  "postalCode": 94105-2301,
  "ownedByOrganizationId": null,
  "seoDescription": Search, engage, and convert over 275 million contacts at over 73 million companies with Apollo's sales intelligence and engagement platform.,
  "shortDescription": Apollo.io combines a buyer database of over 270M contacts and powerful sales engagement and automation tools in one, easy to use platform. Trusted by over 160,000 companies including Autodesk, Rippling, Deel, Jasper.ai, Divvy, and Heap, Apollo has more than one million users globally. By helping sales professionals find their ideal buyers and intelligently automate outreach, Apollo helps go-to-market teams sell anything.

Celebrating a $100M Series D Funding Round 🦄,
  "accountId": 63f53afe4ceeca00016bdd37,
  "account": null,
  "departmentalHeadCount": null,
  "intentStrength": null,
  "showIntent": false,
  "hasIntentSignalAccount": false,
  "intentSignalAccount": null,
  "organizationHeadcountSixMonthGrowth": 12.3,
  "organizationHeadcountTwelveMonthGrowth": 24.6,
  "organizationHeadcountTwentyFourMonthGrowth": 48.9,
} satisfies BulkOrganizationEnrichment200ResponseOrganizationsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkOrganizationEnrichment200ResponseOrganizationsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


