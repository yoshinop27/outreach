
# GetAListOfUsers200ResponseUsersInner


## Properties

Name | Type
------------ | -------------
`id` | string
`teamId` | string
`firstName` | any
`lastName` | any
`title` | any
`email` | string
`createdAt` | string
`creditLimit` | any
`directDialCreditLimit` | any
`exportCreditLimit` | any
`aiCreditLimit` | any
`salesforceAccount` | any
`deleted` | boolean
`optOutHtmlTemplate` | string
`name` | string
`referralCode` | string
`passwordNeedsReset` | boolean
`salesforceId` | any
`defaultCockpitLayout` | any
`defaultAccountOverviewLayoutId` | any
`defaultContactOverviewLayoutId` | any
`defaultPersonOverviewLayoutId` | any
`defaultOrganizationOverviewLayoutId` | any
`defaultOpportunityOverviewLayoutId` | any
`defaultHomeOverviewLayoutId` | any
`bridgeCalls` | boolean
`bridgePhoneNumber` | any
`bridgeIncomingCalls` | boolean
`bridgeIncomingPhoneNumber` | any
`currentEmailVerified` | boolean
`recordCalls` | boolean
`salesforceInstanceUrl` | any
`permissionSetId` | string
`defaultUseLocalNumbers` | boolean
`disableEmailLinking` | any
`syncSalesforceId` | any
`syncCrmId` | any
`zpContactId` | string
`chromeExtensionDownloaded` | boolean
`zpIsSuperAnalyticsUser` | any
`emailOauthSigninOnly` | boolean
`notificationLastCreatedAt` | any
`crmRequestedToIntegrate` | any
`hasInvitedUser` | boolean
`hasUsedEnrichment` | boolean
`hasUploadedCsv` | boolean
`hasHiddenOnboarding` | boolean
`notificationLastReadAt` | any
`dailyDataRequestEmail` | boolean
`dataRequestEmails` | boolean
`dailyTaskEmail` | boolean
`freeDataCreditsEmail` | boolean
`dismissNewTeamSuggestion` | boolean
`requestEmailChangeTo` | any
`selfIdentifiedPersona` | any
`territoryIsActive` | boolean
`conversationIsPrivate` | any
`showDealsDetailPageUpdatesModal` | boolean
`assistantSetting` | [GetAListOfUsers200ResponseUsersInnerAssistantSetting](GetAListOfUsers200ResponseUsersInnerAssistantSetting.md)
`fieldsFullyLoaded` | boolean
`typedCustomFields` | any
`connectedToSlack` | boolean
`crmEmail` | any
`triggeredReferralCampaigns` | Array&lt;any&gt;
`enableClickTracking` | boolean
`enableOpenTracking` | boolean
`shouldIncludeUnsubscribeLink` | boolean
`enableOneClickUnsubscribe` | any
`subteamIds` | Array&lt;any&gt;
`prospectTerritoryIds` | Array&lt;any&gt;
`toggledOnTerritoryIds` | Array&lt;any&gt;
`linkedSalesforce` | any
`linkedZoomConferenceAccount` | boolean
`linkedBotConferenceAccount` | boolean
`linkedBotConferenceAccountPlatforms` | Array&lt;string&gt;
`hasConferenceAccount` | boolean
`linkedHubspot` | boolean
`linkedSalesloft` | boolean
`linkedCrmName` | any
`chromeExtensionEnabledFeatures` | Array&lt;string&gt;
`chromeExtensionExcludeFromWebsites` | Array&lt;string&gt;
`chromeExtensionEverywhereIconHorizontalPosition` | string
`chromeExtensionEverywhereIconVerticalPositionInVh` | number
`defaultChromeExtensionLogEmailSendToSalesforce` | boolean
`defaultChromeExtensionLogEmailSendToHubspot` | boolean
`chromeExtensionAutoMatchSalesforceOpportunity` | boolean
`chromeExtensionGmailEnableEmailTools` | boolean
`enableDesktopNotifications` | boolean
`enableGmailDesktopNotifications` | any
`defaultChromeExtensionEnableReminders` | boolean
`chromeExtensionGmailEnableCrmSidebar` | boolean
`showChromeExtensionBuyingIntentPromo` | boolean
`apolloEverywhereSearchCount` | number

## Example

```typescript
import type { GetAListOfUsers200ResponseUsersInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": 66c8db577ed7f201b25c0eef,
  "teamId": 6095a710bd01d100a506d4ac,
  "firstName": null,
  "lastName": null,
  "title": null,
  "email": anita.rao@apollomail.io,
  "createdAt": 2024-08-23T18:56:24.067Z,
  "creditLimit": null,
  "directDialCreditLimit": null,
  "exportCreditLimit": null,
  "aiCreditLimit": null,
  "salesforceAccount": null,
  "deleted": false,
  "optOutHtmlTemplate": No longer interested in these messages? <%Unsubscribe%>,
  "name": ,
  "referralCode": nzu90RCUSGkFzsavf4Efh3,
  "passwordNeedsReset": false,
  "salesforceId": null,
  "defaultCockpitLayout": null,
  "defaultAccountOverviewLayoutId": null,
  "defaultContactOverviewLayoutId": null,
  "defaultPersonOverviewLayoutId": null,
  "defaultOrganizationOverviewLayoutId": null,
  "defaultOpportunityOverviewLayoutId": null,
  "defaultHomeOverviewLayoutId": null,
  "bridgeCalls": false,
  "bridgePhoneNumber": null,
  "bridgeIncomingCalls": false,
  "bridgeIncomingPhoneNumber": null,
  "currentEmailVerified": true,
  "recordCalls": true,
  "salesforceInstanceUrl": null,
  "permissionSetId": 6170904d46a82c00c227b744,
  "defaultUseLocalNumbers": false,
  "disableEmailLinking": null,
  "syncSalesforceId": null,
  "syncCrmId": null,
  "zpContactId": 66ca3f1309358c0001ea7e4d,
  "chromeExtensionDownloaded": false,
  "zpIsSuperAnalyticsUser": null,
  "emailOauthSigninOnly": false,
  "notificationLastCreatedAt": null,
  "crmRequestedToIntegrate": null,
  "hasInvitedUser": false,
  "hasUsedEnrichment": false,
  "hasUploadedCsv": false,
  "hasHiddenOnboarding": false,
  "notificationLastReadAt": null,
  "dailyDataRequestEmail": false,
  "dataRequestEmails": true,
  "dailyTaskEmail": true,
  "freeDataCreditsEmail": true,
  "dismissNewTeamSuggestion": true,
  "requestEmailChangeTo": null,
  "selfIdentifiedPersona": null,
  "territoryIsActive": true,
  "conversationIsPrivate": null,
  "showDealsDetailPageUpdatesModal": true,
  "assistantSetting": null,
  "fieldsFullyLoaded": true,
  "typedCustomFields": null,
  "connectedToSlack": false,
  "crmEmail": null,
  "triggeredReferralCampaigns": null,
  "enableClickTracking": false,
  "enableOpenTracking": true,
  "shouldIncludeUnsubscribeLink": false,
  "enableOneClickUnsubscribe": null,
  "subteamIds": null,
  "prospectTerritoryIds": null,
  "toggledOnTerritoryIds": null,
  "linkedSalesforce": null,
  "linkedZoomConferenceAccount": false,
  "linkedBotConferenceAccount": true,
  "linkedBotConferenceAccountPlatforms": null,
  "hasConferenceAccount": true,
  "linkedHubspot": false,
  "linkedSalesloft": false,
  "linkedCrmName": null,
  "chromeExtensionEnabledFeatures": null,
  "chromeExtensionExcludeFromWebsites": null,
  "chromeExtensionEverywhereIconHorizontalPosition": right,
  "chromeExtensionEverywhereIconVerticalPositionInVh": 10,
  "defaultChromeExtensionLogEmailSendToSalesforce": true,
  "defaultChromeExtensionLogEmailSendToHubspot": true,
  "chromeExtensionAutoMatchSalesforceOpportunity": true,
  "chromeExtensionGmailEnableEmailTools": true,
  "enableDesktopNotifications": false,
  "enableGmailDesktopNotifications": null,
  "defaultChromeExtensionEnableReminders": false,
  "chromeExtensionGmailEnableCrmSidebar": true,
  "showChromeExtensionBuyingIntentPromo": true,
  "apolloEverywhereSearchCount": 0,
} satisfies GetAListOfUsers200ResponseUsersInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAListOfUsers200ResponseUsersInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


