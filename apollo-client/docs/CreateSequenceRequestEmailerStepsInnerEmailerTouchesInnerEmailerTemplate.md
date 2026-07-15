
# CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate

The email content for the touch. Provide `id` to update an existing template that your team owns, or omit `id` to create a new template.

## Properties

Name | Type
------------ | -------------
`id` | string
`subject` | string
`bodyHtml` | string

## Example

```typescript
import type { CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "subject": null,
  "bodyHtml": null,
} satisfies CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSequenceRequestEmailerStepsInnerEmailerTouchesInnerEmailerTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


