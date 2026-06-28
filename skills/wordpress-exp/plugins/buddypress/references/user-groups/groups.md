# Groups

## Topics

- Schema
- List User Groups
- Create a User Group
- Retrieve a specific User Group
- Update a User Group
- Delete a User Group
- List the User Groups of the logged in member

## Schema

The schema defines all the fields that exist for a group object.

| Field | Type | Description |
| --- | --- | --- |
| id | integer | A unique numeric ID for the Group.<br>Read only<br>Context: view, edit |
| creator_id | integer | The ID of the user who created the Group.<br>Context: view, edit |
| name | string | The name of the group.<br>Context: view, edit |
| slug | string | The URL-friendly slug for the group.<br>Context: view, edit |
| link | string, uri | The permalink to the Group on the site.<br>Read only<br>Context: view, edit |
| description | object | The raw and rendered descriptions of the Group.<br>Context: view, edit |
| status | string | The visibility status of the Group.<br>Context: view, edit<br>One of: public, private, hidden |
| enable_forum | boolean | Whether the group has a forum or not.<br>Context: view, edit |
| parent_id | integer | ID of the parent Group.<br>Context: view, edit |
| date_created | string or null | The date the Group was created, in the site's timezone.<br>Read only<br>Context: view, edit |
| date_created_gmt | string or null | The date the Group was created, as GMT.<br>Read only<br>Context: view, edit |
| types | array | The Group Types. See this documentation page for more information about Group Types.<br>Read only<br>Context: view, edit |
| admins | array | List of WP_User objects for Group administrators.<br>Read only<br>Context: edit |
| mods | array | List of WP_User objects for moderators.<br>Read only<br>Context: edit |
| total_member_count | integer | Count of all Group members.<br>Read only<br>Context: view, edit |
| last_activity | string or null | The date the Group was last active, in the site's timezone.<br>Read only<br>Context: view, edit |
| last_activity_gmt | string or null | The date the Group was last active, as GMT.<br>Read only<br>Context: view, edit |
| last_activity_diff | string | The human diff time the Group was last active, in the site's timezone.<br>Read only<br>Context: view, edit |
| avatar_urls (1) | object | Avatar URLs for the group (Full & Thumb sizes).<br>Read only<br>Context: view, edit |

(1) Only if Group Avatar uploads are enabled on the community site.

## List User Groups

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, edit |
| page | integer | Current page of the collection.<br>Default: 1 |
| per_page | integer | Maximum number of Groups to be returned in result set.<br>Default: 10 |
| search | string | Limit results to Group names or descriptions matching a string. |
| type | string | Shorthand for certain orderby/order combinations.<br>Default: active<br>One of: active, newest, alphabetical, random, popular, most-forum-topics, most-forum-posts |
| order | string | Order sort attribute ascending or descending.<br>Default: desc<br>One of: asc, desc |
| orderby | string | Order Groups by which attribute.<br>Default: date_created<br>One of: date_created, last_activity, total_member_count, name, random |
| status | array | Group statuses to limit results to.<br>Default: []<br>One or more of: public, private, hidden |
| user_id | integer | Pass a user_id to limit to only Groups that this user is a member of.<br>Default: 0 |
| parent_id | array | Get Groups that are children of the specified Group(s) IDs.<br>Default: [] |
| meta | array | Get Groups based on their meta data information.<br>Default: [] |
| include | array | Ensure result set includes Groups with specific IDs.<br>Default: [] |
| exclude | array | Ensure result set excludes Groups with specific IDs.<br>Default: [] |
| group_type | string | Limit result set to a certain Group type. See this documentation page for more information about Group Types.<br>One of: The active Group types on the site. |
| enable_forum | boolean | Whether the group has a forum enabled.<br>Default: false |
| show_hidden | boolean | Whether results should include hidden groups.<br>Default: false |
| populate_extras | boolean | Whether to fetch extra BP data about the returned groups.<br>Default: false |

### Definition

`GET /buddypress/v1/groups`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups',
  type: 'GET',
  data: {
    context: 'view'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Create a User Group

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| creator_id | integer | The ID of the user who created the Group.<br>Default: the logged in user ID |
| name | string | The name of the Group.<br>Required |
| slug | string | The URL-friendly slug for the Group. |
| description | string | The description of the Group.<br>Required |
| status | string | The status of the Group.<br>Default: public<br>One of: public, private, hidden |
| enable_forum | boolean | Whether the Group has a forum or not. |
| parent_id | integer | ID of the parent Group. |
| types | array | The Group Types. See this documentation page for more information about Group Types. |

### Definition

`POST /buddypress/v1/groups`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups',
  type: 'POST',
  data: {
    context: 'edit',
    creator_id: 4,
    name: 'BuddyPress Group',          // Required.
    description: 'My beautiful group', // Required.
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific User Group

> Note: If you want to fetch activities posted in a specific User Group, please use the Activity Endpoint to fetch these using the group_id argument set to the ID of the User Group.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | integer | A unique numeric ID for the Group. |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, edit |
| populate_extras | boolean | Whether to fetch extra BP data about the returned group.<br>Default: false |

### Definition

`GET /buddypress/v1/groups/<group_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/51',
  type: 'GET',
  data: {
    context: 'view'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Update a User Group

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | integer | A unique numeric ID for the Group. |
| creator_id | integer | The ID of the user who created the Group. |
| name | string | The name of the Group. |
| description | string | The description of the Group. |
| status | string | The status of the Group.<br>Default: public<br>One of: public, private, hidden |
| enable_forum | boolean | Whether the Group has a forum or not. |
| parent_id | integer | ID of the parent Group. |
| types | string | Assign one or more types to a group. To assign more than one type, use a comma separated list of types. See this documentation page for more information about Group Types. |
| append_types | string | Append one or more types to a group. To append more than one type, use a comma separated list of types. See this documentation page for more information about Group Types. |
| remove_types | string | Remove one or more types of a group. To remove more than one type, use a comma separated list of types. See this documentation page for more information about Group Types. |

### Definition

`PUT /buddypress/v1/groups/<group_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/51',
  type: 'PUT',
  data: {
    context: 'edit',
    name: 'My awesome Group'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Delete a User Group

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | integer | A unique numeric ID for the Group. |

### Definition

`DELETE /buddypress/v1/groups/<group_id>`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/51',
  type: 'DELETE',
  data: {
    context: 'edit'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## List the User Groups of the logged in member

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| max | integer | The maximum amount of groups the user is member of to return. Defaults to all groups. |
| context | string | Scope under which the request is made; determines fields present in response.<br>Default: view<br>One of: view, edit |

### Definition

`GET /buddypress/v1/groups/me`

### Example of use

> Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/groups/me',
  type: 'GET',
  data: {
    context: 'view'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
