
# BulkPeopleEnrichment200ResponseMatchesInnerAccount


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
`phone` | string
`linkedinUid` | string
`foundedYear` | number
`publiclyTradedSymbol` | any
`publiclyTradedExchange` | any
`logoUrl` | string
`crunchbaseUrl` | any
`primaryDomain` | string
`domain` | string
`teamId` | string
`organizationId` | string
`accountStageId` | any
`source` | string
`originalSource` | string
`creatorId` | any
`ownerId` | string
`createdAt` | string
`phoneStatus` | string
`hubspotId` | any
`salesforceId` | string
`crmOwnerId` | string
`parentAccountId` | any
`sanitizedPhone` | string
`accountPlaybookStatuses` | Array&lt;any&gt;
`accountRuleConfigStatuses` | [Array&lt;BulkPeopleEnrichment200ResponseMatchesInnerAccountAccountRuleConfigStatusesInner&gt;](BulkPeopleEnrichment200ResponseMatchesInnerAccountAccountRuleConfigStatusesInner.md)
`existenceLevel` | string
`labelIds` | Array&lt;string&gt;
`typedCustomFields` | object
`customFieldErrors` | any
`modality` | string
`sourceDisplayName` | string
`salesforceRecordUrl` | string
`crmRecordUrl` | string

## Example

```typescript
import type { BulkPeopleEnrichment200ResponseMatchesInnerAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 63f53afe4ceeca00016bdd2f,
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
  "phone": +1(202) 555-0114,
  "linkedinUid": 18511550,
  "foundedYear": 2015,
  "publiclyTradedSymbol": null,
  "publiclyTradedExchange": null,
  "logoUrl": https://zenprospect-production.s3.amazonaws.com/uploads/pictures/79049be00ff8e398b5935de8/picture,
  "crunchbaseUrl": null,
  "primaryDomain": apollo.io,
  "domain": apollo.io,
  "teamId": 6095a710bd01d100a506d4ac,
  "organizationId": 5e66b6381e05b4008c8331b8,
  "accountStageId": null,
  "source": csv_import,
  "originalSource": salesforce,
  "creatorId": null,
  "ownerId": 66aaac5a0e951f01b37012bd,
  "createdAt": 2023-02-21T21:43:26.351Z,
  "phoneStatus": no_status,
  "hubspotId": null,
  "salesforceId": 001niCRAYZ4Ho6GTKv,
  "crmOwnerId": 005Ux6UIthHN0CrhuW,
  "parentAccountId": null,
  "sanitizedPhone": +12025550114,
  "accountPlaybookStatuses": null,
  "accountRuleConfigStatuses": null,
  "existenceLevel": full,
  "labelIds": null,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "modality": account,
  "sourceDisplayName": Uploaded from CSV,
  "salesforceRecordUrl": https://saas-drive-2207.my.salesforce.com/001niCRAYZ4Ho6GTKv,
  "crmRecordUrl": https://saas-drive-2207.my.salesforce.com/001niCRAYZ4Ho6GTKv,
} satisfies BulkPeopleEnrichment200ResponseMatchesInnerAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkPeopleEnrichment200ResponseMatchesInnerAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


