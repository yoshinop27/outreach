# ConversationsApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportConversations**](ConversationsApi.md#exportconversationsoperation) | **POST** /conversations/export | Export Conversations |
| [**getConversationsExport**](ConversationsApi.md#getconversationsexport) | **GET** /conversations/export/{id} | Get Conversations Export |
| [**getConversationsInfo**](ConversationsApi.md#getconversationsinfo) | **GET** /conversations/{id} | Get Conversations Info |
| [**searchConversations**](ConversationsApi.md#searchconversationsoperation) | **POST** /conversations/search | Search Conversations |



## exportConversations

> ExportConversations200Response exportConversations(exportConversationsRequest)

Export Conversations

This endpoint consumes Apollo credits when conversations are returned that include AI insights. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/45998035787533-Use-Conversations\&quot;&gt;Conversations&lt;/a&gt; are prospect video meetings stored in Apollo.&lt;br&gt;&lt;br&gt;Use the Export Conversations endpoint to export conversations within a time range. Exports are processed asynchronously and delivered as a gzipped JSON file. A notification email is sent to the specified team member when the export is ready.&lt;br&gt;&lt;br&gt;To get the download URL once the export is ready, refer to &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/get-conversations-export\&quot;&gt;Get Export&lt;/a&gt;.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '';
import type { ExportConversationsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConversationsApi(config);

  const body = {
    // ExportConversationsRequest
    exportConversationsRequest: {"start_time":"2024-01-01T00:00:00Z","end_time":"2024-03-31T23:59:59Z","email":"alice@example.com"},
  } satisfies ExportConversationsOperationRequest;

  try {
    const data = await api.exportConversations(body);
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
| **exportConversationsRequest** | [ExportConversationsRequest](ExportConversationsRequest.md) |  | |

### Return type

[**ExportConversations200Response**](ExportConversations200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **404** | 404 |  -  |
| **422** | 422 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConversationsExport

> GetConversationsExport200Response getConversationsExport(id)

Get Conversations Export

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/45998035787533-Use-Conversations\&quot;&gt;Conversations&lt;/a&gt; are prospect video meetings stored in Apollo.&lt;br&gt;&lt;br&gt;Use the Get Conversations Export endpoint to retrieve a download URL for your exported conversations.&lt;br&gt;&lt;br&gt;This endpoint is used as a follow-up to the &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/export-conversations\&quot;&gt;Export Conversations&lt;/a&gt; endpoint.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '';
import type { GetConversationsExportRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConversationsApi(config);

  const body = {
    // string | The export ID returned by the Export Conversations endpoint.
    id: id_example,
  } satisfies GetConversationsExportRequest;

  try {
    const data = await api.getConversationsExport(body);
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
| **id** | `string` | The export ID returned by the Export Conversations endpoint. | [Defaults to `undefined`] |

### Return type

[**GetConversationsExport200Response**](GetConversationsExport200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **404** | 404 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConversationsInfo

> GetConversationsInfo200Response getConversationsInfo(id)

Get Conversations Info

This endpoint consumes Apollo credits per record when conversations with AI insights are returned. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/45998035787533-Use-Conversations\&quot;&gt;Conversations&lt;/a&gt; are prospect video meetings stored in Apollo.&lt;br&gt;&lt;br&gt;Use the Get Conversation Info endpoint to retrieve the full details of a single conversation by its ID.&lt;br&gt;&lt;br&gt;To get a conversation\&#39;s ID, refer to &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/search-conversations\&quot;&gt;Search Conversations&lt;/a&gt;.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '';
import type { GetConversationsInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConversationsApi(config);

  const body = {
    // string | The conversation ID. Supports an optional share ID in the format <code>id_shareid</code>
    id: id_example,
  } satisfies GetConversationsInfoRequest;

  try {
    const data = await api.getConversationsInfo(body);
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
| **id** | `string` | The conversation ID. Supports an optional share ID in the format &lt;code&gt;id_shareid&lt;/code&gt; | [Defaults to `undefined`] |

### Return type

[**GetConversationsInfo200Response**](GetConversationsInfo200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **404** | 404 |  -  |
| **422** | 422 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchConversations

> SearchConversations200Response searchConversations(searchConversationsRequest)

Search Conversations

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/45998035787533-Use-Conversations\&quot;&gt;Conversations&lt;/a&gt; are prospect video meetings stored in Apollo.&lt;br&gt;&lt;br&gt;Use the Search Conversations endpoint to find a list of conversations. Several filters are available to help narrow your search, including by type, account, contact, date range, and more. Each result includes a summary of the conversation.&lt;br&gt;&lt;br&gt;This endpoint doesn\&#39;t include transcripts or recording URLs. Use the conversation ID retrieved from your search to request full details using &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/get-conversations-info\&quot;&gt;Get Conversations Info&lt;/a&gt;.

### Example

```ts
import {
  Configuration,
  ConversationsApi,
} from '';
import type { SearchConversationsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ConversationsApi(config);

  const body = {
    // SearchConversationsRequest (optional)
    searchConversationsRequest: {"page":1,"num_fetch_result":25},
  } satisfies SearchConversationsOperationRequest;

  try {
    const data = await api.searchConversations(body);
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
| **searchConversationsRequest** | [SearchConversationsRequest](SearchConversationsRequest.md) |  | [Optional] |

### Return type

[**SearchConversations200Response**](SearchConversations200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **403** | 403 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

