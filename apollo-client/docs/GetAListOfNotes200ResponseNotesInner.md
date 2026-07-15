
# GetAListOfNotes200ResponseNotesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`content` | string
`updatedAt` | string
`createdAt` | string
`contactId` | string
`conversationId` | string
`accountId` | string
`pinnedToTop` | boolean
`system` | boolean
`opportunityId` | string
`accountIds` | Array&lt;string&gt;
`contactIds` | Array&lt;string&gt;
`opportunityIds` | Array&lt;string&gt;
`calendarEventIds` | Array&lt;string&gt;
`conversationIds` | Array&lt;string&gt;
`isOrgChartNote` | boolean
`crmNotes` | Array&lt;any&gt;

## Example

```typescript
import type { GetAListOfNotes200ResponseNotesInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 60a5c0b8e4b0c7001c4fabcd,
  "userId": 60a5c0b8e4b0c7001c4f0001,
  "content": Had a productive call with the client.,
  "updatedAt": 2024-06-15T14:30:00.000Z,
  "createdAt": 2024-06-15T14:30:00.000Z,
  "contactId": 60a5c0b8e4b0c7001c4f1234,
  "conversationId": null,
  "accountId": 60a5c0b8e4b0c7001c4f5678,
  "pinnedToTop": false,
  "system": false,
  "opportunityId": null,
  "accountIds": null,
  "contactIds": null,
  "opportunityIds": null,
  "calendarEventIds": null,
  "conversationIds": null,
  "isOrgChartNote": false,
  "crmNotes": null,
} satisfies GetAListOfNotes200ResponseNotesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfNotes200ResponseNotesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


