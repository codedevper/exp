# Namecheap Domain Privacy API Reference

Detailed parameter reference for `namecheap.whoisguard.*` commands (also referred to as `domainprivacy`).

**Note:** The privacy service provider recently changed to WithheldforPrivacy. In some cases, you may still see `Whoisguard` in API parameter names.

## whoisguard.enable

Enables domain privacy protection for a WhoisguardID.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| WhoisguardID | Number | 10 | Yes | Unique domain privacy ID |
| ForwardedToEmail | String | 70 | Yes | Email address to forward privacy emails to |

### Response

Returns `WhoisguardEnableResult` with `DomainName` and `IsSuccess` (true/false) attributes.

### Error Codes

| Code | Description |
|------|-------------|
| 2011331 | Domain privacy does not exist, is already enabled, or not associated with this user |
| 2011369 | Forwarded email address is not valid |

---

## whoisguard.disable

Disables domain privacy protection for a WhoisguardID.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| WhoisguardID | Number | 10 | Yes | Unique domain privacy ID to disable |

### Response

Returns `WhoisguardDisableResult` with `DomainName` and `IsSuccess` (true/false) attributes.

### Error Codes

| Code | Description |
|------|-------------|
| 2011331 | Domain privacy does not exist, is already disabled, or not associated with this user |

---

## whoisguard.getList

Gets the list of domain privacy protection subscriptions.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| ListType | String | 10 | No | `ALL` (default), `ALLOTED`, `FREE`, or `DISCARD` |
| Page | Number | 10 | No | Page to return (default: 1) |
| PageSize | Number | 20 | No | Results per page (min: 2, max: 100) |

### Response

Returns `Whoisguard` elements with attributes: `ID`, `DomainName`, `Created`, `Expires`, `Status`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011272 | ListType is not valid |

---

## whoisguard.renew

Renews domain privacy protection.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| WhoisguardID | String | 10 | Yes | Domain privacy ID to renew |
| Years | Number | 9 | Yes | Number of years to renew |
| PromotionCode | Number | 20 | No | Coupon code |

### Response

Returns `WhoisguardRenewResult` with attributes: `WhoisguardId`, `Years`, `Renew` (true/false), `OrderId`, `TransactionId`, `ChargedAmount`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011167 | No of years should be max of 9 |
| 2029331 | Cannot renew before 30 days of expiration |
| 2528268 | Order creation failed / validation error |
| 5050900 | Unhandled exception |

---

## whoisguard.changeEmailAddress

Changes the domain privacy email address.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| WhoisguardID | Number | 10 | Yes | Unique domain privacy ID to change |

### Response

Returns `WhoisguardChangeEmailAddressResult` with attributes: `ID`, `IsSuccess`, `WGEmail` (new email), `WGOldEmail` (old email).

### Error Codes

| Code | Description |
|------|-------------|
| 2011331 | Domain privacy does not exist, not associated with any domain, or not associated with this user |
