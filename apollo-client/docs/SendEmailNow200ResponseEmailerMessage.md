
# SendEmailNow200ResponseEmailerMessage


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`status` | string
`toName` | string
`dueAt` | string
`completedAt` | any
`emailerCampaignId` | any
`attachmentIds` | Array&lt;any&gt;
`enableTracking` | boolean
`type` | string
`contactId` | string
`emailAccountId` | string
`dueAtManuallyChanged` | boolean
`dueAtSource` | string
`asyncSending` | boolean
`createdAt` | string
`accountId` | string
`clickTrackingEnabled` | boolean
`openTrackingEnabled` | boolean
`recipients` | [Array&lt;CreateAnEmailDraft200ResponseEmailerMessageRecipientsInner&gt;](CreateAnEmailDraft200ResponseEmailerMessageRecipientsInner.md)
`sendFrom` | [CreateAnEmailDraft200ResponseEmailerMessageSendFrom](CreateAnEmailDraft200ResponseEmailerMessageSendFrom.md)
`fromEmail` | string
`toEmail` | string
`fromName` | any
`bccEmails` | Array&lt;any&gt;
`ccEmails` | Array&lt;any&gt;
`sendFromInfo` | string
`bodyText` | string
`bodyHtml` | string
`bodyHtmlLoaded` | boolean
`subject` | string
`contact` | [CreateAnEmailDraft200ResponseEmailerMessageContact](CreateAnEmailDraft200ResponseEmailerMessageContact.md)

## Example

```typescript
import type { SendEmailNow200ResponseEmailerMessage } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66e8cc45028aed019c25d724,
  "userId": 66a3d80d4238fe02d2baaaaf,
  "status": scheduled,
  "toName": Ava Ruiz,
  "dueAt": 2025-02-03T15:30:00.000+00:00,
  "completedAt": null,
  "emailerCampaignId": null,
  "attachmentIds": null,
  "enableTracking": true,
  "type": outreach_manual_email,
  "contactId": 66e34b81740c50074e3d1bd4,
  "emailAccountId": 66e8c4567f32a501b2605004,
  "dueAtManuallyChanged": true,
  "dueAtSource": Email was sent using Send Now action,
  "asyncSending": true,
  "createdAt": 2025-02-03T15:30:00.000Z,
  "accountId": 612f9d6cd26c290001d9bda0,
  "clickTrackingEnabled": true,
  "openTrackingEnabled": true,
  "recipients": null,
  "sendFrom": null,
  "fromEmail": someemail@apollo.io,
  "toEmail": ava.ruiz@sumware.com,
  "fromName": null,
  "bccEmails": null,
  "ccEmails": null,
  "sendFromInfo": 66e8c4567f32a501b2605004***someemail@apollo.io,
  "bodyText": Hi Ava, I wanted to reach out about how Apollo can help your team.,
  "bodyHtml": <p>Hi Ava, I wanted to reach out about how Apollo can help your team.</p>,
  "bodyHtmlLoaded": true,
  "subject": Quick question about your team's workflow,
  "contact": null,
} satisfies SendEmailNow200ResponseEmailerMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendEmailNow200ResponseEmailerMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


