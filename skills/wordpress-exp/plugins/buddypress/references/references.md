## Reference

Just like the WordPress REST API, the BP REST API is organized around REST, and is designed to have predictable, resource-oriented URLs and to use HTTP response codes to indicate API errors. The API uses built-in HTTP features, like HTTP authentication and HTTP verbs, which can be understood by off-the-shelf HTTP clients, and supports cross-origin resource sharing to allow you to interact securely with the API from a client-side web application.

The BP REST API uses JSON exclusively as the request and response format, including error responses.

The BP REST API provides public data accessible to any client anonymously, as well as private data only available after authentication. Once authenticated the BP REST API supports most BuddyPress community actions, allowing you to enhance your plugins with more responsive management tools, or build complex single-page applications.

This API reference provides information on the specific endpoints available through the API, their parameters, and their response data format.

## Developer Endpoint Reference

| Resource | Base Route |
|---|---|
| Components | `/buddypress/v1/components` |
| Members | `/buddypress/v1/members` |
| Activity | `/buddypress/v1/activity` |
| **Extended Profiles** | |
| – Profile Group | `/buddypress/v1/xprofile/groups` |
| – Profile Field | `/buddypress/v1/xprofile/fields` |
| – Profile Data | `/buddypress/v1/xprofile/<field_id>/data/<user_id>` |
| **User Groups** | |
| – Groups | `/buddypress/v1/groups` |
| – Group Membership | `/buddypress/v1/groups/<group_id>/members` |
| – Group Membership Requests | `/buddypress/v1/groups/<group_id>/membership-request` |
| – Group Invites | `/buddypress/v1/groups/<group_id>/invites` |
| **Private Messaging** | |
| – Sitewide Notices | `/buddypress/v1/messages` |
| | `/buddypress/v1/sitewide-notices` |
| Screen Notifications | `/buddypress/v1/notifications` |
| **Attachments** | |
| – Member Avatar | `/buddypress/v1/members/<user_id>/avatar` |
| – Member Cover Image | `/buddypress/v1/members/<user_id>/cover` |
| – Group Avatar | `/buddypress/v1/groups/<group_id>/avatar` |
| – Group Cover Image | `/buddypress/v1/groups/<group_id>/cover` |
| – Blog Avatar | `/buddypress/v1/blogs/<id>/avatar` |
| User Blogs | `/buddypress/v1/blogs` |
| User Signups | `/buddypress/v1/signup` |
| Friend Connections | `/buddypress/v1/friends` |
