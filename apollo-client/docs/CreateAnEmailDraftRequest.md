
# CreateAnEmailDraftRequest


## Properties

Name | Type
------------ | -------------
`contactId` | string
`subject` | string
`bodyHtml` | string
`recipients` | [Array&lt;CreateAnEmailDraftRequestRecipientsInner&gt;](CreateAnEmailDraftRequestRecipientsInner.md)
`inResponseToEmailerMessageId` | string
`emailerTemplateId` | string
`attachmentIds` | Array&lt;string&gt;
`enableTracking` | boolean
`outreachTaskId` | string

## Example

```typescript
import type { CreateAnEmailDraftRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "contactId": null,
  "subject": null,
  "bodyHtml": null,
  "recipients": null,
  "inResponseToEmailerMessageId": null,
  "emailerTemplateId": null,
  "attachmentIds": null,
  "enableTracking": null,
  "outreachTaskId": null,
} satisfies CreateAnEmailDraftRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAnEmailDraftRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


