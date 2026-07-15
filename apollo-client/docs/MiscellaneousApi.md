# MiscellaneousApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addRecordsToAList**](MiscellaneousApi.md#addrecordstoalistoperation) | **POST** /labels/add_entity_ids_to_label_names | Add Records to a List |
| [**createACustomField**](MiscellaneousApi.md#createacustomfieldoperation) | **POST** /fields | Create a Custom Field |
| [**createAList**](MiscellaneousApi.md#createalistoperation) | **POST** /labels | Create a List |
| [**getAListOfAllCustomFields**](MiscellaneousApi.md#getalistofallcustomfields) | **GET** /typed_custom_fields | Get a List of All Custom Fields |
| [**getAListOfAllLists**](MiscellaneousApi.md#getalistofalllists) | **GET** /labels | Get a List of All Lists |
| [**getAListOfEmailAccounts**](MiscellaneousApi.md#getalistofemailaccounts) | **GET** /email_accounts | Get a List of Email Accounts |
| [**getAListOfFields**](MiscellaneousApi.md#getalistoffields) | **GET** /fields | Get a List of Fields |
| [**getAListOfNotes**](MiscellaneousApi.md#getalistofnotes) | **GET** /notes | Get a List of Notes |
| [**getAListOfUsers**](MiscellaneousApi.md#getalistofusers) | **GET** /users/search | Get a List of Users |
| [**pollWebhookResult**](MiscellaneousApi.md#pollwebhookresult) | **GET** /webhook_result/{request_id} | Poll Webhook Result |
| [**postApiusage**](MiscellaneousApi.md#postapiusage) | **POST** /usage_stats/api_usage_stats | View API Usage Stats and Rate Limits |
| [**removeRecordsFromAList**](MiscellaneousApi.md#removerecordsfromalist) | **POST** /labels/remove_entity_ids_from_label_names | Remove Records from a List |
| [**updateAList**](MiscellaneousApi.md#updatealistoperation) | **PATCH** /labels/{id} | Update a List |



## addRecordsToAList

> AddRecordsToAList200Response addRecordsToAList(addRecordsToAListRequest)

Add Records to a List

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  A &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409728608525-Create-and-Use-a-List\&quot; target&#x3D;\&quot;_blank\&quot;&gt;list&lt;/a&gt; is a saved group of contacts or accounts in Apollo that you can organize, action, and track together.&lt;br&gt;&lt;br&gt;Use the Add Records to a List endpoint to add existing contacts or accounts to one or more lists, referencing the lists by name. If a list name you provide doesn\&#39;t exist yet for the given modality, Apollo creates it automatically.&lt;br&gt;&lt;br&gt;Provide the record IDs in &#x60;entity_ids&#x60; and the target list names in &#x60;label_names&#x60;. To find record IDs, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot;&gt;Search for Contacts&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-accounts\&quot;&gt;Search for Accounts&lt;/a&gt; endpoints.&lt;br&gt;&lt;br&gt;If you provide no valid &#x60;entity_ids&#x60; or no &#x60;label_names&#x60;, the endpoint makes no changes and returns a &#x60;200&#x60; response with a confirmation message.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { AddRecordsToAListOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // AddRecordsToAListRequest
    addRecordsToAListRequest: ...,
  } satisfies AddRecordsToAListOperationRequest;

  try {
    const data = await api.addRecordsToAList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addRecordsToAListRequest** | [AddRecordsToAListRequest](AddRecordsToAListRequest.md) |  | |

### Return type

[**AddRecordsToAList200Response**](AddRecordsToAList200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createACustomField

> CreateACustomField200Response createACustomField(createACustomFieldRequest)

Create a Custom Field

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  The Create a Custom Field endpoint lets you add custom fields to your Apollo account, helping your team capture unique details with &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4412498825869-Create-Custom-Contact-Fields\&quot; target&#x3D;\&quot;_blank\&quot;&gt;custom contact&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4412498754445-Create-Custom-Account-Fields\&quot; target&#x3D;\&quot;_blank\&quot;&gt;custom account&lt;/a&gt;, or &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4415062486669-Create-a-Deal\&quot; target&#x3D;\&quot;_blank\&quot;&gt;custom deal fields&lt;/a&gt;.&lt;br&gt;&lt;br&gt;Use these fields to enhance your sequences and deliver more personalized, relevant outreach.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { CreateACustomFieldOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // CreateACustomFieldRequest
    createACustomFieldRequest: ...,
  } satisfies CreateACustomFieldOperationRequest;

  try {
    const data = await api.createACustomField(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createACustomFieldRequest** | [CreateACustomFieldRequest](CreateACustomFieldRequest.md) |  | |

### Return type

[**CreateACustomField200Response**](CreateACustomField200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAList

> CreateAList200Response createAList(createAListRequest)

Create a List

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  A &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409728608525-Create-and-Use-a-List\&quot; target&#x3D;\&quot;_blank\&quot;&gt;list&lt;/a&gt; is a saved group of contacts or accounts in Apollo that you can organize, action, and track together.&lt;br&gt;&lt;br&gt;Use the Create a List endpoint to create a new, empty contact or account list in your team\&#39;s Apollo account. After you create a list, add records to it with the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/add-records-to-a-list\&quot;&gt;Add Records to a List endpoint&lt;/a&gt;.&lt;br&gt;&lt;br&gt;List names must be unique for each modality within your team. If you try to create a list with a name that already exists for the same modality, Apollo returns a &#x60;422&#x60; response.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { CreateAListOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // CreateAListRequest
    createAListRequest: ...,
  } satisfies CreateAListOperationRequest;

  try {
    const data = await api.createAList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createAListRequest** | [CreateAListRequest](CreateAListRequest.md) |  | |

### Return type

[**CreateAList200Response**](CreateAList200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAListOfAllCustomFields

> GetAListOfAllCustomFields200Response getAListOfAllCustomFields()

Get a List of All Custom Fields

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  This endpoint is deprecated. To achieve the same result, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-fields\&quot;&gt;Fields endpoint&lt;/a&gt; (use &#x60;source: custom&#x60; to get custom fields only).&lt;br&gt;&lt;br&gt; Use the Get a List of Custom Fields endpoint to retrieve information about all of the custom fields that have been created in your Apollo account.&lt;br&gt;&lt;br&gt;This endpoint doesn\&#39;t require any parameters. &lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { GetAListOfAllCustomFieldsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  try {
    const data = await api.getAListOfAllCustomFields();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAListOfAllCustomFields200Response**](GetAListOfAllCustomFields200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAListOfAllLists

> Array&lt;GetAListOfAllLists200ResponseInner&gt; getAListOfAllLists()

Get a List of All Lists

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Get a List of All Lists endpoint to retrieve information about every &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409728608525-Create-and-Use-a-List\&quot; target&#x3D;\&quot;_blank\&quot;&gt;list&lt;/a&gt; that has been created in your Apollo account. This endpoint can be used to check the available lists before you use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-a-contact\&quot;&gt;Create a Contact endpoint&lt;/a&gt;. &lt;br&gt;&lt;br&gt;This endpoint doesn\&#39;t require any parameters.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { GetAListOfAllListsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  try {
    const data = await api.getAListOfAllLists();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;GetAListOfAllLists200ResponseInner&gt;**](GetAListOfAllLists200ResponseInner.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAListOfEmailAccounts

> GetAListOfEmailAccounts200Response getAListOfEmailAccounts()

Get a List of Email Accounts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  You can &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409127806093-Link-Your-Mailbox-to-Apollo\&quot; target&#x3D;\&quot;_blank\&quot;&gt;link mailboxes to Apollo&lt;/a&gt;, and use them for prospect outreach.&lt;br&gt;&lt;br&gt;Use the Get a List of Email Accounts endpoint to retrieve information about the linked email inboxes that your teammates use in your Apollo account.&lt;br&gt;&lt;br&gt;In particular, this endpoint returns IDs for each of your team\&#39;s linked email accounts, which can be used with the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/add-contacts-to-sequence\&quot;&gt;Add Contacts to a Sequence endpoint&lt;/a&gt;.&lt;br&gt;&lt;br&gt;This endpoint doesn\&#39;t require any parameters.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { GetAListOfEmailAccountsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  try {
    const data = await api.getAListOfEmailAccounts();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAListOfEmailAccounts200Response**](GetAListOfEmailAccounts200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAListOfFields

> GetAListOfFields200Response getAListOfFields(source)

Get a List of Fields

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Get a List of Fields endpoint to retrieve information about all of the fields that exist in your Apollo account.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { GetAListOfFieldsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // 'system' | 'custom' | 'crm_synced' (optional)
    source: source_example,
  } satisfies GetAListOfFieldsRequest;

  try {
    const data = await api.getAListOfFields(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **source** | `system`, `custom`, `crm_synced` |  | [Optional] [Defaults to `undefined`] [Enum: system, custom, crm_synced] |

### Return type

[**GetAListOfFields200Response**](GetAListOfFields200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAListOfNotes

> GetAListOfNotes200Response getAListOfNotes(contactId, accountId, opportunityId, calendarEventId, conversationId, conversationIds, contactIds, startDate, sortByField, sortDirection, skip, limit)

Get a List of Notes

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28746467476365-Notes-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Notes&lt;/a&gt; on Apollo let you keep track of info directly on prospect profiles.&lt;br&gt;&lt;br&gt;The Get a List of Notes endpoint retrieves notes associated with a specific contact, account, opportunity, calendar event, or conversation in your Apollo account. You must provide at least one relation parameter (&lt;code&gt;account_id&lt;/code&gt;, &lt;code&gt;contact_id&lt;/code&gt;, &lt;code&gt;contact_ids&lt;/code&gt;, &lt;code&gt;opportunity_id&lt;/code&gt;, &lt;code&gt;calendar_event_id&lt;/code&gt;, &lt;code&gt;conversation_id&lt;/code&gt;, or &lt;code&gt;conversation_ids&lt;/code&gt;). Use this endpoint to fetch notes with sorting and pagination support.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { GetAListOfNotesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // string | The ID of the contact whose notes you want to retrieve. <br><br>Example: `60a5c0b8e4b0c7001c4f1234` (optional)
    contactId: contactId_example,
    // string | The ID of the account whose notes you want to retrieve. <br><br>Example: `60a5c0b8e4b0c7001c4f5678` (optional)
    accountId: accountId_example,
    // string | The ID of the opportunity whose notes you want to retrieve. <br><br>Example: `60a5c0b8e4b0c7001c4f9012` (optional)
    opportunityId: opportunityId_example,
    // string | The ID of the calendar event whose notes you want to retrieve. <br><br>Example: `60a5c0b8e4b0c7001c4f3456` (optional)
    calendarEventId: calendarEventId_example,
    // string | The ID of the conversation whose notes you want to retrieve. <br><br>Example: `60a5c0b8e4b0c7001c4f7890` (optional)
    conversationId: conversationId_example,
    // Array<string> | An array of conversation IDs to filter notes by multiple conversations. (optional)
    conversationIds: ...,
    // Array<string> | An array of contact IDs to filter notes by multiple contacts. (optional)
    contactIds: ...,
    // string | Filter notes created on or after this date. Must be a valid date string. <br><br>Example: `2024-01-01` (optional)
    startDate: startDate_example,
    // 'created_at' | 'updated_at' | The field to sort results by. Defaults to `created_at`. (optional)
    sortByField: sortByField_example,
    // 'asc' | 'desc' | The direction to sort results. Defaults to `desc`. (optional)
    sortDirection: sortDirection_example,
    // number | The number of notes to skip for pagination. Must be a non-negative integer. Defaults to `0`. (optional)
    skip: 56,
    // number | The maximum number of notes to return per request. Defaults to `25`. Maximum value is `100`. (optional)
    limit: 56,
  } satisfies GetAListOfNotesRequest;

  try {
    const data = await api.getAListOfNotes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **contactId** | `string` | The ID of the contact whose notes you want to retrieve. &lt;br&gt;&lt;br&gt;Example: &#x60;60a5c0b8e4b0c7001c4f1234&#x60; | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The ID of the account whose notes you want to retrieve. &lt;br&gt;&lt;br&gt;Example: &#x60;60a5c0b8e4b0c7001c4f5678&#x60; | [Optional] [Defaults to `undefined`] |
| **opportunityId** | `string` | The ID of the opportunity whose notes you want to retrieve. &lt;br&gt;&lt;br&gt;Example: &#x60;60a5c0b8e4b0c7001c4f9012&#x60; | [Optional] [Defaults to `undefined`] |
| **calendarEventId** | `string` | The ID of the calendar event whose notes you want to retrieve. &lt;br&gt;&lt;br&gt;Example: &#x60;60a5c0b8e4b0c7001c4f3456&#x60; | [Optional] [Defaults to `undefined`] |
| **conversationId** | `string` | The ID of the conversation whose notes you want to retrieve. &lt;br&gt;&lt;br&gt;Example: &#x60;60a5c0b8e4b0c7001c4f7890&#x60; | [Optional] [Defaults to `undefined`] |
| **conversationIds** | `Array<string>` | An array of conversation IDs to filter notes by multiple conversations. | [Optional] |
| **contactIds** | `Array<string>` | An array of contact IDs to filter notes by multiple contacts. | [Optional] |
| **startDate** | `string` | Filter notes created on or after this date. Must be a valid date string. &lt;br&gt;&lt;br&gt;Example: &#x60;2024-01-01&#x60; | [Optional] [Defaults to `undefined`] |
| **sortByField** | `created_at`, `updated_at` | The field to sort results by. Defaults to &#x60;created_at&#x60;. | [Optional] [Defaults to `&#39;created_at&#39;`] [Enum: created_at, updated_at] |
| **sortDirection** | `asc`, `desc` | The direction to sort results. Defaults to &#x60;desc&#x60;. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **skip** | `number` | The number of notes to skip for pagination. Must be a non-negative integer. Defaults to &#x60;0&#x60;. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of notes to return per request. Defaults to &#x60;25&#x60;. Maximum value is &#x60;100&#x60;. | [Optional] [Defaults to `25`] |

### Return type

[**GetAListOfNotes200Response**](GetAListOfNotes200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **400** | 400 |  -  |
| **401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAListOfUsers

> GetAListOfUsers200Response getAListOfUsers(page, perPage)

Get a List of Users

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409130537101-Add-Manage-and-Deactivate-Users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Users&lt;/a&gt; are the people who use your Apollo workspace.&lt;br&gt;&lt;br&gt;Use the Get a List of Users endpoint to retrieve the IDs for all of the users in your Apollo account.&lt;br&gt;&lt;br&gt;These IDs can be used for several other endpoints, including the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-deal\&quot;&gt;Create a Deal&lt;/a&gt;, &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-an-account\&quot;&gt;Create an Account&lt;/a&gt;, and &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-task\&quot;&gt;Create a Task&lt;/a&gt; endpoints.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master API key.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { GetAListOfUsersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies GetAListOfUsersRequest;

  try {
    const data = await api.getAListOfUsers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAListOfUsers200Response**](GetAListOfUsers200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pollWebhookResult

> PollWebhookResult200Response pollWebhookResult(requestId)

Poll Webhook Result

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Poll Webhook Result endpoint to retrieve webhook results from Apollo. This endpoint enables you to poll for the webhook payload if you didn\&#39;t receive the original webhook callback.  &lt;br&gt;&lt;br&gt;To use this endpoint, you need the &lt;code&gt;request_id&lt;/code&gt; from the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/people-enrichment\&quot;&gt;People Enrichment&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-people-enrichment\&quot;&gt;Bulk People Enrichment&lt;/a&gt; endpoint. Pass this value as &lt;code&gt;request_id&lt;/code&gt; in this endpoint.&lt;br&gt;&lt;br&gt;This endpoint returns webhook results for your team from up to thirty days after the webhook was triggered.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { PollWebhookResultRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // number | The <code>request_id</code> returned when the original enrichment request was submitted. This value is an integer and can be positive or negative. <br><br>Example: <code>1039995589705121900</code>
    requestId: 56,
  } satisfies PollWebhookResultRequest;

  try {
    const data = await api.pollWebhookResult(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestId** | `number` | The &lt;code&gt;request_id&lt;/code&gt; returned when the original enrichment request was submitted. This value is an integer and can be positive or negative. &lt;br&gt;&lt;br&gt;Example: &lt;code&gt;1039995589705121900&lt;/code&gt; | [Defaults to `undefined`] |

### Return type

[**PollWebhookResult200Response**](PollWebhookResult200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **404** | 404 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postApiusage

> postApiusage()

View API Usage Stats and Rate Limits

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the View API Usage Stats endpoint to view your team\&#39;s usage of Apollo API and your rate limit for API endpoints.&lt;br&gt;&lt;br&gt;Each endpoint has a rate limit per minute, hour, and day. Your &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/api-pricing\&quot;&gt;Apollo plan&lt;/a&gt; does impact the rate limits for API endpoints.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { PostApiusageRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  try {
    const data = await api.postApiusage();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeRecordsFromAList

> AddRecordsToAList200Response removeRecordsFromAList(addRecordsToAListRequest)

Remove Records from a List

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  A &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409728608525-Create-and-Use-a-List\&quot; target&#x3D;\&quot;_blank\&quot;&gt;list&lt;/a&gt; is a saved group of contacts or accounts in Apollo that you can organize, action, and track together.&lt;br&gt;&lt;br&gt;Use the Remove Records from a List endpoint to remove contacts or accounts from one or more lists, referencing the lists by name. Removing records from a list doesn\&#39;t delete the records themselves — it only removes them from the specified lists.&lt;br&gt;&lt;br&gt;Provide the record IDs in &#x60;entity_ids&#x60; and the list names in &#x60;label_names&#x60;. To find record IDs, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot;&gt;Search for Contacts&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-accounts\&quot;&gt;Search for Accounts&lt;/a&gt; endpoints.&lt;br&gt;&lt;br&gt;If you provide no valid &#x60;entity_ids&#x60; or no &#x60;label_names&#x60;, the endpoint makes no changes and returns a &#x60;200&#x60; response with a confirmation message.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { RemoveRecordsFromAListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // AddRecordsToAListRequest
    addRecordsToAListRequest: ...,
  } satisfies RemoveRecordsFromAListRequest;

  try {
    const data = await api.removeRecordsFromAList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addRecordsToAListRequest** | [AddRecordsToAListRequest](AddRecordsToAListRequest.md) |  | |

### Return type

[**AddRecordsToAList200Response**](AddRecordsToAList200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAList

> CreateAList200Response updateAList(id, updateAListRequest)

Update a List

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  A &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409728608525-Create-and-Use-a-List\&quot; target&#x3D;\&quot;_blank\&quot;&gt;list&lt;/a&gt; is a saved group of contacts or accounts in Apollo that you can organize, action, and track together.&lt;br&gt;&lt;br&gt;Use the Update a List endpoint to rename an existing list or to toggle its Book of Business status. You can\&#39;t change a list\&#39;s modality after it\&#39;s created.&lt;br&gt;&lt;br&gt;To find list IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-all-lists\&quot;&gt;Get a List of All Lists endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the list you want to update.

### Example

```ts
import {
  Configuration,
  MiscellaneousApi,
} from '';
import type { UpdateAListOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MiscellaneousApi(config);

  const body = {
    // string | The Apollo ID for the list you want to update.<br><br>To find list IDs, call the <a href=\"https://docs.apollo.io/reference/get-a-list-of-all-lists\">Get a List of All Lists endpoint</a> and identify the `id` value.<br><br>Example: `6612a4b7c8d9e0f123456789`
    id: id_example,
    // UpdateAListRequest
    updateAListRequest: ...,
  } satisfies UpdateAListOperationRequest;

  try {
    const data = await api.updateAList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The Apollo ID for the list you want to update.&lt;br&gt;&lt;br&gt;To find list IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-all-lists\&quot;&gt;Get a List of All Lists endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value.&lt;br&gt;&lt;br&gt;Example: &#x60;6612a4b7c8d9e0f123456789&#x60; | [Defaults to `undefined`] |
| **updateAListRequest** | [UpdateAListRequest](UpdateAListRequest.md) |  | |

### Return type

[**CreateAList200Response**](CreateAList200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **404** | 404 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

