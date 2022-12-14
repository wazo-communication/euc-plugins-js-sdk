---
sidebar_position: 5
sidebar_label: Portal
---

# Customizing the Portal (coming soon)

⚠️ This part is still in development process, the customization is not available for now.

## Adding tabs in the main page

![App configuration](/img/portal-home-tab.png)

To create a new tab in the main screen, add a `staticTabs` in your manifest with a `generalTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "generalTab"
    ],
    "name": "My label",
    "contentUrl": "https://my-websit/content.html"
  }
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Adding tabs in the main page of the PBX section

![App configuration](/img/portal-pbx-home-tab.png)

To create a new tab in the PBX main screen, add a `staticTabs` in your manifest with a `generalPbxTab` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "generalPbxTab"
    ],
    "name": "My label",
    "contentUrl": "https://my-websit/content.html"
  }
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Adding tabs in a form

![App configuration](/img/portal-pbx-form.png)

To create a new tab in the PBX main screen, add a `staticTabs` in your manifest with a `pbx.*` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "pbx.users"
    ],
    "name": "My label",
    "contentUrl": "https://my-websit/content.html"
  }
],
```

The `context` key can be one of `pbx.*` where `*` is : `users`, `lines`, `devices`, `ring-groups`, `voicemails`, ...


When the user clicks on the tab, the `contentUrl` will be loaded.

## Adding page in an existing menu of the PBX section

![App configuration](/img/portal-existing-menu.png)

To create a new page the PBX menu, add a `staticTabs` in your manifest with a `pbxMenu` `context` :
```json
"staticTabs": [
  {
    "entityId": "my id",
    "context": [
      "pbxMenu"
    ],
    "name": "My label",
    "parent": "common.layout.pbxMenu.userManagement",
    "contentUrl": "https://my-website.com/content.html"
  }
],
```

The `parent` key can be one of `common.layout.pbxMenu.*` where `*` is : `globalSettings`, `userManagement`, `callManagement`, `services`, `callCenter`,`reporting`, `soundsAndGreetings`, `settings`.

When the user clicks on the tab, the `contentUrl` will be loaded.

## Adding you onw menu to display custom page

![App configuration](/img/portal-pbx-own-menu.png)

To create a new menu in the PBX section, add a `staticTabs` in your manifest with a `pbxMenu` `context` :
```json
"staticTabs": [
  {
    "entityId": "custom-child",
    "context": [
      "pbxMenu"
    ],
    "name": "New child",
    "parent": "New menu",
    "parentIcon": "AccountBalance",
    "contentUrl": "http://example.com/stats-stack.html"
  },
  {
    "entityId": "custom-child2",
    "context": [
      "pbxMenu"
    ],
    "name": "New child 2",
    "parent": "New menu",
    "parentIcon": "AccountBalance",
    "contentUrl": "http://example.com/stats-stack.html"
  },
],
```

When the user clicks on the tab, the `contentUrl` will be loaded.

## Adding you onw section in the global settings page

![App configuration](/img/portal-pbx-global-settings.png)

To create a new menu in the PBX section, add a `staticTabs` in your manifest with a `globalSettings` `context` :
```json
"staticTabs": [
  {
    "entityId": "global-settings",
    "context": [
      "globalSettings"
    ],
    "name": "Custom global",
    "icon": "BrightnessHigh",
    "contentUrl": "http://localhost:3002/portal/global.html"
  }
],
```

The `icon` should be in the [Material UI icon](https://mui.com/material-ui/material-icons/) list.

When the user clicks on the tab, the `contentUrl` will be loaded.

## Adding a background script

You can add custom code when the user is not using a custom tab. It can be useful to handle custom events.

```json
  "backgroundScript": "https://my-website/background.js"
```

Please refer to the [SDK](/docs/sdk) documentation to know how to inject custom code in the application.
