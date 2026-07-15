
# ViewAssociatedDeals200ResponseOpportunitiesInnerAccount


## Properties

Name | Type
------------ | -------------
`id` | string
`domain` | string
`name` | string
`teamId` | string
`organizationId` | string
`accountStageId` | string
`source` | string
`originalSource` | string
`creatorId` | any
`ownerId` | any
`createdAt` | string
`phone` | string
`phoneStatus` | string
`hubspotId` | any
`salesforceId` | any
`crmOwnerId` | any
`parentAccountId` | any
`linkedinUrl` | any
`sanitizedPhone` | string
`accountPlaybookStatuses` | Array&lt;any&gt;
`accountRuleConfigStatuses` | [Array&lt;BulkPeopleEnrichment200ResponseMatchesInnerAccountAccountRuleConfigStatusesInner&gt;](BulkPeopleEnrichment200ResponseMatchesInnerAccountAccountRuleConfigStatusesInner.md)
`existenceLevel` | string
`labelIds` | Array&lt;string&gt;
`typedCustomFields` | object
`customFieldErrors` | any
`modality` | string
`sourceDisplayName` | string
`crmRecordUrl` | any
`contactEmailerCampaignIds` | Array&lt;any&gt;
`contactCampaignStatusTally` | object
`numContacts` | number
`lastActivityDate` | any

## Example

```typescript
import type { ViewAssociatedDeals200ResponseOpportunitiesInnerAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 60afffecbff6de00a4b82be7,
  "domain": nasa.gov,
  "name": NASA - National Aeronautics and Space Administration,
  "teamId": 6095a710bd01d100a506d4ac,
  "organizationId": 55e16cfbf3e5bb66cf0026f3,
  "accountStageId": 6095a710bd01d100a506d4b9,
  "source": deployment,
  "originalSource": deployment,
  "creatorId": null,
  "ownerId": null,
  "createdAt": 2021-05-27T20:24:12.644Z,
  "phone": +1 202-555-0117,
  "phoneStatus": no_status,
  "hubspotId": null,
  "salesforceId": null,
  "crmOwnerId": null,
  "parentAccountId": null,
  "linkedinUrl": null,
  "sanitizedPhone": +12025550117,
  "accountPlaybookStatuses": null,
  "accountRuleConfigStatuses": null,
  "existenceLevel": full,
  "labelIds": null,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "modality": account,
  "sourceDisplayName": Requested from Apollo,
  "crmRecordUrl": null,
  "contactEmailerCampaignIds": null,
  "contactCampaignStatusTally": null,
  "numContacts": 0,
  "lastActivityDate": null,
} satisfies ViewAssociatedDeals200ResponseOpportunitiesInnerAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ViewAssociatedDeals200ResponseOpportunitiesInnerAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


