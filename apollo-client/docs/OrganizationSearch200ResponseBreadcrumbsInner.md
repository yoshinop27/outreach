
# OrganizationSearch200ResponseBreadcrumbsInner


## Properties

Name | Type
------------ | -------------
`label` | string
`signalFieldName` | string
`value` | string
`displayName` | string

## Example

```typescript
import type { OrganizationSearch200ResponseBreadcrumbsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "label": # Employees,
  "signalFieldName": organization_num_employees_ranges,
  "value": 250,1000,
  "displayName": 250-1000,
} satisfies OrganizationSearch200ResponseBreadcrumbsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationSearch200ResponseBreadcrumbsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


