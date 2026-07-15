
# CreateAnEmailDraft200ResponseEmailerMessageRecipientsInner


## Properties

Name | Type
------------ | -------------
`email` | string
`rawName` | string
`recipientTypeCd` | string
`contactId` | string
`userId` | any

## Example

```typescript
import type { CreateAnEmailDraft200ResponseEmailerMessageRecipientsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "email": ava.ruiz@sumware.com,
  "rawName": Ava Ruiz,
  "recipientTypeCd": to,
  "contactId": 66e34b81740c50074e3d1bd4,
  "userId": null,
} satisfies CreateAnEmailDraft200ResponseEmailerMessageRecipientsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAnEmailDraft200ResponseEmailerMessageRecipientsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


