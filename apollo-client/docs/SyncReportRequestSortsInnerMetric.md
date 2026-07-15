
# SyncReportRequestSortsInnerMetric

Sort by a metric column. Provide the same structure as a metric entry in the <code>metrics</code> array.

## Properties

Name | Type
------------ | -------------
`value` | string
`smartDatetimeReference` | string
`smartUserIdReference` | string

## Example

```typescript
import type { SyncReportRequestSortsInnerMetric } from ''

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "smartDatetimeReference": null,
  "smartUserIdReference": null,
} satisfies SyncReportRequestSortsInnerMetric

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SyncReportRequestSortsInnerMetric
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


