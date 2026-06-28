# Screen Notifications

## Topics

## Schema

Screen Notification informs the user about new interactions they are concerned with. The new ones are displayed into the "bubble" of the WordPress Admin Toolbar and all of them are listed within the user's profile notifications page.

Note: The Notifications component is an optional one. This means the notifications endpoints will only be available if the component is active on the community site.

The schema defines all the fields that exist for a notification object.

id

integer	A unique numeric ID for the notification.
Read only
Context: view, edit
user_id

integer	The ID of the user the notification is addressed to.
Default: logged in user ID
Context: view, edit
item_id

integer	The ID of the item associated with the notification.
Context: view, edit
secondary_item_id

integer	The ID of the secondary item associated with the notification.
Context: view, edit
component

string	The name of the BuddyPress component the notification relates to.
Context: view, edit
action

string	The name of the component's action the notification is about.
Context: view, edit
date

string or null	The date the notification was created, in the site's timezone.
Read only
Context: view, edit
date_gmt

string or null	The date the notification was created, as GMT.
Read only
Context: view, edit
is_new

integer	Whether it's a new notification or not.
Default: 1
Context: view, edit

## List Screen Notifications for a specific user

### Arguments

Name	Type	Description
context	string	Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit
page	integer	Current page of the collection.
Default: 1
per_page	integer	Maximum number of notifications to be returned in result set.
Default: 10
order_by

string	Name of the field to order the notifications to.
Default: id
One of: id, date_notified, item_id, secondary_item_id, component_name, component_action
sort_order	string	Order sort attribute ascending or descending.
Default: ASC
One of: ASC, DESC
component_name	string	Limit result set to notifications associated with a specific component.
Default: ''
component_action	string	Limit result set to notifications associated with a specific component's action name.
Default: ''
user_id	integer	Limit result set to notifications addressed to a specific user.
Default: the logged in user ID.
item_id	integer	Limit result set to notifications associated with a specific item ID.
Default: 0
secondary_item_id	integer	Limit result set to notifications associated with a specific secondary item ID.
Default: 0
is_new	boolean	Limit result set to new notifications or already read notifications.
Default: true

### Definition

GET /buddypress/v1/notifications

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/notifications',
  type: 'GET',
  data: {
    context: 'view',
    user_id: 23
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Create a new Screen Notification

### Arguments

Name	Type	Description
user_id	integer	The ID of the user the notification is addressed to.
Default: the logged in user ID
item_id	integer	The ID of the item associated with the notification.
secondary_item_id	integer	The ID of the secondary item associated with the notification.
component	string	The name of the BuddyPress component the notification relates to.
action	string	The name of the component's action the notification is about.
date	string	The date the notification was created, in the site's timezone.
is_new	integer	Whether it's a new notification or not.
Default: 1

### Definition

POST /buddypress/v1/notifications

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

The sample code below shows how we could create a new notification for an activity mention.

```js
bp.apiRequest( {
  path: 'buddypress/v1/notifications',
  type: 'POST',
  data: {
    context: 'edit',
    user_id: 2,           // The mentioned user
    item_id: 1,           // The activity ID
    secondary_item_id: 1, // The user ID of the activity author
    component: 'activity',
    action: 'new_at_mention',
    is_new: 1
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific Screen Notification

### Arguments

Name	Type	Description
id	integer	The unique numeric ID for the notification.
Required
context	string	Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit

### Definition

GET /buddypress/v1/notifications/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/notifications/14',
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

## Update Screen Notification whether it's new or not

### Arguments

Name	Type	Description
id	integer	The unique numeric ID for the notification.
Required
is_new	integer	Whether it's a new notification or not.
Default: 0

### Definition

PUT /buddypress/v1/notifications/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/notifications/14',
  type: 'PUT',
  data: {
    context: 'edit',
    is_new: 0
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Delete a specific Screen Notification

### Arguments

Name	Type	Description
id	integer	The unique numeric ID for the notification.
Required

### Definition

DELETE /buddypress/v1/notifications/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/notifications/14',
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

