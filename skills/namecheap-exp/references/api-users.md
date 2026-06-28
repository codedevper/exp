# Namecheap Users API Reference

Detailed parameter reference for `namecheap.users.*` and `namecheap.users.address.*` commands.

---

## users.getPricing

Returns pricing information for a requested product type.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| ProductType | String | 20 | Yes | Product type (e.g., `DOMAIN`, `SSLCERTIFICATE`) |
| ProductCategory | String | 20 | No | Category within a product type |
| PromotionCode | String | 20 | No | Coupon code |
| ActionName | String | 20 | No | Action (e.g., `REGISTER`, `RENEW`, `REACTIVATE`, `TRANSFER`) |
| ProductName | String | 20 | No | Product name (e.g., `COM`) |

### Response

Returns `ProductType` > `ProductCategory` > `Product` > `Price` hierarchy with pricing details.

### Error Codes

| Code | Description |
|------|-------------|
| 2011170 | PromotionCode is invalid |
| 2011298 | ProductType is invalid |

---

## users.getBalances

Gets information about funds in the user's account.

### Request Parameters

No additional parameters beyond global ones.

### Response

Returns `UserGetBalancesResult` with attributes: `Currency`, `AvailableBalance`, `AccountBalance`, `EarnedAmount`, `WithdrawableAmount`, `FundsRequiredForAutoRenew`.

### Error Codes

| Code | Description |
|------|-------------|
| 4022312 | Balance information is not available |

---

## users.create

Creates a new Namecheap account under the API user.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| NewUserName | String | 20 | Yes | Username for new account |
| NewUserPassword | String | 20 | Yes | Password for new account |
| EmailAddress | String | 128 | Yes | Email address |
| IgnoreDuplicateEmailAddress | String | 10 | No | Skip duplicate email check (default: Yes) |
| FirstName | String | 60 | Yes | First name |
| LastName | String | 60 | Yes | Last name |
| AcceptTerms | Number | 1 | Yes | Must be 1 |
| AcceptNews | Number | 1 | No | 1 to receive newsletters |
| JobTitle | String | 60 | No | Job designation |
| Organization | String | 60 | No | Organization |
| Address1 | String | 60 | Yes | Street address |
| Address2 | String | 60 | No | Street address line 2 |
| City | String | 60 | Yes | City |
| StateProvince | String | 60 | Yes | State/Province |
| Zip | String | 15 | Yes | Postal code |
| Country | String | 2 | Yes | Two-letter country code |
| Phone | String | 20 | Yes | Phone (`+NNN.NNNNNNNNNN`) |
| PhoneExt | String | 10 | No | Phone extension |
| Fax | String | 20 | No | Fax (`+NNN.NNNNNNNNNN`) |

### Response

Returns `UserCreateResult` with `Success` (true/false) and `UserId`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011153 | Email address is invalid |
| 2015182 | Invalid phone format |
| 2033153 | Email address already in use |
| 4022103 | Failed to create user |

---

## users.login

Validates credentials for accounts created via `users.create`.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| Password | String | 20 | Yes | Password of the user account |

Use `UserName` global parameter for the username.

### Response

Returns `UserLoginResult` with `UserName` and `LoginSuccess` (true/false).

### Error Codes

| Code | Description |
|------|-------------|
| 2010335 | Invalid password |
| 2017166 | User is disabled or locked |
| 2013410 | Too many declined payments |
| 2017289 | IP blocked |

---

## users.changePassword

Changes a user's password. Two methods: via old/new password or via reset code.

### Method 1: Old/New Password

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| OldPassword | String | 20 | Yes | Current password |
| NewPassword | String | 20 | Yes | New password |

### Method 2: Reset Code

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| ResetCode | String | 50 | Yes | Reset code from `users.resetPassword` |
| NewPassword | String | 20 | Yes | New password |

Omit the `UserName` global parameter for the reset code method.

### Response

Returns `UserChangePasswordResult` with `Success` and `UserId`.

### Error Codes

| Code | Description |
|------|-------------|
| 2015103 | Cannot use UserName and ResetCode together |
| 4022335 | Unable to change password |

---

## users.resetPassword

Emails a password reset link to the user.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| FindBy | String | 20 | Yes | `EMAILADDRESS`, `DOMAINNAME`, or `USERNAME` |
| FindByValue | String | 20 | Yes | The value to search by |
| EmailFromName | String | 20 | No | Override sender name (default: namecheap.com) |
| EmailFrom | String | 20 | No | Override sender email (default: support@namecheap.com) |
| URLPattern | String | 20 | No | Override reset URL pattern |

Omit `UserName` global parameter for this call.

### Response

Returns `UserResetPasswordResult` with `Success` and `Email` (where the email was sent).

### Error Codes

| Code | Description |
|------|-------------|
| 2011315 | FindBy is invalid |
| 4027153 | Failed to send email |
| 4022335 | Unable to reset password |

---

## users.update

Updates user account information.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| FirstName | String | 70 | Yes | First name |
| LastName | String | 70 | Yes | Last name |
| JobTitle | String | 60 | No | Job designation |
| Organization | String | 60 | No | Organization |
| Address1 | String | 60 | Yes | Street address |
| Address2 | String | 60 | No | Street address line 2 |
| City | String | 60 | Yes | City |
| StateProvince | String | 60 | Yes | State/Province |
| Zip | String | 15 | Yes | Postal code |
| Country | String | 2 | Yes | Two-letter country code |
| EmailAddress | String | 255 | Yes | Email address |
| Phone | String | 20 | Yes | Phone (`+NNN.NNNNNNNNNN`) |
| PhoneExt | String | 10 | No | Phone extension |
| Fax | String | 20 | No | Fax (`+NNN.NNNNNNNNNN`) |

### Response

Returns `UserUpdateResult` with `Success` and `UserId`.

### Error Codes

| Code | Description |
|------|-------------|
| 4011331 | StatusCode for update is invalid |
| 4024103 | Failed to update user |
| 2015182 | Invalid phone format |

---

## users.createAddFundsRequest

Creates a request to add funds via credit card (3-step process).

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| Username | String | 20 | Yes | Username to add funds to |
| PaymentType | String | 30 | Yes | `Creditcard` |
| Amount | Number | 10 | Yes | Amount to add |
| ReturnUrl | String | 300 | Yes | URL to redirect after payment |

### Response

Returns `Createaddfundsrequestresult` with `TokenID`, `ReturnURL`, and `RedirectURL`. Redirect the user to `RedirectURL` for credit card submission.

### Error Codes

| Code | Description |
|------|-------------|
| 2030343 | PaymentType is unsupported |
| 2015312 | Minimum amount should be added |
| 2029341 | Credit card not approved |

---

## users.getAddFundsStatus

Gets the status of an add funds request.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| TokenId | String | 100 | Yes | TokenID from `createAddFundsRequest` |

### Response

Returns `GetAddFundsStatusResult` with `TransactionID`, `Amount`, and `Status` (CREATED, SUBMITTED, COMPLETED, FAILED, EXPIRED).

### Error Codes

| Code | Description |
|------|-------------|
| 2012342 | TokenID mismatch |

---

## users.address.create

Creates a new address for the user.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| AddressName | String | 20 | Yes | Name for the address |
| DefaultYN | Number | 128 | No | Set as default (0 or 1) |
| EmailAddress | String | 128 | Yes | Email address |
| FirstName | String | 60 | Yes | First name |
| LastName | String | 60 | Yes | Last name |
| JobTitle | String | 60 | No | Job designation |
| Organization | String | 60 | No | Organization |
| Address1 | String | 60 | Yes | Street address |
| Address2 | String | 60 | No | Street address line 2 |
| City | String | 60 | Yes | City |
| StateProvince | String | 60 | Yes | State/Province |
| StateProvinceChoice | String | 60 | Yes | State/Province choice |
| Zip | String | 15 | Yes | Postal code |
| Country | String | 2 | Yes | Two-letter country code |
| Phone | String | 20 | Yes | Phone (`+NNN.NNNNNNNNNN`) |
| PhoneExt | String | 10 | No | Phone extension |
| Fax | String | 20 | No | Fax (`+NNN.NNNNNNNNNN`) |

### Response

Returns `AddressCreateResult` with `Success`, `AddressId`, and `AddressName`.

### Error Codes

| Code | Description |
|------|-------------|
| 4023336 | Failed to add user's address |
| 2015182 | Invalid phone format |

---

## users.address.update

Updates a user's address.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| AddressId | Number | 20 | Yes | Address ID to update |
| AddressName | String | 20 | Yes | Address name |
| DefaultYN | Number | 128 | No | Set as default (0 or 1) |
| EmailAddress | String | 128 | Yes | Email address |
| FirstName | String | 60 | Yes | First name |
| LastName | String | 60 | Yes | Last name |
| JobTitle | String | 60 | No | Job designation |
| Organization | String | 60 | No | Organization |
| Address1 | String | 60 | Yes | Street address |
| Address2 | String | 60 | No | Street address line 2 |
| City | String | 60 | Yes | City |
| StateProvince | String | 60 | Yes | State/Province |
| StateProvinceChoice | String | 60 | Yes | State/Province choice |
| Zip | String | 15 | Yes | Postal code |
| Country | String | 2 | Yes | Two-letter country code |
| Phone | String | 20 | Yes | Phone (`+NNN.NNNNNNNNNN`) |
| PhoneExt | String | 10 | No | Phone extension |
| Fax | String | 20 | No | Fax (`+NNN.NNNNNNNNNN`) |

### Response

Returns `AddressUpdateResult` with `Success`, `AddressId`, and `AddressName`.

### Error Codes

| Code | Description |
|------|-------------|
| 4024336 | Failed to update user's address |
| 2015182 | Invalid phone format |

---

## users.address.getList

Gets a list of address IDs and names for the user.

### Request Parameters

No additional parameters beyond global ones.

### Response

Returns `AddressGetListResult` with `List` elements containing `AddressId` and `AddressName`.

### Error Codes

| Code | Description |
|------|-------------|
| 4011331 | StatusCode is invalid |

---

## users.address.getInfo

Gets information for a specific address ID.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| AddressId | Number | 20 | Yes | Address ID |

### Response

Returns `GetAddressInfoResult` with full address details.

### Error Codes

| Code | Description |
|------|-------------|
| 4022336 | Failed to retrieve user's address |

---

## users.address.delete

Deletes a user's address.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| AddressId | Number | 20 | Yes | Address ID to delete |

### Response

Returns `AddressDeleteResult` with `Success`, `ProfileId`, and `UserName`.

### Error Codes

| Code | Description |
|------|-------------|
| 4025336 | Failed to delete user's address |

---

## users.address.setDefault

Sets an address as the default for the user.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| AddressId | Number | 20 | Yes | Address ID to set as default |

### Response

Returns `AddressSetDefaultResult` with `Success` and `AddressId`.

### Error Codes

| Code | Description |
|------|-------------|
| 4023336 | Failed to set default user's address |
