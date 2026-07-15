
# OrganizationEnrichment200ResponseOrganizationAccount


## Properties

Name | Type
------------ | -------------
`id` | string
`domain` | string
`name` | string
`teamId` | string
`organizationId` | string
`accountStageId` | any
`source` | string
`originalSource` | string
`creatorId` | any
`ownerId` | string
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
`accountRuleConfigStatuses` | Array&lt;any&gt;
`existenceLevel` | string
`labelIds` | Array&lt;string&gt;
`typedCustomFields` | object
`customFieldErrors` | object
`modality` | string
`sourceDisplayName` | string
`crmRecordUrl` | any
`intentStrength` | any
`showIntent` | boolean
`hasIntentSignalAccount` | boolean
`intentSignalAccount` | any

## Example

```typescript
import type { OrganizationEnrichment200ResponseOrganizationAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 63f53afe4ceeca00016bdd37,
  "domain": apollo.io,
  "name": Apollo,
  "teamId": 6095a710bd01d100a506d4ac,
  "organizationId": 5e66b6381e05b4008c8331b8,
  "accountStageId": null,
  "source": salesforce,
  "originalSource": salesforce,
  "creatorId": null,
  "ownerId": 60affe7d6e270a00f5db6fe4,
  "createdAt": 2023-02-21T21:43:26.351Z,
  "phone": +1(202) 555-0114,
  "phoneStatus": no_status,
  "hubspotId": null,
  "salesforceId": null,
  "crmOwnerId": null,
  "parentAccountId": null,
  "linkedinUrl": null,
  "sanitizedPhone": +12025550114,
  "accountPlaybookStatuses": null,
  "accountRuleConfigStatuses": null,
  "existenceLevel": full,
  "labelIds": null,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "modality": account,
  "sourceDisplayName": Imported from Salesforce,
  "crmRecordUrl": null,
  "intentStrength": null,
  "showIntent": false,
  "hasIntentSignalAccount": false,
  "intentSignalAccount": null,
} satisfies OrganizationEnrichment200ResponseOrganizationAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationEnrichment200ResponseOrganizationAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


