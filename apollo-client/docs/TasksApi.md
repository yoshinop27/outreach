# TasksApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkCreateTasks**](TasksApi.md#bulkcreatetasksoperation) | **POST** /tasks/bulk_create | Bulk Create Tasks |
| [**completeATask**](TasksApi.md#completeataskoperation) | **POST** /tasks/{id}/complete | Complete a Task |
| [**createATask**](TasksApi.md#createataskoperation) | **POST** /tasks | Create a Task |
| [**getATask**](TasksApi.md#getatask) | **GET** /tasks/{id} | Get a Task |
| [**searchTasks**](TasksApi.md#searchtasks) | **POST** /tasks/search | Search for Tasks |
| [**skipATask**](TasksApi.md#skipataskoperation) | **POST** /tasks/{id}/skip | Skip a Task |
| [**updateATask**](TasksApi.md#updateataskoperation) | **PATCH** /tasks/{id} | Update a Task |



## bulkCreateTasks

> BulkCreateTasks200Response bulkCreateTasks(bulkCreateTasksRequest)

Bulk Create Tasks

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28705458602125-Tasks-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Tasks&lt;/a&gt; let you track, prioritize, and help you complete actions required for your outbound sales motion.&lt;br&gt;&lt;br&gt;Use the Bulk Create Tasks endpoint to create multiple tasks in a single API request. A separate task will be created for each contact provided. &lt;br&gt;&lt;br&gt;This endpoint returns a &#x60;success&#x60; boolean and a &#x60;tasks&#x60; array containing the created tasks. &lt;br&gt;&lt;br&gt;Apollo doesn\&#39;t apply deduplication processes when you create a new task via the API. If your entry has the same task owner, contact, and other details as an existing task, Apollo creates a new task instead of updating the existing task. &lt;br&gt;&lt;br&gt;For creating a single task, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-a-task\&quot;&gt;Create a Task endpoint&lt;/a&gt; instead. &lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { BulkCreateTasksOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasksApi(config);

  const body = {
    // BulkCreateTasksRequest
    bulkCreateTasksRequest: {"user_id":"66302798d03b9601c7934ebf","contact_ids":["66e34b81740c50074e3d1bd4","66e34b81740c50074e3d1bd5","66e34b81740c50074e3d1bd6"],"type":"call","priority":"high","status":"scheduled","due_at":"2025-02-15T10:00:00Z","note":"Follow up on demo request."},
  } satisfies BulkCreateTasksOperationRequest;

  try {
    const data = await api.bulkCreateTasks(body);
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
| **bulkCreateTasksRequest** | [BulkCreateTasksRequest](BulkCreateTasksRequest.md) |  | |

### Return type

[**BulkCreateTasks200Response**](BulkCreateTasks200Response.md)

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


## completeATask

> CompleteATask200Response completeATask(id, completeATaskRequest)

Complete a Task

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28705458602125-Tasks-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Tasks&lt;/a&gt; let you track, prioritize, and help you complete actions required for your outbound sales motion.&lt;br&gt;&lt;br&gt;Use the Complete a Task endpoint to mark an existing task as &#x60;completed&#x60;.&lt;br&gt;&lt;br&gt;To find task IDs, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task you want to complete.&lt;br&gt;&lt;br&gt;If the task no longer exists (for example, because the sequence it belonged to was paused and the task was removed), Apollo returns a &#x60;200&#x60; response with &#x60;deleted: true&#x60; on the task instead of an error.&lt;br&gt;&lt;br&gt;To skip a task instead of completing it, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/skip-a-task\&quot;&gt;Skip a Task endpoint&lt;/a&gt;.

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { CompleteATaskOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasksApi(config);

  const body = {
    // string | The Apollo ID for the task. <br><br>To find task IDs, call the <a href=\"https://docs.apollo.io/reference/search-tasks\">Search for Tasks endpoint</a> and identify the `id` value for the task. <br><br>Example: `67a1b2c3d4e5f60001234567`
    id: id_example,
    // CompleteATaskRequest (optional)
    completeATaskRequest: ...,
  } satisfies CompleteATaskOperationRequest;

  try {
    const data = await api.completeATask(body);
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
| **id** | `string` | The Apollo ID for the task. &lt;br&gt;&lt;br&gt;To find task IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task. &lt;br&gt;&lt;br&gt;Example: &#x60;67a1b2c3d4e5f60001234567&#x60; | [Defaults to `undefined`] |
| **completeATaskRequest** | [CompleteATaskRequest](CompleteATaskRequest.md) |  | [Optional] |

### Return type

[**CompleteATask200Response**](CompleteATask200Response.md)

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


## createATask

> CreateATask200Response createATask(createATaskRequest)

Create a Task

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28705458602125-Tasks-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Tasks&lt;/a&gt; let you track, prioritize, and help you complete actions required for your outbound sales motion.&lt;br&gt;&lt;br&gt;Use the Create a Task endpoint to create a single task in Apollo for you and your team. Tasks help track the upcoming actions you need to take, such as emailing or calling a contact.&lt;br&gt;&lt;br&gt;This endpoint returns the created task object.&lt;br&gt;&lt;br&gt;Apollo does not apply deduplication  processes when you create a new task via the API. If your entry has the same task owner, contact, and other details as an existing task, Apollo will create a new task instead of updating the existing task.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { CreateATaskOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasksApi(config);

  const body = {
    // CreateATaskRequest
    createATaskRequest: {"user_id":"66302798d03b9601c7934ebf","contact_id":"66e34b81740c50074e3d1bd4","type":"call","priority":"high","status":"scheduled","due_at":"2025-02-15T10:00:00Z","title":"Follow-up call","note":"Discuss product demo results and next steps."},
  } satisfies CreateATaskOperationRequest;

  try {
    const data = await api.createATask(body);
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
| **createATaskRequest** | [CreateATaskRequest](CreateATaskRequest.md) |  | |

### Return type

[**CreateATask200Response**](CreateATask200Response.md)

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


## getATask

> GetATask200Response getATask(id)

Get a Task

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28705458602125-Tasks-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Tasks&lt;/a&gt; let you track, prioritize, and help you complete actions required for your outbound sales motion.&lt;br&gt;&lt;br&gt;Use the Get a Task endpoint to retrieve the full details for a single task that belongs to your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;The response includes the task\&#39;s associated &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/view-an-account\&quot;&gt;account&lt;/a&gt; and &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/view-a-contact\&quot;&gt;contact&lt;/a&gt; when the task has one attached. Depending on the task type, the response can also include other fields, such as &#x60;phone_call&#x60; for call tasks, &#x60;emailer_message&#x60; for email tasks, or a LinkedIn message template for LinkedIn-step tasks.&lt;br&gt;&lt;br&gt;To find task IDs, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task you want to view.

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { GetATaskRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasksApi(config);

  const body = {
    // string | The Apollo ID for the task. <br><br>To find task IDs, call the <a href=\"https://docs.apollo.io/reference/search-tasks\">Search for Tasks endpoint</a> and identify the `id` value for the task. <br><br>Example: `67a1b2c3d4e5f60001234567`
    id: id_example,
  } satisfies GetATaskRequest;

  try {
    const data = await api.getATask(body);
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
| **id** | `string` | The Apollo ID for the task. &lt;br&gt;&lt;br&gt;To find task IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task. &lt;br&gt;&lt;br&gt;Example: &#x60;67a1b2c3d4e5f60001234567&#x60; | [Defaults to `undefined`] |

### Return type

[**GetATask200Response**](GetATask200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchTasks

> SearchTasks200Response searchTasks(sortByField, openFactorNames, page, perPage)

Search for Tasks

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28705458602125-Tasks-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Tasks&lt;/a&gt; let you track, prioritize, and help you complete actions required for your outbound sales motion.&lt;br&gt;&lt;br&gt;Use the Search for Tasks endpoint to find tasks that your team has created in Apollo.&lt;br&gt;&lt;br&gt;To protect Apollo\&#39;s performance for all users, this endpoint has a display limit of 50,000 records (100 records per page, up to 500 pages). Add more filters to narrow your search results as much as possible.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { SearchTasksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasksApi(config);

  const body = {
    // string | Sort the tasks by 1 of the following options:  <ul> <li> `task_due_at`: The most future-dated first. </li> <li> `task_priority`: The highest priority first. </li> </ul> (optional)
    sortByField: sortByField_example,
    // Array<string> | Enter `task_types` for this parameter to return a count of tasks by task type. <br><br>When used, the response includes a `\"task_types\": []` array with a `\"count\"` value for each task type. (optional)
    openFactorNames: ...,
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies SearchTasksRequest;

  try {
    const data = await api.searchTasks(body);
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
| **sortByField** | `string` | Sort the tasks by 1 of the following options:  &lt;ul&gt; &lt;li&gt; &#x60;task_due_at&#x60;: The most future-dated first. &lt;/li&gt; &lt;li&gt; &#x60;task_priority&#x60;: The highest priority first. &lt;/li&gt; &lt;/ul&gt; | [Optional] [Defaults to `undefined`] |
| **openFactorNames** | `Array<string>` | Enter &#x60;task_types&#x60; for this parameter to return a count of tasks by task type. &lt;br&gt;&lt;br&gt;When used, the response includes a &#x60;\&quot;task_types\&quot;: []&#x60; array with a &#x60;\&quot;count\&quot;&#x60; value for each task type. | [Optional] |
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchTasks200Response**](SearchTasks200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## skipATask

> SkipATask200Response skipATask(id, skipATaskRequest)

Skip a Task

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28705458602125-Tasks-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Tasks&lt;/a&gt; let you track, prioritize, and help you complete actions required for your outbound sales motion.&lt;br&gt;&lt;br&gt;Use the Skip a Task endpoint to mark an existing task as &#x60;skipped&#x60; without completing it.&lt;br&gt;&lt;br&gt;To find task IDs, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task you want to skip.&lt;br&gt;&lt;br&gt;If the task no longer exists (for example, because the sequence it belonged to was paused and the task was removed), Apollo returns a &#x60;200&#x60; response with &#x60;deleted: true&#x60; on the task instead of an error.&lt;br&gt;&lt;br&gt;To mark a task as done instead of skipping it, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/complete-a-task\&quot;&gt;Complete a Task endpoint&lt;/a&gt;.

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { SkipATaskOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasksApi(config);

  const body = {
    // string | The Apollo ID for the task. <br><br>To find task IDs, call the <a href=\"https://docs.apollo.io/reference/search-tasks\">Search for Tasks endpoint</a> and identify the `id` value for the task. <br><br>Example: `67a1b2c3d4e5f60001234567`
    id: id_example,
    // SkipATaskRequest (optional)
    skipATaskRequest: ...,
  } satisfies SkipATaskOperationRequest;

  try {
    const data = await api.skipATask(body);
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
| **id** | `string` | The Apollo ID for the task. &lt;br&gt;&lt;br&gt;To find task IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task. &lt;br&gt;&lt;br&gt;Example: &#x60;67a1b2c3d4e5f60001234567&#x60; | [Defaults to `undefined`] |
| **skipATaskRequest** | [SkipATaskRequest](SkipATaskRequest.md) |  | [Optional] |

### Return type

[**SkipATask200Response**](SkipATask200Response.md)

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


## updateATask

> GetATask200Response updateATask(id, updateATaskRequest)

Update a Task

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/28705458602125-Tasks-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Tasks&lt;/a&gt; let you track, prioritize, and help you complete actions required for your outbound sales motion.&lt;br&gt;&lt;br&gt;Use the Update a Task endpoint to change the details of an existing task that belongs to your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;The fields you can update depend on the task\&#39;s current &#x60;status&#x60;. For a task with a &#x60;scheduled&#x60; status, you can update any of the parameters listed below. For a task that\&#39;s already &#x60;completed&#x60; or &#x60;skipped&#x60;, you can only update &#x60;note&#x60;, &#x60;priority&#x60;, &#x60;priority_cd&#x60;, and &#x60;contact_id&#x60;.&lt;br&gt;&lt;br&gt;To find task IDs, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task you want to update.

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { UpdateATaskOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasksApi(config);

  const body = {
    // string | The Apollo ID for the task. <br><br>To find task IDs, call the <a href=\"https://docs.apollo.io/reference/search-tasks\">Search for Tasks endpoint</a> and identify the `id` value for the task. <br><br>Example: `67a1b2c3d4e5f60001234567`
    id: id_example,
    // UpdateATaskRequest (optional)
    updateATaskRequest: ...,
  } satisfies UpdateATaskOperationRequest;

  try {
    const data = await api.updateATask(body);
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
| **id** | `string` | The Apollo ID for the task. &lt;br&gt;&lt;br&gt;To find task IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-tasks\&quot;&gt;Search for Tasks endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the task. &lt;br&gt;&lt;br&gt;Example: &#x60;67a1b2c3d4e5f60001234567&#x60; | [Defaults to `undefined`] |
| **updateATaskRequest** | [UpdateATaskRequest](UpdateATaskRequest.md) |  | [Optional] |

### Return type

[**GetATask200Response**](GetATask200Response.md)

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

