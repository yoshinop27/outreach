
# CreateAnAccount200ResponseAccount


## Properties

Name | Type
------------ | -------------
`id` | string
`domain` | string
`name` | string
`teamId` | string
`organizationId` | any
`accountStageId` | string
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
`labelIds` | Array&lt;any&gt;
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
import type { CreateAnAccount200ResponseAccount } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e9abf95ac32901b20d1a0d,
  "domain": irishcopywriters.ie,
  "name": The Irish Copywriters,
  "teamId": 6095a710bd01d100a506d4ac,
  "organizationId": null,
  "accountStageId": 6095a710bd01d100a506d4b9,
  "source": api,
  "originalSource": api,
  "creatorId": null,
  "ownerId": 66302798d03b9601c7934ebf,
  "createdAt": 2024-09-17T16:19:05.663Z,
  "phone": 555-555-0108,
  "phoneStatus": no_status,
  "hubspotId": null,
  "salesforceId": null,
  "crmOwnerId": null,
  "parentAccountId": null,
  "linkedinUrl": null,
  "sanitizedPhone": +15555550108,
  "accountPlaybookStatuses": null,
  "accountRuleConfigStatuses": null,
  "existenceLevel": full,
  "labelIds": null,
  "typedCustomFields": null,
  "customFieldErrors": null,
  "modality": account,
  "sourceDisplayName": Created from API,
  "crmRecordUrl": null,
  "intentStrength": null,
  "showIntent": false,
  "hasIntentSignalAccount": false,
  "intentSignalAccount": null,
} satisfies CreateAnAccount200ResponseAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAnAccount200ResponseAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


