# Sitewide Notices

## Topics

- Schema
- List Sitewide Notices
  - Arguments
  - Definition
  - Example of use
- Retrieve a specific Sitewide Notice
  - Arguments
  - Definition
  - Example of use
- Update a specific Sitewide Notice
  - Arguments
  - Description
  - Example of use
- Delete a specific Sitewide Notice
  - Arguments
  - Definition
  - Example of use
- Dismiss currently active notice for the current user
  - Definition
  - Example of use

The Sitewide Notices feature allows to send notices to the whole site. This feature is currently part of the Private Messages Component.

Note: The Private Messaging component is an optional one. This means the following endpoints will only be available if the component is active on the community site.

## Schema

The schema defines all the fields that exist for a Sitewide Notice object.

id

integer	A unique numeric ID for the sitewide notice.
Read only
Context: view, edit

subject

object	The raw and rendered contents of the sitewide notice subject.
Context: view, edit

message

object	The raw and rendered contents of the sitewide notice.
Required
Context: view, edit

date

string or null	The date of the sitewide notice, in the site's timezone.
Read only
Context: view, edit

date_gmt

string or null	The date of the sitewide notice, as GMT.
Read only
Context: view, edit

is_active

bool	Whether this sitewide notice is active or not.
Read only
Context: view, edit

## List Sitewide Notices

### Arguments

Name	Type	Description
context	string	Scope under which the request is made; determines fields present in response.
Default: view
One of : view, edit
page	integer	Current page of the sitewide notices collection.
Minimum: 1
Default: 1
per_page	integer	Maximum number of sitewide notices to be returned in result set.
Minimum: 1
Default: 10
Maximum: 100
search	string	Limit results to those matching a string.

### Definition

GET /buddypress/v1/sitewide-notices

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/sitewide-notices',
  type: 'GET',
  data: {
    context: 'view',
    search: 'Sitewide Notices'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific Sitewide Notice

### Arguments

Name	Type	Description
id	integer	ID of a Sitewide Notice.
Required

### Definition

GET /buddypress/v1/sitewide-notices/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: '/buddypress/v1/sitewide-notices/5',
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

## Update a specific Sitewide Notice

### Arguments

Name	Type	Description
id	integer	ID of the Sitewide Notice.
Required
subject	string	Subject of the Sitewide Notice.
message	string	Content of the Sitewide Notice.
is_active	bool	The status of the Sitewide Notice (active or not).

### Description

PUT /buddypress/v1/sitewide-notices/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: '/buddypress/v1/sitewide-notices/5',
  type: 'PUT',
  data: {
    context: 'edit',
    subject: 'a new subject for this sitewide notice'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Delete a specific Sitewide Notice

### Arguments

Name	Description
id	ID of the Sitewide Notice.
Required

### Definition

DELETE /buddypress/v1/sitewide-notices/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/sitewide-notices/25',
  type: 'DELETE',
  data: {
    context: 'edit',
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Dismiss currently active notice for the current user

When a user requests to dismiss the current active sitewide notice, the notice is dismissed.

Warning: If the user is not logged in or if there is no active notice available, the REST response will be an error object.

### Definition

PUT /buddypress/v1/sitewide-notices/dismiss

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/sitewide-notices/dismiss',
  type: 'PUT',
  data: {
    context: 'edit',
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
