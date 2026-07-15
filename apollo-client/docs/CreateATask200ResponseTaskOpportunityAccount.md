
# CreateATask200ResponseTaskOpportunityAccount


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
`phone` | any
`phoneStatus` | string
`hubspotId` | any
`salesforceId` | any
`crmOwnerId` | any
`parentAccountId` | any
`linkedinUrl` | any
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
import type { CreateATask200ResponseTaskOpportunityAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 612f9d6cd26c290001d9bda0,
  "domain": google.com,
  "name": Google,
  "teamId": 6095a710bd01d100a506d4ac,
  "organizationId": 5fc93db64c38d300d6aa24e6,
  "accountStageId": 6095a710bd01d100a506d4b9,
  "source": csv_import,
  "originalSource": csv_import,
  "creatorId": null,
  "ownerId": null,
  "createdAt": 2021-09-01T15:34:04.371Z,
  "phone": null,
  "phoneStatus": no_status,
  "hubspotId": null,
  "salesforceId": null,
  "crmOwnerId": null,
  "parentAccountId": null,
  "linkedinUrl": null,
  "accountPlaybookStatuses": null,
  "accountRuleConfigStatuses": null,
  "existenceLevel": full,
  "labelIds": null,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "modality": account,
  "sourceDisplayName": Uploaded from CSV,
  "crmRecordUrl": null,
  "contactEmailerCampaignIds": null,
  "contactCampaignStatusTally": null,
  "numContacts": 0,
  "lastActivityDate": null,
} satisfies CreateATask200ResponseTaskOpportunityAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateATask200ResponseTaskOpportunityAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


