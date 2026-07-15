# SequencesApi

All URIs are relative to *https://api.apollo.io/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**abortSequence**](SequencesApi.md#abortsequence) | **POST** /emailer_campaigns/{sequence_id}/abort | Deactivate a Sequence |
| [**addContactsToSequence**](SequencesApi.md#addcontactstosequence) | **POST** /emailer_campaigns/{sequence_id}/add_contact_ids | Add Contacts to a Sequence |
| [**approveSequence**](SequencesApi.md#approvesequence) | **POST** /emailer_campaigns/{sequence_id}/approve | Activate a Sequence |
| [**archiveSequence**](SequencesApi.md#archivesequence) | **POST** /emailer_campaigns/{sequence_id}/archive | Archive a Sequence |
| [**createSequence**](SequencesApi.md#createsequenceoperation) | **POST** /sequences | Create a Sequence |
| [**emailerMessagesSearch**](SequencesApi.md#emailermessagessearch) | **GET** /emailer_messages/search | Search for Outreach Emails |
| [**getEmailstats**](SequencesApi.md#getemailstats) | **GET** /emailer_messages/{id}/activities | Check Email Stats |
| [**listEmailSchedules**](SequencesApi.md#listemailschedules) | **GET** /emailer_schedules | List Email Schedules |
| [**searchForSequences**](SequencesApi.md#searchforsequences) | **POST** /emailer_campaigns/search | Search for Sequences |
| [**updateContactStatusSequence**](SequencesApi.md#updatecontactstatussequence) | **POST** /emailer_campaigns/remove_or_stop_contact_ids | Update Contact Status in a Sequence |
| [**updateSequence**](SequencesApi.md#updatesequenceoperation) | **PUT** /sequences/{id} | Update a Sequence |



## abortSequence

> ApproveSequence200Response abortSequence(sequenceId)

Deactivate a Sequence

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Deactivate a Sequence endpoint to stop an active sequence. Once deactivated, the sequence pauses all contacts and stops sending emails.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { AbortSequenceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // string | The Apollo ID for the sequence that you want to deactivate. <br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the <code>id</code> value for the sequence. <br><br>Example: <code>66e9e215ece19801b219997f</code>
    sequenceId: sequenceId_example,
  } satisfies AbortSequenceRequest;

  try {
    const data = await api.abortSequence(body);
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
| **sequenceId** | `string` | The Apollo ID for the sequence that you want to deactivate. &lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &lt;code&gt;id&lt;/code&gt; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &lt;code&gt;66e9e215ece19801b219997f&lt;/code&gt; | [Defaults to `undefined`] |

### Return type

[**ApproveSequence200Response**](ApproveSequence200Response.md)

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


## addContactsToSequence

> AddContactsToSequence200Response addContactsToSequence(sequenceId, emailerCampaignId, sendEmailFromEmailAccountId, contactIds, labelNames, sendEmailFromEmailAddress, sequenceNoEmail, sequenceUnverifiedEmail, sequenceJobChange, sequenceActiveInOtherCampaigns, sequenceFinishedInOtherCampaigns, sequenceSameCompanyInSameCampaign, contactsWithoutOwnershipPermission, addIfInQueue, contactVerificationSkipped, userId, status, autoUnpauseAt)

Add Contacts to a Sequence

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Add Contacts to a Sequence endpoint to add contacts to the existing sequences in your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;A contact is a person that your team has explicitly added to your database. Only contacts can be added to sequences. To enrich a person\&#39;s data, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/people-enrichment\&quot;&gt;People Enrichment endpoint&lt;/a&gt;. Then, to add the person as a contact in your database, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-a-contact\&quot;&gt;Create a Contact endpoint&lt;/a&gt;.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { AddContactsToSequenceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // string | The Apollo ID for the sequence to which you want to add contacts. <br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the `id` value for the sequence. <br><br>Example: `66e9e215ece19801b219997f`
    sequenceId: sequenceId_example,
    // string | The same ID as the `sequence_id`. <br><br>Example: `66e9e215ece19801b219997f`
    emailerCampaignId: emailerCampaignId_example,
    // AddContactsToSequenceSendEmailFromEmailAccountIdParameter | The Apollo ID(s) for the email account(s) used to send to contacts you add to the sequence. Accepts either one id as a string, or multiple ids as an array of strings (multi-mailbox / rotation). To find email account IDs, call the <a href=\"https://docs.apollo.io/reference/get-a-list-of-email-accounts\" target=\"_blank\">Get a List of Email Accounts endpoint</a> and identify the `id` value for each email account. <br><br>Examples: `6633baaece5fbd01c791d7ca` (string) or `[\"6633baaece5fbd01c791d7ca\", \"6633baaece5fbd01c791d7cb\"]` (array).
    sendEmailFromEmailAccountId: ...,
    // Array<string> | The Apollo IDs for the contacts that you want to add to the sequence. <br><br>To find contact IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-contacts\" target=\"_blank\">Search for Contacts endpoint</a> and identify the `id` value for the contact. <br><br>Example: `66e34b81740c50074e3d1bd4`<br><br>Note: Either `contact_ids[]` or `label_names[]` must be provided. (optional)
    contactIds: ...,
    // Array<string> | Alternative to `contact_ids[]`. Array of label names to identify contacts to add to the sequence. Contacts with these labels will be added to the sequence. <br><br>Note: Either `contact_ids[]` or `label_names[]` must be provided. (optional)
    labelNames: ...,
    // string | Optional specific email address to send from within the email account. (optional)
    sendEmailFromEmailAddress: sendEmailFromEmailAddress_example,
    // boolean | Set to `true` if you want to add contacts to the sequence even if they do not have an email address. (optional)
    sequenceNoEmail: true,
    // boolean | Set to `true` if you want to add contacts to the sequence if they have an unverified email address. (optional)
    sequenceUnverifiedEmail: true,
    // boolean | Set to `true` if you want to add contacts to the sequence even if they have recently changed jobs. (optional)
    sequenceJobChange: true,
    // boolean | Set to `true` if you want to add contacts to the sequence even if they have been added to other sequences. This parameter does not differentiate between active and paused sequences. (optional)
    sequenceActiveInOtherCampaigns: true,
    // boolean | Set to `true` if you want to add contacts to the sequence if they have been marked as `finished` in another sequence. (optional)
    sequenceFinishedInOtherCampaigns: true,
    // boolean | Set to `true` if you want to add contacts to the sequence even if other contacts from the same company are already in the sequence. (optional)
    sequenceSameCompanyInSameCampaign: true,
    // boolean | Set to `true` if you want to add contacts even if you don\'t have ownership permission for them. (optional)
    contactsWithoutOwnershipPermission: true,
    // boolean | Set to `true` if you want to add contacts even if they are currently in the queue for processing. (optional)
    addIfInQueue: true,
    // boolean | Set to `true` if you want to skip contact verification during the addition process. (optional)
    contactVerificationSkipped: true,
    // string | The ID for the user in your team\'s Apollo account. <br><br>This is the user taking the action to add contacts to a sequence. When the sequence is updated, the activity log shows the user that added the contacts. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `66302798d03b9601c7934ebf` (optional)
    userId: userId_example,
    // 'active' | 'paused' | Initial status for added contacts. When set to `paused` along with `auto_unpause_at`, enables scheduled addition of contacts. (optional)
    status: status_example,
    // Date | DateTime when paused contacts should be automatically unpaused. Must be used with `status=paused`. Format: ISO 8601 datetime string. (optional)
    autoUnpauseAt: 2013-10-20T19:20:30+01:00,
  } satisfies AddContactsToSequenceRequest;

  try {
    const data = await api.addContactsToSequence(body);
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
| **sequenceId** | `string` | The Apollo ID for the sequence to which you want to add contacts. &lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9e215ece19801b219997f&#x60; | [Defaults to `undefined`] |
| **emailerCampaignId** | `string` | The same ID as the &#x60;sequence_id&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9e215ece19801b219997f&#x60; | [Defaults to `undefined`] |
| **sendEmailFromEmailAccountId** | [](.md) | The Apollo ID(s) for the email account(s) used to send to contacts you add to the sequence. Accepts either one id as a string, or multiple ids as an array of strings (multi-mailbox / rotation). To find email account IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-email-accounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Email Accounts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for each email account. &lt;br&gt;&lt;br&gt;Examples: &#x60;6633baaece5fbd01c791d7ca&#x60; (string) or &#x60;[\&quot;6633baaece5fbd01c791d7ca\&quot;, \&quot;6633baaece5fbd01c791d7cb\&quot;]&#x60; (array). | [Defaults to `undefined`] |
| **contactIds** | `Array<string>` | The Apollo IDs for the contacts that you want to add to the sequence. &lt;br&gt;&lt;br&gt;To find contact IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the contact. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60;&lt;br&gt;&lt;br&gt;Note: Either &#x60;contact_ids[]&#x60; or &#x60;label_names[]&#x60; must be provided. | [Optional] |
| **labelNames** | `Array<string>` | Alternative to &#x60;contact_ids[]&#x60;. Array of label names to identify contacts to add to the sequence. Contacts with these labels will be added to the sequence. &lt;br&gt;&lt;br&gt;Note: Either &#x60;contact_ids[]&#x60; or &#x60;label_names[]&#x60; must be provided. | [Optional] |
| **sendEmailFromEmailAddress** | `string` | Optional specific email address to send from within the email account. | [Optional] [Defaults to `undefined`] |
| **sequenceNoEmail** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts to the sequence even if they do not have an email address. | [Optional] [Defaults to `false`] |
| **sequenceUnverifiedEmail** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts to the sequence if they have an unverified email address. | [Optional] [Defaults to `false`] |
| **sequenceJobChange** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts to the sequence even if they have recently changed jobs. | [Optional] [Defaults to `false`] |
| **sequenceActiveInOtherCampaigns** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts to the sequence even if they have been added to other sequences. This parameter does not differentiate between active and paused sequences. | [Optional] [Defaults to `false`] |
| **sequenceFinishedInOtherCampaigns** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts to the sequence if they have been marked as &#x60;finished&#x60; in another sequence. | [Optional] [Defaults to `false`] |
| **sequenceSameCompanyInSameCampaign** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts to the sequence even if other contacts from the same company are already in the sequence. | [Optional] [Defaults to `false`] |
| **contactsWithoutOwnershipPermission** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts even if you don\&#39;t have ownership permission for them. | [Optional] [Defaults to `false`] |
| **addIfInQueue** | `boolean` | Set to &#x60;true&#x60; if you want to add contacts even if they are currently in the queue for processing. | [Optional] [Defaults to `false`] |
| **contactVerificationSkipped** | `boolean` | Set to &#x60;true&#x60; if you want to skip contact verification during the addition process. | [Optional] [Defaults to `false`] |
| **userId** | `string` | The ID for the user in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;This is the user taking the action to add contacts to a sequence. When the sequence is updated, the activity log shows the user that added the contacts. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66302798d03b9601c7934ebf&#x60; | [Optional] [Defaults to `undefined`] |
| **status** | `active`, `paused` | Initial status for added contacts. When set to &#x60;paused&#x60; along with &#x60;auto_unpause_at&#x60;, enables scheduled addition of contacts. | [Optional] [Defaults to `undefined`] [Enum: active, paused] |
| **autoUnpauseAt** | `Date` | DateTime when paused contacts should be automatically unpaused. Must be used with &#x60;status&#x3D;paused&#x60;. Format: ISO 8601 datetime string. | [Optional] [Defaults to `undefined`] |

### Return type

[**AddContactsToSequence200Response**](AddContactsToSequence200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/plain`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **403** | Forbidden - Master API key required |  -  |
| **422** | Unprocessable Entity - Validation errors |  -  |
| **429** | Too Many Requests - Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## approveSequence

> ApproveSequence200Response approveSequence(sequenceId)

Activate a Sequence

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Activate a Sequence endpoint to start an inactive sequence. Once activated, the sequence begins sending emails to its contacts on the configured schedule. The sequence must have at least one step configured before it can be activated.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { ApproveSequenceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // string | The Apollo ID for the sequence that you want to activate. <br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the <code>id</code> value for the sequence. <br><br>Example: <code>66e9e215ece19801b219997f</code>
    sequenceId: sequenceId_example,
  } satisfies ApproveSequenceRequest;

  try {
    const data = await api.approveSequence(body);
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
| **sequenceId** | `string` | The Apollo ID for the sequence that you want to activate. &lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &lt;code&gt;id&lt;/code&gt; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &lt;code&gt;66e9e215ece19801b219997f&lt;/code&gt; | [Defaults to `undefined`] |

### Return type

[**ApproveSequence200Response**](ApproveSequence200Response.md)

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


## archiveSequence

> ArchiveSequence200Response archiveSequence(sequenceId)

Archive a Sequence

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Archive a Sequence endpoint to archive a sequence. Archiving a sequence marks it as inactive and finishes all contacts currently in the sequence. You must be the owner of the sequence or have full access sharing permissions to archive it.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { ArchiveSequenceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // string | The Apollo ID for the sequence that you want to archive. <br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the <code>id</code> value for the sequence. <br><br>Example: <code>66e9e215ece19801b219997f</code>
    sequenceId: sequenceId_example,
  } satisfies ArchiveSequenceRequest;

  try {
    const data = await api.archiveSequence(body);
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
| **sequenceId** | `string` | The Apollo ID for the sequence that you want to archive. &lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &lt;code&gt;id&lt;/code&gt; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &lt;code&gt;66e9e215ece19801b219997f&lt;/code&gt; | [Defaults to `undefined`] |

### Return type

[**ArchiveSequence200Response**](ArchiveSequence200Response.md)

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


## createSequence

> CreateSequence200Response createSequence(createSequenceRequest)

Create a Sequence

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Create a Sequence endpoint to create a new sequence in your team\&#39;s Apollo account, including its steps and email templates.&lt;br&gt;&lt;br&gt;To create a sequence with steps, add the &#x60;emailer_steps&#x60; array to the request body. Each email step (&#x60;auto_email&#x60;, &#x60;manual_email&#x60;) can include one or more &#x60;emailer_touches&#x60; (email variants); adding more than one touch to a step creates an A/B test, which requires a plan with A/B testing access.&lt;br&gt;&lt;br&gt;To activate the sequence immediately after creation, set &#x60;active&#x60; to &#x60;true&#x60;. Email touches only send if their &#x60;status&#x60; is &#x60;approved&#x60;, and a touch can only be approved if its template has a non-empty body.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { CreateSequenceOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // CreateSequenceRequest
    createSequenceRequest: {"name":"Q3 Outbound Outreach","permissions":"team_can_use","active":true,"emailer_schedule_id":"66e9e215ece19801b2199900","label_names":["Outbound"],"emailer_steps":[{"type":"auto_email","wait_time":0,"wait_mode":"minute","emailer_touches":[{"type":"new_thread","status":"approved","include_signature":true,"emailer_template":{"subject":"Quick question, {{first_name}}","body_html":"<p>Hi {{first_name}},</p><p>I noticed {{company}} is growing quickly...</p>"}}]},{"type":"auto_email","wait_time":3,"wait_mode":"day","emailer_touches":[{"type":"reply_to_thread","status":"approved","include_signature":true,"emailer_template":{"subject":"","body_html":"<p>Hi {{first_name}}, just floating this back to the top of your inbox.</p>"}}]}]},
  } satisfies CreateSequenceOperationRequest;

  try {
    const data = await api.createSequence(body);
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
| **createSequenceRequest** | [CreateSequenceRequest](CreateSequenceRequest.md) |  | |

### Return type

[**CreateSequence200Response**](CreateSequence200Response.md)

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


## emailerMessagesSearch

> emailerMessagesSearch(emailerMessageStats, emailerMessageReplyClasses, userIds, emailAccountIdAndAliases, emailerCampaignIds, notEmailerCampaignIds, emailerMessageDateRangeMode, emailerMessageDateRangeMax, emailerMessageDateRangeMin, notSentReasonCds, qKeywords, page, perPage)

Search for Outreach Emails

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Search for Outreach Emails endpoint to find emails that your team has created and sent as part of Apollo sequences.&lt;br&gt;&lt;br&gt;To protect Apollo\&#39;s performance for all users, this endpoint has a display limit of 50,000 records (100 records per page, up to 500 pages). Add more filters to narrow your search results as much as possible.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { EmailerMessagesSearchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // Array<string> | Find emails based on their current status, such as whether they were delivered or opened. You can add multiple statuses. <br><br>Possible values include: <ul> <li> `delivered` </li> <li> `scheduled` </li> <li> `drafted` </li> <li> `not_opened` </li> <li> `opened` </li> <li> `clicked` </li> <li> `unsubscribed` </li> <li> `demoed` </li> <li> `bounced` </li> <li> `spam_blocked` </li> <li> `failed_other` </li> </ul> (optional)
    emailerMessageStats: ...,
    // Array<string> | Find emails based on the response sentiment of the recipient. This can include the recipient expressing interest in meeting or having a follow-up question. You can add multiple values.<br><br>Possible values include: <ul> <li> `willing_to_meet` </li> <li> `follow_up_question` </li> <li> `person_referral` </li> <li> `out_of_office` </li> <li> `already_left_company_or_not_right_person` </li> <li> `not_interested` </li> <li> `unsubscribe` </li> <li> `none_of_the_above` </li> </ul> (optional)
    emailerMessageReplyClasses: ...,
    // Array<string> | Find emails sent by specific users in your team\'s Apollo account. You can add multiple users. <br><br>Use the <a href=\"https://docs.apollo.io/reference/get-a-list-of-users\" target=\"_blank\">Get a List of Users endpoint</a> to retrieve IDs for all of the users within your Apollo account. <br><br>Example: `66302798d03b9601c7934ebf` (optional)
    userIds: ...,
    // string |  (optional)
    emailAccountIdAndAliases: emailAccountIdAndAliases_example,
    // Array<string> | Search for emails that are included in specific sequences in your Apollo account. You can search multiple sequences. Any sequence not included in this parameter will be exclude from search results.<br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the `id` value for the sequence. <br><br>Example: `66e9e215ece19801b219997f` (optional)
    emailerCampaignIds: ...,
    // Array<string> | Exclude emails from specific sequences in your Apollo account. You can exclude multiple sequences. Any sequence not excluded using this parameter will be included in search results.<br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the `id` value for the sequence. <br><br>Example: `66e9e215ece19801b219997f` (optional)
    notEmailerCampaignIds: ...,
    // string | Use this parameter in combination with the `emailer_message_date_range[max]` and `emailer_message_date_range[min]` parameters. Find emails based on 1 of the following options: <ul> <li> `due_at`: When emails are scheduled to be delivered. </li> <li> `completed_at`: When emails were delivered. </li> </ul> (optional)
    emailerMessageDateRangeMode: emailerMessageDateRangeMode_example,
    // Date | Set the upper bound of the date range you want to search. <br><br>Use this parameter in combination with the `emailer_message_date_range[min]` and `emailer_message_date_range_mode` parameters. This date should fall after the `emailer_message_date_range[min]` date. <br><br>The date should be formatted as `YYYY-MM-DD`. <br><br>Example: `2025-10-30` (optional)
    emailerMessageDateRangeMax: 2013-10-20,
    // Date | Set the lower bound of the date range you want to search. <br><br>Use this parameter in combination with the `emailer_message_date_range[max]` and `emailer_message_date_range_mode` parameters. This date should fall before the `emailer_message_date_range[max]` date. <br><br>The date should be formatted as `YYYY-MM-DD`. <br><br>Example: `2025-10-30` (optional)
    emailerMessageDateRangeMin: 2013-10-20,
    // Array<string> | Find emails based on the reason they were not sent. You can add multiple values.<br><br>Possible values include: <ul> <li> `contact_stage_safeguard` </li> <li> `same_account_reply` </li> <li> `account_stage_safeguard` </li> <li> `email_unverified` </li> <li> `snippets_missing` </li> <li> `personalized_opener_missing` </li> <li> `thread_reply_original_email_missing` </li> <li> `no_active_email_account` </li> <li> `email_format_invalid` </li> <li> `ownership_permission` </li> <li> `email_service_provider_delivery_failure` </li> <li> `sendgrid_dropped_email` </li> <li> `mailgun_dropped_email` </li> <li> `gdpr_compliance` </li> <li> `not_valid_hard_bounce_detected` <li> `other_safeguard` </li> <li> `new_job_change_detected` </li> <li> `email_on_global_bounce_list` </li> </ul> (optional)
    notSentReasonCds: ...,
    // string | Add keywords to narrow the search of the emails in your team\'s Apollo account. <br><br>Keywords should directly match at least part of an email\'s content. For example, searching the keyword `James` might return emails that were sent by `James Smith`. <br><br>Example: `Jane` (optional)
    qKeywords: qKeywords_example,
    // number | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: 56,
    // number | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: 56,
  } satisfies EmailerMessagesSearchRequest;

  try {
    const data = await api.emailerMessagesSearch(body);
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
| **emailerMessageStats** | `Array<string>` | Find emails based on their current status, such as whether they were delivered or opened. You can add multiple statuses. &lt;br&gt;&lt;br&gt;Possible values include: &lt;ul&gt; &lt;li&gt; &#x60;delivered&#x60; &lt;/li&gt; &lt;li&gt; &#x60;scheduled&#x60; &lt;/li&gt; &lt;li&gt; &#x60;drafted&#x60; &lt;/li&gt; &lt;li&gt; &#x60;not_opened&#x60; &lt;/li&gt; &lt;li&gt; &#x60;opened&#x60; &lt;/li&gt; &lt;li&gt; &#x60;clicked&#x60; &lt;/li&gt; &lt;li&gt; &#x60;unsubscribed&#x60; &lt;/li&gt; &lt;li&gt; &#x60;demoed&#x60; &lt;/li&gt; &lt;li&gt; &#x60;bounced&#x60; &lt;/li&gt; &lt;li&gt; &#x60;spam_blocked&#x60; &lt;/li&gt; &lt;li&gt; &#x60;failed_other&#x60; &lt;/li&gt; &lt;/ul&gt; | [Optional] |
| **emailerMessageReplyClasses** | `Array<string>` | Find emails based on the response sentiment of the recipient. This can include the recipient expressing interest in meeting or having a follow-up question. You can add multiple values.&lt;br&gt;&lt;br&gt;Possible values include: &lt;ul&gt; &lt;li&gt; &#x60;willing_to_meet&#x60; &lt;/li&gt; &lt;li&gt; &#x60;follow_up_question&#x60; &lt;/li&gt; &lt;li&gt; &#x60;person_referral&#x60; &lt;/li&gt; &lt;li&gt; &#x60;out_of_office&#x60; &lt;/li&gt; &lt;li&gt; &#x60;already_left_company_or_not_right_person&#x60; &lt;/li&gt; &lt;li&gt; &#x60;not_interested&#x60; &lt;/li&gt; &lt;li&gt; &#x60;unsubscribe&#x60; &lt;/li&gt; &lt;li&gt; &#x60;none_of_the_above&#x60; &lt;/li&gt; &lt;/ul&gt; | [Optional] |
| **userIds** | `Array<string>` | Find emails sent by specific users in your team\&#39;s Apollo account. You can add multiple users. &lt;br&gt;&lt;br&gt;Use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/get-a-list-of-users\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Get a List of Users endpoint&lt;/a&gt; to retrieve IDs for all of the users within your Apollo account. &lt;br&gt;&lt;br&gt;Example: &#x60;66302798d03b9601c7934ebf&#x60; | [Optional] |
| **emailAccountIdAndAliases** | `string` |  | [Optional] [Defaults to `&#39;&#39;`] |
| **emailerCampaignIds** | `Array<string>` | Search for emails that are included in specific sequences in your Apollo account. You can search multiple sequences. Any sequence not included in this parameter will be exclude from search results.&lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9e215ece19801b219997f&#x60; | [Optional] |
| **notEmailerCampaignIds** | `Array<string>` | Exclude emails from specific sequences in your Apollo account. You can exclude multiple sequences. Any sequence not excluded using this parameter will be included in search results.&lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9e215ece19801b219997f&#x60; | [Optional] |
| **emailerMessageDateRangeMode** | `string` | Use this parameter in combination with the &#x60;emailer_message_date_range[max]&#x60; and &#x60;emailer_message_date_range[min]&#x60; parameters. Find emails based on 1 of the following options: &lt;ul&gt; &lt;li&gt; &#x60;due_at&#x60;: When emails are scheduled to be delivered. &lt;/li&gt; &lt;li&gt; &#x60;completed_at&#x60;: When emails were delivered. &lt;/li&gt; &lt;/ul&gt; | [Optional] [Defaults to `&#39;&#39;`] |
| **emailerMessageDateRangeMax** | `Date` | Set the upper bound of the date range you want to search. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;emailer_message_date_range[min]&#x60; and &#x60;emailer_message_date_range_mode&#x60; parameters. This date should fall after the &#x60;emailer_message_date_range[min]&#x60; date. &lt;br&gt;&lt;br&gt;The date should be formatted as &#x60;YYYY-MM-DD&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-10-30&#x60; | [Optional] [Defaults to ``] |
| **emailerMessageDateRangeMin** | `Date` | Set the lower bound of the date range you want to search. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;emailer_message_date_range[max]&#x60; and &#x60;emailer_message_date_range_mode&#x60; parameters. This date should fall before the &#x60;emailer_message_date_range[max]&#x60; date. &lt;br&gt;&lt;br&gt;The date should be formatted as &#x60;YYYY-MM-DD&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;2025-10-30&#x60; | [Optional] [Defaults to ``] |
| **notSentReasonCds** | `Array<string>` | Find emails based on the reason they were not sent. You can add multiple values.&lt;br&gt;&lt;br&gt;Possible values include: &lt;ul&gt; &lt;li&gt; &#x60;contact_stage_safeguard&#x60; &lt;/li&gt; &lt;li&gt; &#x60;same_account_reply&#x60; &lt;/li&gt; &lt;li&gt; &#x60;account_stage_safeguard&#x60; &lt;/li&gt; &lt;li&gt; &#x60;email_unverified&#x60; &lt;/li&gt; &lt;li&gt; &#x60;snippets_missing&#x60; &lt;/li&gt; &lt;li&gt; &#x60;personalized_opener_missing&#x60; &lt;/li&gt; &lt;li&gt; &#x60;thread_reply_original_email_missing&#x60; &lt;/li&gt; &lt;li&gt; &#x60;no_active_email_account&#x60; &lt;/li&gt; &lt;li&gt; &#x60;email_format_invalid&#x60; &lt;/li&gt; &lt;li&gt; &#x60;ownership_permission&#x60; &lt;/li&gt; &lt;li&gt; &#x60;email_service_provider_delivery_failure&#x60; &lt;/li&gt; &lt;li&gt; &#x60;sendgrid_dropped_email&#x60; &lt;/li&gt; &lt;li&gt; &#x60;mailgun_dropped_email&#x60; &lt;/li&gt; &lt;li&gt; &#x60;gdpr_compliance&#x60; &lt;/li&gt; &lt;li&gt; &#x60;not_valid_hard_bounce_detected&#x60; &lt;li&gt; &#x60;other_safeguard&#x60; &lt;/li&gt; &lt;li&gt; &#x60;new_job_change_detected&#x60; &lt;/li&gt; &lt;li&gt; &#x60;email_on_global_bounce_list&#x60; &lt;/li&gt; &lt;/ul&gt; | [Optional] |
| **qKeywords** | `string` | Add keywords to narrow the search of the emails in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;Keywords should directly match at least part of an email\&#39;s content. For example, searching the keyword &#x60;James&#x60; might return emails that were sent by &#x60;James Smith&#x60;. &lt;br&gt;&lt;br&gt;Example: &#x60;Jane&#x60; | [Optional] [Defaults to `&#39;&#39;`] |
| **page** | `number` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `number` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `undefined`] |

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
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEmailstats

> getEmailstats(id)

Check Email Stats

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Check Email Stats endpoint to review the complete details for an email sent as part of an Apollo sequence. This includes the contents of the emails, stats related to the email such as opens and clicks, and details about the contact that received the email.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { GetEmailstatsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // string | The ID for the email you want to view. <br><br>Each outreach email in Apollo is assigned a unique ID. To find email IDs, call the <a  href=\"https://docs.apollo.io/reference/search-for-outreach-emails\" target=\"_blank\">Search for Outreach Emails endpoint</a> and identify the `id` value for the email. <br><br>Example: `684b2203a2ce950021cbf730`
    id: id_example,
  } satisfies GetEmailstatsRequest;

  try {
    const data = await api.getEmailstats(body);
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
| **id** | `string` | The ID for the email you want to view. &lt;br&gt;&lt;br&gt;Each outreach email in Apollo is assigned a unique ID. To find email IDs, call the &lt;a  href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-outreach-emails\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Outreach Emails endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the email. &lt;br&gt;&lt;br&gt;Example: &#x60;684b2203a2ce950021cbf730&#x60; | [Defaults to `undefined`] |

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
| **422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listEmailSchedules

> ListEmailSchedules200Response listEmailSchedules()

List Email Schedules

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409477927309-Configure-a-Sequence-Sending-Schedule\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sending schedules&lt;/a&gt; control the days and times that Apollo sends emails for your sequences.&lt;br&gt;&lt;br&gt;Use the List Email Schedules endpoint to retrieve every sending schedule that has been created for your team\&#39;s Apollo account, including each schedule\&#39;s ID, time zone, and weekly sending windows.&lt;br&gt;&lt;br&gt;Use a schedule\&#39;s &#x60;id&#x60; as the &#x60;emailer_schedule_id&#x60; when you &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-sequence\&quot;&gt;create a sequence&lt;/a&gt; or &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/update-sequence\&quot;&gt;update a sequence&lt;/a&gt; to control when that sequence\&#39;s emails are sent.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { ListEmailSchedulesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  try {
    const data = await api.listEmailSchedules();
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

[**ListEmailSchedules200Response**](ListEmailSchedules200Response.md)

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


## searchForSequences

> SearchForSequences200Response searchForSequences(qName, page, perPage)

Search for Sequences

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Search for Sequences endpoint to search for the sequences that have been created for your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { SearchForSequencesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // string | Add keywords to narrow the search of the sequences in your team\'s Apollo account. <br><br>Keywords should directly match at least part of a sequence\'s name. For example, searching the keyword `marketing` might return the result `NY Marketing Sequence`, but not `NY Marketer Conference 2025 attendees`. <br><br>This parameter only searches sequence names, not other sequence fields. <br><br>Example: `marketing conference attendees` (optional)
    qName: qName_example,
    // string | The page number of the Apollo data that you want to retrieve. <br><br>Use this parameter in combination with the `per_page` parameter to make search results for navigable and improve the performance of the endpoint. <br><br>Example: `4` (optional)
    page: page_example,
    // string | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\'s performance. <br><br>Use the `page` parameter to search the different pages of data. <br><br>Example: `10` (optional)
    perPage: perPage_example,
  } satisfies SearchForSequencesRequest;

  try {
    const data = await api.searchForSequences(body);
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
| **qName** | `string` | Add keywords to narrow the search of the sequences in your team\&#39;s Apollo account. &lt;br&gt;&lt;br&gt;Keywords should directly match at least part of a sequence\&#39;s name. For example, searching the keyword &#x60;marketing&#x60; might return the result &#x60;NY Marketing Sequence&#x60;, but not &#x60;NY Marketer Conference 2025 attendees&#x60;. &lt;br&gt;&lt;br&gt;This parameter only searches sequence names, not other sequence fields. &lt;br&gt;&lt;br&gt;Example: &#x60;marketing conference attendees&#x60; | [Optional] [Defaults to `undefined`] |
| **page** | `string` | The page number of the Apollo data that you want to retrieve. &lt;br&gt;&lt;br&gt;Use this parameter in combination with the &#x60;per_page&#x60; parameter to make search results for navigable and improve the performance of the endpoint. &lt;br&gt;&lt;br&gt;Example: &#x60;4&#x60; | [Optional] [Defaults to `undefined`] |
| **perPage** | `string` | The number of search results that should be returned for each page. Limiting the number of results per page improves the endpoint\&#39;s performance. &lt;br&gt;&lt;br&gt;Use the &#x60;page&#x60; parameter to search the different pages of data. &lt;br&gt;&lt;br&gt;Example: &#x60;10&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchForSequences200Response**](SearchForSequences200Response.md)

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


## updateContactStatusSequence

> UpdateContactStatusSequence200Response updateContactStatusSequence(emailerCampaignIds, contactIds, mode)

Update Contact Status in a Sequence

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Update Contact Status in a Sequence endpoint to either mark contacts as having &#x60;finished&#x60; a sequence, or to remove them from a sequence entirely.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { UpdateContactStatusSequenceRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // Array<string> | The Apollo IDs for the sequences that you want to update. If you add multiple sequences, you will update the status of the contacts across the chosen sequences. <br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the `id` value for the sequence. <br><br>Example: `66e9e215ece19801b219997f`
    emailerCampaignIds: ...,
    // Array<string> | The Apollo IDs for the contacts in the sequences. These are the contacts whose sequence status you want to update. <br><br>To find contact IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-contacts\" target=\"_blank\">Search for Contacts endpoint</a> and identify the `id` value for the contact. <br><br>Example: `66e34b81740c50074e3d1bd4`
    contactIds: ...,
    // string | Choose 1 of the following options to update the sequence status of the contacts:   <ul> <li> `mark_as_finished`: Mark the contacts as having finished the sequence. </li> <li> `remove`: Remove the contacts from the sequence. </li> <li> `stop`: Indicate that the contacts progress in the sequence has halted.  </li> </ul>
    mode: mode_example,
  } satisfies UpdateContactStatusSequenceRequest;

  try {
    const data = await api.updateContactStatusSequence(body);
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
| **emailerCampaignIds** | `Array<string>` | The Apollo IDs for the sequences that you want to update. If you add multiple sequences, you will update the status of the contacts across the chosen sequences. &lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &#x60;66e9e215ece19801b219997f&#x60; | |
| **contactIds** | `Array<string>` | The Apollo IDs for the contacts in the sequences. These are the contacts whose sequence status you want to update. &lt;br&gt;&lt;br&gt;To find contact IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Contacts endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the contact. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | |
| **mode** | `string` | Choose 1 of the following options to update the sequence status of the contacts:   &lt;ul&gt; &lt;li&gt; &#x60;mark_as_finished&#x60;: Mark the contacts as having finished the sequence. &lt;/li&gt; &lt;li&gt; &#x60;remove&#x60;: Remove the contacts from the sequence. &lt;/li&gt; &lt;li&gt; &#x60;stop&#x60;: Indicate that the contacts progress in the sequence has halted.  &lt;/li&gt; &lt;/ul&gt; | [Defaults to `undefined`] |

### Return type

[**UpdateContactStatusSequence200Response**](UpdateContactStatusSequence200Response.md)

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


## updateSequence

> UpdateSequence200Response updateSequence(id, updateSequenceRequest)

Update a Sequence

This endpoint doesn\&#39;t consume Apollo credits. Learn more about [API pricing and credits](https://docs.apollo.io/docs/api-pricing).  &lt;a href&#x3D;\&quot;https://knowledge.apollo.io/hc/en-us/articles/4409237165837-Sequences-Overview\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sequences&lt;/a&gt; are outreach campaigns that sales teams use to reach out to contacts over a planned period of time.&lt;br&gt;&lt;br&gt;Use the Update a Sequence endpoint to update an existing sequence (emailer campaign) in your team\&#39;s Apollo account.&lt;br&gt;&lt;br&gt;You can update sequence-level settings, such as the name, active state, schedule, and sending limits, as well as the sequence\&#39;s steps and the email touches within each step. &lt;br&gt;&lt;br&gt;To turn a sequence on or off, set the &#x60;active&#x60; field. Passing &#x60;emailer_steps&#x60; will create, update, reorder, or remove steps and their touches based on the IDs you provide.&lt;br&gt;&lt;br&gt;To create a new sequence instead, use the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/create-a-sequence\&quot;&gt;Create a Sequence endpoint&lt;/a&gt;.&lt;br&gt;&lt;br&gt;This endpoint requires a master API key. If you call the endpoint without a master key, you receive a &#x60;403&#x60; response. Check out &lt;a href&#x3D;\&quot;https://docs.apollo.io/docs/create-api-key\&quot;&gt;Create an API Key&lt;/a&gt; to learn how to create a master key.

### Example

```ts
import {
  Configuration,
  SequencesApi,
} from '';
import type { UpdateSequenceOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: apiKey
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SequencesApi(config);

  const body = {
    // string | The Apollo ID for the sequence that you want to update. <br><br>To find sequence IDs, call the <a href=\"https://docs.apollo.io/reference/search-for-sequences\" target=\"_blank\">Search for Sequences endpoint</a> and identify the `id` value for the sequence. <br><br>Example: `66e34b81740c50074e3d1bd4`
    id: id_example,
    // UpdateSequenceRequest (optional)
    updateSequenceRequest: ...,
  } satisfies UpdateSequenceOperationRequest;

  try {
    const data = await api.updateSequence(body);
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
| **id** | `string` | The Apollo ID for the sequence that you want to update. &lt;br&gt;&lt;br&gt;To find sequence IDs, call the &lt;a href&#x3D;\&quot;https://docs.apollo.io/reference/search-for-sequences\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Search for Sequences endpoint&lt;/a&gt; and identify the &#x60;id&#x60; value for the sequence. &lt;br&gt;&lt;br&gt;Example: &#x60;66e34b81740c50074e3d1bd4&#x60; | [Defaults to `undefined`] |
| **updateSequenceRequest** | [UpdateSequenceRequest](UpdateSequenceRequest.md) |  | [Optional] |

### Return type

[**UpdateSequence200Response**](UpdateSequence200Response.md)

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
| **404** | 404 |  -  |
| **422** | 422 |  -  |
| **429** | 429 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

