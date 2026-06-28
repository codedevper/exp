# Components

## Topics

## Schema

## List the BuddyPress components

### Arguments

### Definition

### Example of use

## Activate or Deactivate a BuddyPress component

### Arguments

### Definition

### Example of use

BuddyPress chose a modular approach using components to organize its features. Two components are loaded by default (eg: BuddyPress Core and Community Members) while the majority are optionals. BuddyPress comes with 8 built-in optional components (Account Settings, Activity Streams, Extended Profiles, Friend connections, Notifications, Private messaging, User groups and Site Tracking).

Note: It's important to note there can be more optional components regarding the BuddyPress plugins installed on the website: these plugins can use the BP Component API to incorporate the lists of active or inactive BuddyPress components.

## Schema

The schema defines all the fields that exist for BuddyPress components.

name

string Name of the component.
Context: view, edit.

status

string Whether the component is active or inactive.
Context: view, edit.
One of: active, inactive.

title

string HTML title of the component.
Context: view, edit.

description

string HTML description of the component.
Context: view, edit.

## List the BuddyPress components

### Arguments

Name Type Description
context string Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit.
page integer Current page of the collection.
Default: 1
per_page integer Maximum number of components to be returned in result set.
Default: 10
search string Limit results to those matching a string.
status string Limit result set to components with a specific status.
Default: all
One of: all, active, inactive
type string Limit result set to components with a specific type.
Default: all
One of: all, optional, retired, required

### Definition

GET /buddypress/v1/components

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/components',
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

## Activate or Deactivate a BuddyPress component

### Arguments

Name Type Description
name string Name of the component.
Required.
action string Whether to activate or deactivate the component.
Required.
One of: activate, deactivate.

### Definition

PUT /buddypress/v1/components

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/components',
  type: 'PUT',
  data: {
    context: 'edit',
    name: 'activity',
    action: 'activate'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
