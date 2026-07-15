# ContactsApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkCreateContacts**](ContactsApi.md#bulkcreatecontactsoperation) | **POST** /contacts/bulk_create | Bulk Create Contacts |
| [**bulkUpdateContacts**](ContactsApi.md#bulkupdatecontactsoperation) | **POST** /contacts/bulk_update | Bulk Update Contacts |
| [**createAContact**](ContactsApi.md#createacontactoperation) | **POST** /contacts | Create a Contact |
| [**listContactStages**](ContactsApi.md#listcontactstages) | **GET** /contact_stages | List Contact Stages |
| [**searchForContacts**](ContactsApi.md#searchforcontactsoperation) | **POST** /contacts/search | Search for Contacts |
| [**updateAContact**](ContactsApi.md#updateacontactoperation) | **PATCH** /contacts/{contact_id} | Update a Contact |
| [**updateContactOwnership**](ContactsApi.md#updatecontactownership) | **POST** /contacts/update_owners | Update Contact Owner for Multiple Contacts |
| [**updateContactStage**](ContactsApi.md#updatecontactstage) | **POST** /contacts/update_stages | Update Contact Stage for Multiple Contacts |
| [**viewAContact**](ContactsApi.md#viewacontact) | **GET** /contacts/{contact_id} | View a Contact |
| [**viewAssociatedDeals**](ContactsApi.md#viewassociateddeals) | **POST** /contacts/{contact_id}/opportunities | View Associated Deals |



## bulkCreateContacts

> BulkCreateContacts200Response bulkCreateContacts(bulkCreateContactsRequest)

Bulk Create Contacts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995459280525-View-and-Edit-Contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contacts&lt;/a&gt; are people saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Bulk Create Contacts endpoint to create up to 100 contacts in a single API request. This endpoint supports intelligent deduplication and returns separated arrays for newly created and existing contacts. &lt;br&gt;&lt;br&gt;Important: This endpoint creates new contacts but doesn\&#39;t update existing ones (except for placeholder contacts from email imports). Existing contacts that match the criteria are returned in the &lt;code&gt;existing_contacts&lt;/code&gt; array without modification.&lt;br&gt;&lt;br&gt;To update existing contacts, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/bulk-update-contacts\&quot;&gt;Bulk Update Contacts endpoint&lt;/a&gt;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { BulkCreateContactsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // BulkCreateContactsRequest
    bulkCreateContactsRequest: {"contacts":[{"first_name":"John","last_name":"Doe","email":"john.doe@example.com","title":"Senior Manager","organization_name":"Acme Corporation"},{"first_name":"Jane","last_name":"Smith","email":"jane.smith@example.com","title":"VP of Sales","organization_name":"TechStart Inc","linkedin_url":"https://www.linkedin.com/in/jane-smith-4c8e21a9"}]},
  } satisfies BulkCreateContactsOperationRequest;

  try {
    const data = await api.bulkCreateContacts(body);
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
| **bulkCreateContactsRequest** | [BulkCreateContactsRequest](BulkCreateContactsRequest.md) |  | |

### Return type

[**BulkCreateContacts200Response**](BulkCreateContacts200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 - Successful bulk create operation |  -  |
| **401** | 401 - Unauthorized |  -  |
| **422** | 422 - Unprocessable Entity |  -  |
| **429** | 429 - Too Many Requests |  -  |
| **500** | 500 - Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkUpdateContacts

> BulkUpdateContacts200Response bulkUpdateContacts(bulkUpdateContactsRequest)

Bulk Update Contacts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995459280525-View-and-Edit-Contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contacts&lt;/a&gt; are people saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Bulk Update Contacts endpoint to update multiple contacts in your team\&#39;s Apollo account simultaneously. &lt;br&gt;&lt;br&gt;This endpoint allows you to update common fields across multiple contacts efficiently, such as contact stages, owners, custom fields, and other contact attributes. &lt;br&gt;&lt;br&gt;You can update up to 1000 contacts per request; requests with more than 1000 contacts are rejected with a &lt;code&gt;422&lt;/code&gt; error. Requests of 100 or fewer contacts are processed synchronously and return the updated contacts immediately. Requests of 101 to 1000 contacts are processed asynchronously. You can also force asynchronous processing at any batch size by setting the &lt;code&gt;async&lt;/code&gt; parameter to &lt;code&gt;true&lt;/code&gt;.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { BulkUpdateContactsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // BulkUpdateContactsRequest
    bulkUpdateContactsRequest: ...,
  } satisfies BulkUpdateContactsOperationRequest;

  try {
    const data = await api.bulkUpdateContacts(body);
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
| **bulkUpdateContactsRequest** | [BulkUpdateContactsRequest](BulkUpdateContactsRequest.md) |  | |

### Return type

[**BulkUpdateContacts200Response**](BulkUpdateContacts200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAContact

> CreateAContact200Response createAContact(createAContactRequest)

Create a Contact

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995459280525-View-and-Edit-Contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contacts&lt;/a&gt; are people saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Create a Contact endpoint to add a new contact to your team\&#39;s Apollo  account.&lt;br&gt;&lt;br&gt;By default, Apollo doesn\&#39;t apply deduplication processes when you create a new contact via API. If your entry has the same name, email address, or other details as an existing contact, Apollo creates a new contact instead of updating the existing contact. To enable deduplication and prevent duplicate contacts, set the &lt;code&gt;run_dedupe&lt;/code&gt; parameter to &lt;code&gt;true&lt;/code&gt;. &lt;br&gt;&lt;br&gt;To update an existing contact, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-a-contact\&quot;&gt;Update a Contact endpoint&lt;/a&gt; instead.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { CreateAContactOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // CreateAContactRequest
    createAContactRequest: {"first_name":"John","last_name":"Smith","email":"john.smith@example.com","organization_name":"Example Corp","title":"Software Engineer"},
  } satisfies CreateAContactOperationRequest;

  try {
    const data = await api.createAContact(body);
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
| **createAContactRequest** | [CreateAContactRequest](CreateAContactRequest.md) |  | |

### Return type

[**CreateAContact200Response**](CreateAContact200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listContactStages

> listContactStages()

List Contact Stages

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4410623601165-Contact-and-Account-Stages-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contact stages&lt;/a&gt; help you track progress on sales and marketing pipelines.&lt;br&gt;&lt;br&gt;Use the List Contact Stages endpoint to retrieve the IDs for the available contact stages in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;Contact stage IDs can be used to &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-a-contact\&quot;&gt;update individual contacts&lt;/a&gt; and &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-contact-stage\&quot;&gt;update the contact stages for multiple contacts&lt;/a&gt; via Apollo API.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { ListContactStagesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  try {
    const data = await api.listContactStages();
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
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchForContacts

> SearchForContacts200Response searchForContacts(searchForContactsRequest)

Search for Contacts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995459280525-View-and-Edit-Contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contacts&lt;/a&gt; are people saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Search for Contacts endpoint to search for the contacts that have been added to your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;This endpoint only returns contacts in the search results. To search for people in the Apollo database, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/people-api-search\&quot;&gt;People API Search endpoint&lt;/a&gt;.&lt;br&gt;&lt;br&gt;To protect Apollo\&#39;s performance for all users, this endpoint has a display limit of 50,000 records (100 records per page, up to 500 pages). Add more filters to narrow your search results as much as possible.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { SearchForContactsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // SearchForContactsRequest
    searchForContactsRequest: ...,
  } satisfies SearchForContactsOperationRequest;

  try {
    const data = await api.searchForContacts(body);
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
| **searchForContactsRequest** | [SearchForContactsRequest](SearchForContactsRequest.md) |  | |

### Return type

[**SearchForContacts200Response**](SearchForContacts200Response.md)

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
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAContact

> UpdateAContact200Response updateAContact(contactId, updateAContactRequest)

Update a Contact

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995459280525-View-and-Edit-Contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contacts&lt;/a&gt; are people saved in Apollo.&lt;br&gt;&lt;br&gt;Use the Update a Contact endpoint to update existing contacts in your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;To create a new contact, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-a-contact\&quot;&gt;Create a Contact endpoint&lt;/a&gt; instead. To update the contact stage for multiple contacts, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-contact-stage\&quot;&gt;Update Contact Stage for Multiple Contacts&lt;/a&gt; endpoint.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { UpdateAContactOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | The Apollo ID for the contact that you want to update. <br><br>To find contact IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-contacts\" target=\"_blank\">Search for Contacts endpoint</a> and identify the `id` value for the contact. <br><br>Example: `66e34b81740c50074e3d1bd4`
    contactId: contactId_example,
    // UpdateAContactRequest
    updateAContactRequest: ...,
  } satisfies UpdateAContactOperationRequest;

  try {
    const data = await api.updateAContact(body);
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
| **contactId** | `string` | The Apollo ID for the contact that you want to update. &lt;br&gt;&lt;br&gt;To find contact IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the contact. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | [Defaults to `undefined`] |
| **updateAContactRequest** | [UpdateAContactRequest](UpdateAContactRequest.md) |  | |

### Return type

[**UpdateAContact200Response**](UpdateAContact200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContactOwnership

> UpdateContactOwnership200Response updateContactOwnership(contactIds, ownerId)

Update Contact Owner for Multiple Contacts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5631686093069-Edit-a-Contact-or-Account-Owner\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contact owners&lt;/a&gt; manage specific contacts in Apollo.&lt;br&gt;&lt;br&gt;Use the Update Contact Owner for Multiple Contacts endpoint to assign multiple contacts to a different user in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;To update more than the contact\&#39;s owner, such as job titles or contact details, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-a-contact\&quot;&gt;Update a Contact endpoint&lt;/a&gt; instead.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { UpdateContactOwnershipRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // Array<string> | The Apollo IDs for the contacts that you want assign to an owner. <br><br>To find contact IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-contacts\" target=\"_blank\">Search for Contacts endpoint</a> and identify the `id` value for the contact. <br><br>Example: `66e34b81740c50074e3d1bd4`
    contactIds: ...,
    // string | The ID for the contact owner within your team\'s Apollo account. This user will be assigned ownership of the contacts. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> endpoint to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `66302798d03b9601c7934ebf`
    ownerId: ownerId_example,
  } satisfies UpdateContactOwnershipRequest;

  try {
    const data = await api.updateContactOwnership(body);
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
| **contactIds** | `Array<string>` | The Apollo IDs for the contacts that you want assign to an owner. &lt;br&gt;&lt;br&gt;To find contact IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the contact. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | |
| **ownerId** | `string` | The ID for the contact owner within your team\&#39;s Apollo account. This user will be assigned ownership of the contacts. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; endpoint to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66302798d03b9601c7934ebf&#x60; | [Defaults to `undefined`] |

### Return type

[**UpdateContactOwnership200Response**](UpdateContactOwnership200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateContactStage

> UpdateContactStage200Response updateContactStage(contactIds, contactStageId)

Update Contact Stage for Multiple Contacts

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4410623601165-Contact-and-Account-Stages-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contact stages&lt;/a&gt; help you track progress on sales and marketing pipelines.&lt;br&gt;&lt;br&gt;Use the Update Contact Stage for Multiple Contacts endpoint to update the contact stage for several contacts in your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;To update more than the contact stage, such as job titles or contact details, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-a-contact\&quot;&gt;Update a Contact endpoint&lt;/a&gt; instead.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { UpdateContactStageRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // Array<string> | The Apollo IDs for the contacts that you want to update. <br><br>To find contact IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-contacts\" target=\"_blank\">Search for Contacts endpoint</a> and identify the `id` value for the contact. <br><br>Example: `66e34b81740c50074e3d1bd4`
    contactIds: ...,
    // string | The Apollo ID for the contact stage to which you want to assign the contacts. Call the <a href=\"https://docs.apollo.io/reference/list-contact-stages\" target=\"_blank\">List Contact Stages endpoint</a> to retrieve a list of all the contact stage IDs available in your Apollo account. <br><br>Example: `6095a710bd01d100a506d4af`
    contactStageId: contactStageId_example,
  } satisfies UpdateContactStageRequest;

  try {
    const data = await api.updateContactStage(body);
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
| **contactIds** | `Array<string>` | The Apollo IDs for the contacts that you want to update. &lt;br&gt;&lt;br&gt;To find contact IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the contact. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | |
| **contactStageId** | `string` | The Apollo ID for the contact stage to which you want to assign the contacts. Call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/list-contact-stages\&quot; target&#x3D;\&quot;_blank\&quot;&gt;List Contact Stages endpoint&lt;/a&gt; to retrieve a list of all the contact stage IDs available in your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;6095a710bd01d100a506d4af&#x60; | [Defaults to `undefined`] |

### Return type

[**UpdateContactStage200Response**](UpdateContactStage200Response.md)

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewAContact

> ViewAContact200Response viewAContact(contactId)

View a Contact

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/5995459280525-View-and-Edit-Contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Contacts&lt;/a&gt; are people saved in Apollo.&lt;br&gt;&lt;br&gt;Use the View a Contact endpoint to retrieve details for an existing contact in your team\&#39;s Apollo database.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { ViewAContactRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | The Apollo ID for the contact that you want to view. <br><br>To find contact IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-contacts\" target=\"_blank\">Search for Contacts endpoint</a> and identify the `id` value for the contact. <br><br>Example: `66e34b81740c50074e3d1bd4`
    contactId: contactId_example,
  } satisfies ViewAContactRequest;

  try {
    const data = await api.viewAContact(body);
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
| **contactId** | `string` | The Apollo ID for the contact that you want to view. &lt;br&gt;&lt;br&gt;To find contact IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the contact. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | [Defaults to `undefined`] |

### Return type

[**ViewAContact200Response**](ViewAContact200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | 401 |  -  |
| **403** | 403 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewAssociatedDeals

> ViewAssociatedDeals200Response viewAssociatedDeals(contactId, body)

View Associated Deals

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4415062467725-Deals-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Deals&lt;/a&gt; on Apollo help you track sales opportunities.&lt;br&gt;&lt;br&gt;Use the View Associated Deals endpoint to retrieve the deals associated with a contact.&lt;br&gt;&lt;br&gt;This endpoint doesn\&#39;t require a request body. If you include one, Apollo doesn\&#39;t read its fields. An empty JSON &lt;code&gt;{}&lt;/code&gt; is sufficient.&lt;br&gt;&lt;br&gt;Each result returns the same deal details as &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/view-deal\&quot;&gt;View Deal&lt;/a&gt; endpoint. If the contact has no associated deals or the contact ID isn\&#39;t recognized, Apollo returns a &lt;code&gt;200&lt;/code&gt; response with an empty array rather than a &lt;code&gt;404&lt;/code&gt; error.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '';
import type { ViewAssociatedDealsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ContactsApi(config);

  const body = {
    // string | The ID for the contact whose associated deals you want to retrieve. <br><br>Example: <code>64a7ff0cc4dfae00013df1a5</code>
    contactId: contactId_example,
    // object (optional)
    body: {},
  } satisfies ViewAssociatedDealsRequest;

  try {
    const data = await api.viewAssociatedDeals(body);
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
| **contactId** | `string` | The ID for the contact whose associated deals you want to retrieve. &lt;br&gt;&lt;br&gt;Example: &lt;code&gt;64a7ff0cc4dfae00013df1a5&lt;/code&gt; | [Defaults to `undefined`] |
| **body** | `object` |  | [Optional] |

### Return type

[**ViewAssociatedDeals200Response**](ViewAssociatedDeals200Response.md)

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
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

