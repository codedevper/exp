# User Blogs

## Topics

## Schema

## List Blogs

### Arguments

### Definition

### Example of use

## Create a Blog

### Arguments

### Definition

### Example of use

## Retrieve a specific Blog

### Arguments

### Definition

### Example of use

The Site Tracking components come, on WordPress Multisite configurations, with a directory page listing all public user Blogs of your network of sites. Thanks to the BP Blogs REST Endpoint, you can fetch these public blogs into your Application.

Note: The User Blogs component is an optional one. This means the User Blogs endpoint will only be available if the component is active on the community site.

## Schema

The schema defines all the fields that exist for a Blog object.

id

integer Unique identifier for the Blog.
Read only
Context: view, edit

user_id

integer A unique numeric ID for the Blog's administrator.
Read only
Context: view, edit

name

string The Blog's name.
Read only
Context: view, edit

permalink

string, uri The Blog's permalink.
Read only
Context: view, edit

description

string The Blog's description.
Read only
Context: view, edit

path

string The Blog's relative path to the network's domain (when Multisite is using sub-directories for blogs)
Read only
Context: view, edit

domain

string The Blog's domain (or the network's domain when Multisite is using sub-directories for blogs).
Read only
Context: view, edit

last_activity

string or null The last activity date from the Blog, in the network's timezone.
Read only
Context: view, edit

last_activity_gmt

string or null The last activity date from the Blog, as GMT.
Read only
Context: view, edit

avatar_urls (1)

object Avatar URLs for the Blog (Full & Thumb sizes). It uses the WordPress site icon feature if supported, and falls back on the Administrator's avatars.
Read only
Context: view, edit

(1) Only if the WordPress discussion settings allow avatars.

## List Blogs

### Arguments

Name Type Description
context string Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit
page integer Current page of the collection.
Default: 1
per_page integer Maximum number of members to be returned in result set.
Default: 10
search string Limit results to site titles, domains, descriptions matching the searched terms.
user_id integer The unique numeric identifier of the user having publishing capabilities on the Blog.
include array Ensure result set include specific Blog IDs.
Default: []
type string Shorthand for certain orderby/order combinations.
Default: active
One of: active, newest, alphabetical, random

### Definition

GET /buddypress/v1/blogs

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/blogs',
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

## Create a Blog

Note: This route requires the Blogs signup option to be active into the WordPress Network Administration settings.

### Arguments

Name Type Description
name string The new site's name (used for the site URL).
Required
title string The new site's title.
Required
site_id integer The new site's network ID. (Only relevant on multi-network installations).
Default: 1
user_id integer The user ID of the new site's admin.
Default: the logged in user ID.
meta array Set initial Blog options.
Default: []

### Definition

POST /buddypress/v1/blogs

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/blogs',
  type: 'POST',
  data: {
    context: 'edit',
    name: 'buddypress',
    title: 'BuddyPress'
  }
} ).done( function( data ) {
  return data;
} ).fail( function( error ) {
  return error;
} );
```

## Retrieve a specific Blog

### Arguments

Name Type Description
id integer Unique identifier for the Blog.
context string Scope under which the request is made; determines fields present in response.
Default: view
One of: view, edit

### Definition

GET /buddypress/v1/blogs/<id>

### Example of use

Alert: To use the bp.apiRequest function, you need to enqueue the bp-api-request JavaScript or use it as a dependency of your script. Refer to this page to know more about loading JavaScript files in WordPress.

```js
bp.apiRequest( {
  path: 'buddypress/v1/blogs/2',
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
