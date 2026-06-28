# Private Messaging

## Topics

- Schema
- List Messages Threads
  - Arguments
  - Definition
  - Example of use
- Start a new Messages Thread or reply to an existing one
  - Arguments
  - Definition
  - Example of use
  - Starting a new Messages Thread
  - Replying to an existing Messages Thread
- Retrieve a specific Messages Thread
  - Arguments
  - Definition
  - Example of use
- Update metadata about a specific message of the Thread
  - Arguments
  - Description
  - Example of use
- Delete a specific Messages Thread for a user
  - Arguments
  - Definition
  - Example of use
- Star or unstar a specific message of a Messages Thread
  - Arguments
  - Definition
  - Example of use

The Private Messaging component allow your users to talk to each other directly and in private. It's not just limited to one-on-one discussions, private conversations can involve any number of members.

Note: The Private Messaging component is an optional one. This means the following endpoints will only be available if the component is active on the community site.

## Schema

The schema defines all the fields that exist for a Thread of messages object.

id

integer	A unique numeric ID for the Thread.
Read only
Context: view, edit

message_id

integer	The ID of the latest message of the Thread.
Read only
Context: view, edit

last_sender_id

integer	The ID of latest sender of the Thread.
Read only
Context: view, edit

subject

object	The raw and rendered title of the latest message of the Thread.
Context: view, edit

excerpt

object	The raw and rendered summaries of the latest message of the Thread.
Read only
Context: view, edit

message

object	The raw and rendered contents of the latest message of the Thread.
Required
Context: view, edit

date

string or null	The date of the latest message of the Thread, in the site's timezone.
Read only
Context: view, edit

date_gmt

string or null	The date of the latest message of the Thread, as GMT.
Read only
Context: view, edit

unread_count

integer	Total count of unread messages within the Thread for the requested user.
Read only
Context: view, edit

sender_ids

array	The list of user IDs for all messages within the Thread.
Read only
Context: view, edit

recipients

array	The list of recipient User Objects involved within the Thread.
Context: view, edit

messages

array	List of message objects for the Thread.
Read only
Context: view, edit

starred_message_ids

array	List of message IDs the logged in user added to the starred messages list (if the Star feature is active for the Private messaging component).
Read only
Context: view, edit

## List Messages Threads

### Arguments

Name	Type	Description
context	string	Scope under which the request is made; determines fields present in response.
Default: view
One of : view, edit
recipients_page	integer	Current page of the Recipients collection.
Minimum: 1
Default: 1
recipients_per_page	integer	Maximum number of Recipients to be returned in result set.
Minimum: 1
Default: 10
Maximum: 100
messages_page	integer	Current page of the Messages collection.
Minimum: 1
Default: 1
messages_per_page	integer	Maximum number of Messages to be returned in result set.
Minimum: 1
Default: 10
Maximum: 100
search	string	Limit results to the message having their subject or content matching a string.
box	string	Filter the result by box.
Default: inbox
One of : sentbox, inbox, starred
type	string	Filter the result by Thread status.
Default: all
One of : all, read, unread
user_id	integer	Limit result to messages created by a specific user.
Required
Default: the logged in user ID

### Definition

GET /buddypress/v1/messages

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/messages',
  type: 'GET',
  data: {
    context: 'view',
    box: 'sentbox'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Start a new Messages Thread or reply to an existing one

### Arguments

Name	Type	Description
id	integer	ID of the Messages Thread.
Required when replying to an existing Thread.
subject	string	Subject of the Message initializing the Thread.
Default: No Subject
message	string	Content of the Message to add to the Thread.
Required
recipients	array	The list of the recipients user IDs of the Message.
Required when starting a new Thread.
sender_id	integer	The user ID of the Message sender.

### Definition

POST /buddypress/v1/messages

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

#### Starting a new Messages Thread

```js
bp.apiRequest( {
  path: 'buddypress/v1/messages',
  type: 'POST',
  data: {
    context: 'edit',
    subject: 'Hello BuddyPress',
    message: 'BuddyPress helps you build awesome communities in WordPress.',
    /**
     * The list of user IDs for the recipients are required
     * when starting a new Thread.
     */
    recipients: [2, 3],
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

#### Replying to an existing Messages Thread

```js
bp.apiRequest( {
  path: 'buddypress/v1/messages',
  type: 'POST',
  data: {
    context: 'edit',
    id: 3, // The Thread ID is Required when replying.
    message: 'This is awesome.'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific Messages Thread

### Arguments

Name	Type	Description
id	integer	ID of the Messages Thread.
Required
user_id	integer	The user ID to get the thread for.
Default: false
recipients_page	integer	Current page of the Recipients collection.
Minimum: 1
Default: 1
recipients_per_page	integer	Maximum number of Recipients to be returned in result set.
Minimum: 1
Default: 10
Maximum: 100
messages_page	integer	Current page of the Messages collection.
Minimum: 1
Default: 1
messages_per_page	integer	Maximum number of Messages to be returned in result set.
Minimum: 1
Default: 10
Maximum: 100
order	string	Order sort attribute ascending or descending.
Default: asc
One of : asc, desc

### Definition

GET /buddypress/v1/messages/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: '/buddypress/v1/messages/5',
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

## Update metadata about a specific message of the Thread

Note: See the advanced usage chapter for more information about the way to register custom REST Fields and link them with the Message's metadata.

### Arguments

Name	Type	Description
id	integer	ID of the Messages Thread.
Required
message_id	integer	By default the latest message of the Thread will be updated. Specify this message ID to edit another message of the Thread.
read	boolean	Whether to mark the thread as read.
unread	boolean	Whether to mark the thread as unread.

### Description

PUT /buddypress/v1/messages/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: '/buddypress/v1/messages/5',
  type: 'PUT',
  data: {
    context: 'edit',
    custom_rest_field_name: 'custom rest field value'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Delete a specific Messages Thread for a user

When a user requests to delete a Messages Thread, she/he is removed from the list of recipients. As soon as the recipients list is empty, the Messages Thread is fully deleted from the database.

Warning: If the user is not one of the recipients of the Messages Thread, the REST response will be an error object.

### Arguments

Name	Type	Description
id	integer	ID of the Messages Thread.
Required
user_id	integer	The user ID to remove from the Thread.
Default: the logged in user ID
Required

### Definition

DELETE /buddypress/v1/messages/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/messages/25',
  type: 'DELETE',
  data: {
    context: 'edit',
    user_id: 18
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Star or unstar a specific message of a Messages Thread

### Arguments

Name	Type	Description
id	integer	ID of one of the messages of the Thread.
Required

Warning: The ID here is not a Messages Thread ID. It's the ID of a specific message of the Messages Thread.

### Definition

PUT /buddypress/v1/messages/starred/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/messages/starred/103',
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
