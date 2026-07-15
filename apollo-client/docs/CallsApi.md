# CallsApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPhoneCallssearch**](CallsApi.md#getphonecallssearch) | **GET** /phone_calls/search | Search for Calls |
| [**phonecallsCreate**](CallsApi.md#phonecallscreate) | **POST** /phone_calls | Create Call Records |
| [**putPhoneCallsupdate**](CallsApi.md#putphonecallsupdate) | **PUT** /phone_calls/{id} | Update Call Records |



## getPhoneCallssearch

> getPhoneCallssearch(dateRangeMax, dateRangeMin, durationMax, durationMin, inbound, userIds, contactLabelIds, phoneCallPurposeIds, phoneCallOutcomeIds, qKeywords, page, perPage)

Search for Calls

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Search for Calls endpoint to find calls that your team has made or  received using &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409140527757-Dialer-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;the dialer&lt;/a&gt; on Apollo.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60;  response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master API key.

### Example

```ts
import {
  Configuration,
  CallsApi,
} from '';
import type { GetPhoneCallssearchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallsApi(config);

  const body = {
    // Date | Set the upper bound of the date range you want to search. <br><br>Use this parameter in combination with the `date_range[min]` parameter. This date should fall after the `date_range[min]` date. <br><br>The date should be formatted as `YYYY-MM-DD`. <br><br>Example: `2025-06-12` (optional)
    dateRangeMax: 2013-10-20,
    // Date | Set the lower bound of the date range you want to search. <br><br>Use this parameter in combination with the `date_range[max]` parameter. This date should fall before the `date_range[max]` date. <br><br>The date should be formatted as `YYYY-MM-DD`. <br><br>Example: `2025-04-01` (optional)
    dateRangeMin: 2013-10-20,
    // number | Set the upper bound for the call duration you want to search. The duration should be seconds, not minutes or hours. <br><br>Use this parameter in combination with the `duration[min]` parameter. This number should be larger than `duration[min]`. <br><br>Example: `180` (optional)
    durationMax: 56,
    // number | Set the lower bound for the call duration you want to search. The duration should be seconds, not minutes or hours. <br><br>Use this parameter in combination with the `duration[max]` parameter. This number should be smallerr than `duration[min]`. <br><br>Example: `30` (optional)
    durationMin: 56,
    // string | Search for calls based on whether they were `incoming` (the prospect called your team) or `outgoing` (your team called the prospect). (optional)
    inbound: inbound_example,
    // Array<string> | Find calls that included specific users in your team\'s Apollo account. You can add multiple users. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `67e33d527de088000daa60c4` (optional)
    userIds: ...,
    // Array<string> | Find calls that included specific contacts. You can add multiple contacts. <br><br>In Apollo terminology, a contact is a person that your team has explicitly added to your database. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `67e33d527de088000daa60c4` 6708415f59d9c70001b2f852 (optional)
    contactLabelIds: ...,
    // Array<string> | Filter calls based on their purpose. <br><br>Call purposes are unique to your team\'s Apollo account. When you use the <b>Purpose</b> search filter for calls in the Apollo product, you can find the corresponding call purpose ID in the URL. <br><br>Example: `6095a710bd01d100a506d4cf` (optional)
    phoneCallPurposeIds: ...,
    // Array<string> | Filter calls based on their outcome. <br><br>Call outcomes are unique to your team\'s Apollo account. When you use the <b>Disposition</b> search filter for calls in the Apollo product, you can find the corresponding call outcome ID in the URL. <br><br>Example: `6095a710bd01d100a506d4c5` (optional)
    phoneCallOutcomeIds: ...,
    // string | Add keywords to narrow the search of the calls in your team\'s Apollo account. <br><br>Example: `marketing conference attendees` (optional)
    qKeywords: qKeywords_example,
    // string | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: page_example,
    // string | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the page parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: perPage_example,
  } satisfies GetPhoneCallssearchRequest;

  try {
    const data = await api.getPhoneCallssearch(body);
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
| **dateRangeMax** | `Date` | Set the upper bound of the date range you want to search. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;date_range[min]&#x60; parameter. This date should fall after the &#x60;date_range[min]&#x60; date. &lt;br&gt;&lt;br&gt;The date should be formatted as &#x60;YYYY-MM-DD&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-06-12&#x60; | [Optional] [Defaults to ``] |
| **dateRangeMin** | `Date` | Set the lower bound of the date range you want to search. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;date_range[max]&#x60; parameter. This date should fall before the &#x60;date_range[max]&#x60; date. &lt;br&gt;&lt;br&gt;The date should be formatted as &#x60;YYYY-MM-DD&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-04-01&#x60; | [Optional] [Defaults to ``] |
| **durationMax** | `number` | Set the upper bound for the call duration you want to search. The duration should be seconds, not minutes or hours. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;duration[min]&#x60; parameter. This number should be larger than &#x60;duration[min]&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;180&#x60; | [Optional] [Defaults to ``] |
| **durationMin** | `number` | Set the lower bound for the call duration you want to search. The duration should be seconds, not minutes or hours. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;duration[max]&#x60; parameter. This number should be smallerr than &#x60;duration[min]&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;30&#x60; | [Optional] [Defaults to ``] |
| **inbound** | `string` | Search for calls based on whether they were &#x60;incoming&#x60; (the prospect called your team) or &#x60;outgoing&#x60; (your team called the prospect). | [Optional] [Defaults to `&#39;&#39;`] |
| **userIds** | `Array<string>` | Find calls that included specific users in your team\&#39;s Apollo account. You can add multiple users. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;67e33d527de088000daa60c4&#x60; | [Optional] |
| **contactLabelIds** | `Array<string>` | Find calls that included specific contacts. You can add multiple contacts. &lt;br&gt;&lt;br&gt;In Apollo terminology, a contact is a person that your team has explicitly added to your database. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;67e33d527de088000daa60c4&#x60; 6708415f59d9c70001b2f852 | [Optional] |
| **phoneCallPurposeIds** | `Array<string>` | Filter calls based on their purpose. &lt;br&gt;&lt;br&gt;Call purposes are unique to your team\&#39;s Apollo account. When you use the &lt;b&gt;Purpose&lt;/b&gt; search filter for calls in the Apollo product, you can find the corresponding call purpose ID in the URL. &lt;br&gt;&lt;br&gt;Example: &#x60;6095a710bd01d100a506d4cf&#x60; | [Optional] |
| **phoneCallOutcomeIds** | `Array<string>` | Filter calls based on their outcome. &lt;br&gt;&lt;br&gt;Call outcomes are unique to your team\&#39;s Apollo account. When you use the &lt;b&gt;Disposition&lt;/b&gt; search filter for calls in the Apollo product, you can find the corresponding call outcome ID in the URL. &lt;br&gt;&lt;br&gt;Example: &#x60;6095a710bd01d100a506d4c5&#x60; | [Optional] |
| **qKeywords** | `string` | Add keywords to narrow the search of the calls in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;marketing conference attendees&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **page** | `string` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **perPage** | `string` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the page parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `&#39;&#39;`] |

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
| **200** | OK |  -  |
| **401** | 401 |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## phonecallsCreate

> phonecallsCreate(logged, userId, contactId, accountId, toNumber, fromNumber, status, startTime, endTime, duration, phoneCallPurposeId, phoneCallOutcomeId, note)

Create Call Records

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Create Call Records endpoint to log calls in Apollo that were made using outside systems such as Orum or Nooks. This endpoint can only be used create call records, not to dial prospects.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  CallsApi,
} from '';
import type { PhonecallsCreateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallsApi(config);

  const body = {
    // boolean | Set to `true` if you want to create an individual record for the phone call in Apollo. (optional)
    logged: true,
    // Array<string> | Designate the caller in your team\'s Apollo account. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `67e33d527de088000daa60c4` (optional)
    userId: ...,
    // string | Designate the contact that was called. <br><br>Use the <a href=\"https://docs.apollo.io/reference/search-for-contacts#/\" target=\"_blank\">Search for Contacts endpoint</a> to retrieve IDs for all of the contacts within your Apollo account. <br><br>Example: `66e34b81740c50074e3d1bd4` (optional)
    contactId: contactId_example,
    // string | Associate the call with an account. <br><br>Use the <a href=\"https://docs.apollo.io/reference/search-for-accounts#/\" target=\"_blank\">Search for Accounts endpoint</a> to retrieve IDs for all of the accounts within your Apollo account. <br><br>Example: `66e9abf95ac32901b20d1a0d` (optional)
    accountId: accountId_example,
    // string | The phone number that you dialed. <br><br>Example: `5555550164` (optional)
    toNumber: toNumber_example,
    // string | The phone number that dialed you. <br><br>Example: `5555550164` (optional)
    fromNumber: fromNumber_example,
    // string | The status of the phone call. Possible values include: <ul> <li>`queued`</li> <li>`ringing`</li> <li>`in-progress`</li> <li>`completed`</li> <li>`no_answer`</li> <li>`failed`</li> <li>`busy`</li></ul> (optional)
    status: status_example,
    // Date | The time when the call started. <br><br>Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a start time that falls on a different day than you intended. <br><br>The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. <br><br>Example: `2025-02-15T08:10:30Z`; `2025-03-25T10:15:30+05:00Z` (optional)
    startTime: 2013-10-20T19:20:30+01:00,
    // Date | The time when the call ended. <br><br>Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a end time that falls on a different day than you intended. <br><br>The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. <br><br>Example: `2025-05-15T08:10:30Z`; `2025-05-25T10:15:30+05:00Z` (optional)
    endTime: 2013-10-20T19:20:30+01:00,
    // number | The duration of the call in seconds. Do not enter minutes. <br><br>Examples: `120`; `205` (optional)
    duration: 56,
    // string | Assign a call purpose to the record. <br><br>Call purposes are unique to your team\'s Apollo account. When you use the <b>Purpose</b> search filter for calls in the Apollo product, you can find the corresponding call purpose ID in the URL. <br><br>Examples: `6095a710bd01d100a506d4cd` (optional)
    phoneCallPurposeId: phoneCallPurposeId_example,
    // string | Assign a call outcome to the record. <br><br>Call outcomes are unique to your team\'s Apollo account. When you use the <b>Disposition</b> search filter for calls in the Apollo product, you can find the corresponding call outcome ID in the URL. <br><br>Examples: `6095a710bd01d100a506d4c5` (optional)
    phoneCallOutcomeId: phoneCallOutcomeId_example,
    // string | Add a note to the call record. <br><br>Example: `This lead is interested in learning more about our new product line.` (optional)
    note: note_example,
  } satisfies PhonecallsCreateRequest;

  try {
    const data = await api.phonecallsCreate(body);
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
| **logged** | `boolean` | Set to &#x60;true&#x60; if you want to create an individual record for the phone call in Apollo. | [Optional] [Defaults to `false`] |
| **userId** | `Array<string>` | Designate the caller in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;67e33d527de088000daa60c4&#x60; | [Optional] |
| **contactId** | `string` | Designate the contact that was called. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts#/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; to retrieve IDs for all of the contacts within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **accountId** | `string` | Associate the call with an account. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-accounts#/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Accounts endpoint&lt;/a&gt; to retrieve IDs for all of the accounts within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9abf95ac32901b20d1a0d&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **toNumber** | `string` | The phone number that you dialed. &lt;br&gt;&lt;br&gt;Example: &#x60;5555550164&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **fromNumber** | `string` | The phone number that dialed you. &lt;br&gt;&lt;br&gt;Example: &#x60;5555550164&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **status** | `string` | The status of the phone call. Possible values include: &lt;ul&gt; &lt;li&gt;&#x60;queued&#x60;&lt;/li&gt; &lt;li&gt;&#x60;ringing&#x60;&lt;/li&gt; &lt;li&gt;&#x60;in-progress&#x60;&lt;/li&gt; &lt;li&gt;&#x60;completed&#x60;&lt;/li&gt; &lt;li&gt;&#x60;no_answer&#x60;&lt;/li&gt; &lt;li&gt;&#x60;failed&#x60;&lt;/li&gt; &lt;li&gt;&#x60;busy&#x60;&lt;/li&gt;&lt;/ul&gt; | [Optional] [Defaults to `&#39;&#39;`] |
| **startTime** | `Date` | The time when the call started. &lt;br&gt;&lt;br&gt;Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a start time that falls on a different day than you intended. &lt;br&gt;&lt;br&gt;The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-02-15T08:10:30Z&#x60;; &#x60;2025-03-25T10:15:30+05:00Z&#x60; | [Optional] [Defaults to ``] |
| **endTime** | `Date` | The time when the call ended. &lt;br&gt;&lt;br&gt;Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a end time that falls on a different day than you intended. &lt;br&gt;&lt;br&gt;The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-05-15T08:10:30Z&#x60;; &#x60;2025-05-25T10:15:30+05:00Z&#x60; | [Optional] [Defaults to ``] |
| **duration** | `number` | The duration of the call in seconds. Do not enter minutes. &lt;br&gt;&lt;br&gt;Examples: &#x60;120&#x60;; &#x60;205&#x60; | [Optional] [Defaults to ``] |
| **phoneCallPurposeId** | `string` | Assign a call purpose to the record. &lt;br&gt;&lt;br&gt;Call purposes are unique to your team\&#39;s Apollo account. When you use the &lt;b&gt;Purpose&lt;/b&gt; search filter for calls in the Apollo product, you can find the corresponding call purpose ID in the URL. &lt;br&gt;&lt;br&gt;Examples: &#x60;6095a710bd01d100a506d4cd&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **phoneCallOutcomeId** | `string` | Assign a call outcome to the record. &lt;br&gt;&lt;br&gt;Call outcomes are unique to your team\&#39;s Apollo account. When you use the &lt;b&gt;Disposition&lt;/b&gt; search filter for calls in the Apollo product, you can find the corresponding call outcome ID in the URL. &lt;br&gt;&lt;br&gt;Examples: &#x60;6095a710bd01d100a506d4c5&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **note** | `string` | Add a note to the call record. &lt;br&gt;&lt;br&gt;Example: &#x60;This lead is interested in learning more about our new product line.&#x60; | [Optional] [Defaults to `&#39;&#39;`] |

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


## putPhoneCallsupdate

> putPhoneCallsupdate(id, logged, userId, contactId, accountId, toNumber, fromNumber, status, startTime, endTime, duration, phoneCallPurposeId, phoneCallOutcomeId, note)

Update Call Records

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  Use the Update Call Records endpoint to update your team\&#39;s call records in Apollo.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  CallsApi,
} from '';
import type { PutPhoneCallsupdateRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallsApi(config);

  const body = {
    // string | The Apollo ID for the call record that you want to update. <br><br>To find call record IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-calls#/\" target=\"_blank\">Search for Calls endpoint</a> and identify the `id` value for the call record. <br><br>Example: `6859b0dd828b270021e69648`
    id: id_example,
    // boolean | Set to `true` if you want to create an individual record for the phone call in Apollo. (optional)
    logged: true,
    // Array<string> | Designate the caller in your team\'s Apollo account. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `67e33d527de088000daa60c4` (optional)
    userId: ...,
    // string | Designate the contact that was called. <br><br>Use the <a href=\"https://docs.apollo.io/reference/search-for-contacts#/\" target=\"_blank\">Search for Contacts endpoint</a> to retrieve IDs for all of the contacts within your Apollo account. <br><br>Example: `66e34b81740c50074e3d1bd4` (optional)
    contactId: contactId_example,
    // string | Associate the call with an account. <br><br>Use the <a href=\"https://docs.apollo.io/reference/search-for-accounts#/\" target=\"_blank\">Search for Accounts endpoint</a> to retrieve IDs for all of the accounts within your Apollo account. <br><br>Example: `66e9abf95ac32901b20d1a0d` (optional)
    accountId: accountId_example,
    // string | The phone number that you dialed. <br><br>Example: `5555550164` (optional)
    toNumber: toNumber_example,
    // string | The phone number that dialed you. <br><br>Example: `5555550164` (optional)
    fromNumber: fromNumber_example,
    // string | The status of the phone call. Possible values include: <ul> <li>`queued`</li> <li>`ringing`</li> <li>`in-progress`</li> <li>`completed`</li> <li>`no_answer`</li> <li>`failed`</li> <li>`busy`</li></ul> (optional)
    status: status_example,
    // Date | The time when the call started. <br><br>Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a start time that falls on a different day than you intended. <br><br>The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. <br><br>Example: `2025-02-15T08:10:30Z`; `2025-03-25T10:15:30+05:00Z` (optional)
    startTime: 2013-10-20T19:20:30+01:00,
    // Date | The time when the call ended. <br><br>Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a end time that falls on a different day than you intended. <br><br>The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. <br><br>Example: `2025-05-15T08:10:30Z`; `2025-05-25T10:15:30+05:00Z` (optional)
    endTime: 2013-10-20T19:20:30+01:00,
    // number | The duration of the call in seconds. Do not enter minutes. <br><br>Examples: `120`; `205` (optional)
    duration: 56,
    // string | Assign a call purpose to the record. <br><br>Call purposes are unique to your team\'s Apollo account. When you use the <b>Purpose</b> search filter for calls in the Apollo product, you can find the corresponding call purpose ID in the URL. <br><br>Examples: `6095a710bd01d100a506d4cd` (optional)
    phoneCallPurposeId: phoneCallPurposeId_example,
    // string | Assign a call outcome to the record. <br><br>Call outcomes are unique to your team\'s Apollo account. When you use the <b>Disposition</b> search filter for calls in the Apollo product, you can find the corresponding call outcome ID in the URL. <br><br>Examples: `6095a710bd01d100a506d4c5` (optional)
    phoneCallOutcomeId: phoneCallOutcomeId_example,
    // string | Add a note to the call record. <br><br>Example: `This lead is interested in learning more about our new product line.` (optional)
    note: note_example,
  } satisfies PutPhoneCallsupdateRequest;

  try {
    const data = await api.putPhoneCallsupdate(body);
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
| **id** | `string` | The Apollo ID for the call record that you want to update. &lt;br&gt;&lt;br&gt;To find call record IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-calls#/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Calls endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the call record. &lt;br&gt;&lt;br&gt;Example: &#x60;6859b0dd828b270021e69648&#x60; | [Defaults to `undefined`] |
| **logged** | `boolean` | Set to &#x60;true&#x60; if you want to create an individual record for the phone call in Apollo. | [Optional] [Defaults to `false`] |
| **userId** | `Array<string>` | Designate the caller in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;67e33d527de088000daa60c4&#x60; | [Optional] |
| **contactId** | `string` | Designate the contact that was called. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts#/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; to retrieve IDs for all of the contacts within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **accountId** | `string` | Associate the call with an account. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-accounts#/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Accounts endpoint&lt;/a&gt; to retrieve IDs for all of the accounts within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9abf95ac32901b20d1a0d&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **toNumber** | `string` | The phone number that you dialed. &lt;br&gt;&lt;br&gt;Example: &#x60;5555550164&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **fromNumber** | `string` | The phone number that dialed you. &lt;br&gt;&lt;br&gt;Example: &#x60;5555550164&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **status** | `string` | The status of the phone call. Possible values include: &lt;ul&gt; &lt;li&gt;&#x60;queued&#x60;&lt;/li&gt; &lt;li&gt;&#x60;ringing&#x60;&lt;/li&gt; &lt;li&gt;&#x60;in-progress&#x60;&lt;/li&gt; &lt;li&gt;&#x60;completed&#x60;&lt;/li&gt; &lt;li&gt;&#x60;no_answer&#x60;&lt;/li&gt; &lt;li&gt;&#x60;failed&#x60;&lt;/li&gt; &lt;li&gt;&#x60;busy&#x60;&lt;/li&gt;&lt;/ul&gt; | [Optional] [Defaults to `&#39;&#39;`] |
| **startTime** | `Date` | The time when the call started. &lt;br&gt;&lt;br&gt;Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a start time that falls on a different day than you intended. &lt;br&gt;&lt;br&gt;The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-02-15T08:10:30Z&#x60;; &#x60;2025-03-25T10:15:30+05:00Z&#x60; | [Optional] [Defaults to ``] |
| **endTime** | `Date` | The time when the call ended. &lt;br&gt;&lt;br&gt;Your entry should adhere to the ISO 8601 date-time format. Apollo uses Greenwich Mean Time (GMT) by default. If you do not account for time zone differences, you could add a end time that falls on a different day than you intended. &lt;br&gt;&lt;br&gt;The value you enter can either adhere to GMT, or you can adjust the time manually by specifiying in hours and minutes how much you want to offset GMT. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-05-15T08:10:30Z&#x60;; &#x60;2025-05-25T10:15:30+05:00Z&#x60; | [Optional] [Defaults to ``] |
| **duration** | `number` | The duration of the call in seconds. Do not enter minutes. &lt;br&gt;&lt;br&gt;Examples: &#x60;120&#x60;; &#x60;205&#x60; | [Optional] [Defaults to ``] |
| **phoneCallPurposeId** | `string` | Assign a call purpose to the record. &lt;br&gt;&lt;br&gt;Call purposes are unique to your team\&#39;s Apollo account. When you use the &lt;b&gt;Purpose&lt;/b&gt; search filter for calls in the Apollo product, you can find the corresponding call purpose ID in the URL. &lt;br&gt;&lt;br&gt;Examples: &#x60;6095a710bd01d100a506d4cd&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **phoneCallOutcomeId** | `string` | Assign a call outcome to the record. &lt;br&gt;&lt;br&gt;Call outcomes are unique to your team\&#39;s Apollo account. When you use the &lt;b&gt;Disposition&lt;/b&gt; search filter for calls in the Apollo product, you can find the corresponding call outcome ID in the URL. &lt;br&gt;&lt;br&gt;Examples: &#x60;6095a710bd01d100a506d4c5&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **note** | `string` | Add a note to the call record. &lt;br&gt;&lt;br&gt;Example: &#x60;This lead is interested in learning more about our new product line.&#x60; | [Optional] [Defaults to `&#39;&#39;`] |

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
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

