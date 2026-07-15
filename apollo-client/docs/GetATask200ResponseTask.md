
# GetATask200ResponseTask


## Properties

Name | Type
------------ | -------------
`emailerCampaignId` | any
`id` | string
`userId` | string
`createdAt` | string
`completedAt` | any
`note` | any
`skippedAt` | any
`dueAt` | string
`type` | string
`priority` | string
`status` | string
`answered` | any
`contactId` | any
`personId` | any
`accountId` | any
`organizationId` | any
`personaIds` | Array&lt;any&gt;
`subject` | any
`createdFrom` | any
`salesforceType` | any
`playbookStepIds` | Array&lt;any&gt;
`playbookId` | any
`needsPlaybookAutoprospecting` | any
`starredByUserIds` | Array&lt;any&gt;
`salesforceId` | any
`hubspotId` | any
`opportunityId` | string
`title` | string
`ruleConfigId` | any
`creatorId` | string
`completedByUserId` | any
`callScript` | any
`relevantFields` | any
`pendingSend` | boolean
`aiVariablesStatus` | any
`recommended` | boolean
`recommendationReasons` | Array&lt;any&gt;
`noteText` | string
`phoneCall` | [GetATask200ResponseTaskPhoneCall](GetATask200ResponseTaskPhoneCall.md)
`account` | [GetATask200ResponseTaskAccount](GetATask200ResponseTaskAccount.md)
`contact` | [GetATask200ResponseTaskContact](GetATask200ResponseTaskContact.md)
`opportunity` | [CreateATask200ResponseTaskOpportunity](CreateATask200ResponseTaskOpportunity.md)
`relevantFieldValues` | object

## Example

```typescript
import type { GetATask200ResponseTask } from ''

// TODO: Update the object below with actual values
const example = {
  "emailerCampaignId": null,
  "id": 66e8cc45028aed019c25d724,
  "userId": 66a3d80d4238fe02d2baaaaf,
  "createdAt": 2024-09-17T00:24:37.436Z,
  "completedAt": null,
  "note": null,
  "skippedAt": null,
  "dueAt": 2024-09-21T00:00:00.000+00:00,
  "type": action_item,
  "priority": medium,
  "status": scheduled,
  "answered": null,
  "contactId": null,
  "personId": null,
  "accountId": null,
  "organizationId": null,
  "personaIds": null,
  "subject": null,
  "createdFrom": null,
  "salesforceType": null,
  "playbookStepIds": null,
  "playbookId": null,
  "needsPlaybookAutoprospecting": null,
  "starredByUserIds": null,
  "salesforceId": null,
  "hubspotId": null,
  "opportunityId": 66e8c4567f32a501b2605004,
  "title": Reminder - Schedule Demo Call,
  "ruleConfigId": null,
  "creatorId": 60affe7d6e270a00f5db6fe4,
  "completedByUserId": null,
  "callScript": null,
  "relevantFields": null,
  "pendingSend": false,
  "aiVariablesStatus": null,
  "recommended": false,
  "recommendationReasons": null,
  "noteText": ,
  "phoneCall": null,
  "account": null,
  "contact": null,
  "opportunity": null,
  "relevantFieldValues": null,
} satisfies GetATask200ResponseTask

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetATask200ResponseTask
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


