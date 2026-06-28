# User Groups

The Groups component allows your users to organize themselves into specific public, private or hidden sections of your community site with separate activity streams and member listings.

4 endpoints are available to let you manage groups, manage group members, manage membership requests and group invites.

Note: The User Groups component is an optional one. This means the following endpoints will only be available if the component is active on the community site.

## User Groups Endpoints

| Resource | Base Route |
| --- | --- |
| Groups | /buddypress/v1/groups |
| Group Membership | /buddypress/v1/groups/<group_id>/members |
| Group Membership Requests | /buddypress/v1/groups/<group_id>/membership-request |
| Group invites | /buddypress/v1/groups/<group_id>/invites |
