# Friend connections

## Topics

## Schema

## List a Member's Friendship requests

### Arguments

### Definition

### Example of use

## Request a new Friendship

### Arguments

### Definition

### Example of use

## Retrieve the Friendship between the logged in Member & another Member

### Arguments

### Definition

### Example of use

## Let the logged in Member accept a Friendship

### Arguments

### Definition

### Example of use

## Let the logged in Member reject, withdraw or remove a Friendship.

### Arguments

### Definition

### Example of use

The Friends component allow your members to make connections with other members. The BuddyPress Friendship is a mutually agreed relationship between 2 members.

Note: The Friends component is an optional one. This means the following endpoints will only be available if the component is active on the community site.

## Schema

The schema defines all the fields that exist for a friendship object.

id

integer A unique numeric ID for the friendship.
Read only
Context: view, edit

initiator_id

integer The ID of the user who is requesting the Friendship.
Context: view, edit

friend_id

integer The ID of the user who is invited to agree to the Friendship request.
Context: view, edit

is_confirmed

boolean Whether the friendship has been confirmed. true if it is the case, false otherwise.
Read only
Context: view, edit

date_created

string or null The date the friendship was created, in the site's timezone.
Read only
Context: view, edit

date_created_gmt

string or null The date the friendship was created, as GMT.
Read only
Context: view, edit

## List a Member's Friendship requests

### Arguments

Name Type Description
context string Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit
page integer Current page of the collection.
Default: 1
per_page integer Maximum number of friendships to be returned in result set.
Default: 10
user_id integer ID of the member whose friendships are being retrieved.
Required
Default: the logged in user ID
is_confirmed integer Whether the friendship has been confirmed. 1 if it is the case, 0 otherwise.
Default: 0
id integer Unique numeric identifier of the friendship.
Default: 0
initiator_id integer The ID of the user who is requesting the Friendship.
Default: 0
friend_id integer The ID of the user who is invited to agree to the Friendship request.
Default: 0
orderby string Order Groups by which attribute.
Default: date_created
One of: 'date_created', 'initiator_user_id', 'friend_user_id', 'id'
order string Order sort attribute ascending or descending.
Default: desc
One of: asc, desc

### Definition

GET /buddypress/v1/friends

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/friends',
  type: 'GET',
  data: {
    context: 'view',
    'user_id': 47,
    'is_confirmed': 1
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Request a new Friendship

### Arguments

Name Type Description
context string Scope under which the request is made; determines fields present in response.
Default: edit
One of: view, edit
initiator_id integer The ID of the user who is requesting the Friendship.
Required
friend_id integer The ID of the user who is invited to agree to the Friendship request.
Required
force boolean Whether to force the friendship agreement.
NB: Only Administrators can force a friendship.
Default: false

### Definition

POST /buddypress/v1/friends

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/friends',
  type: 'POST',
  data: {
    context: 'edit',
    'initiator_id': 4,
    'friend_id': 5
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve the Friendship between the logged in Member & another Member

### Arguments

Name Type Description
id integer Numeric identifier for a possible Friendship initiator or for the user who is invited to agree to a Friendship request.
Required
context string Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit

### Definition

GET /buddypress/v1/friends/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/friends/51',
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

## Let the logged in Member accept a Friendship

### Arguments

Name Type Description
id integer Numeric identifier of the friendship initiator.
Required
context string Scope under which the request is made; determines fields present in response.
Default: edit
One of: view, edit

### Definition

PUT /buddypress/v1/friends/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/friends/131',
  type: 'PUT',
  data: {
    context: 'edit'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Let the logged in Member reject, withdraw or remove a Friendship.

The logged in Member is withdrawing a Friendship request when he is the initiator.
The logged in Member is rejecting a Friendship request when he is the user who is invited to agree to a Friendship request.
The logged in Member is removing an existing Friendship when the force argument is used.

### Arguments

Name Type Description
id integer A unique numeric ID for the user who requested a Friendship or who is invited to agree to a Friendship request.
Required
force boolean Whether to force the removal of an existing Friendship. true to remove, false otherwise.
Default: false
context string Scope under which the request is made; determines fields present in response.
Default: edit
One of: view, edit

### Definition

DELETE /buddypress/v1/friends/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/friends/131',
  type: 'DELETE',
  data: {
    context: 'edit',
    force: true
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```
