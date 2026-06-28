# Namecheap SSL API Reference

Detailed parameter reference for `namecheap.ssl.*` commands.

Both HTTP GET and POST are supported unless noted otherwise.

**SSL Type Changes (effective July 11, 2026):** New product names: `Standard SSL`, `Standard Wildcard SSL`, `SAN Certificate`, `High Assurance SSL`, `OV Wildcard SSL`, `OV Multi-domain SSL`, `EV SSL`, `EV Multi-Domain SSL`. Deprecated names (backward compatible): `PositiveSSL`, `EssentialSSL`, `InstantSSL`, `InstantSSL Pro`, `PremiumSSL`, `PositiveSSL Wildcard`, `EssentialSSL Wildcard`, `PremiumSSL Wildcard`, `PositiveSSL Multi Domain`, `Multi Domain SSL`, `Unified Communications`, `EV Multi Domain SSL`.

## ssl.create

Creates a new SSL certificate.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| Years | Number | 1 | Yes | Number of years (1-5) |
| Type | String | 50 | Yes | SSL product name |
| SANSToADD | Number | 2 | No | Add-on domains for multi-domain certs |
| PromotionCode | String | 20 | No | Coupon code |

### SSL Certificate Classification

**Single-domain:** PositiveSSL/EssentialSSL/Standard SSL (DV), InstantSSL/InstantSSL Pro/PremiumSSL/High Assurance SSL (OV), EV SSL (EV)

**Wildcard:** PositiveSSL Wildcard/EssentialSSL Wildcard/Standard Wildcard SSL (DV), PremiumSSL Wildcard/OV Wildcard SSL (OV)

**Multi-domain:** PositiveSSL Multi Domain/SAN Certificate (DV), Multi Domain SSL/Unified Communications/OV Multi-domain SSL (OV), EV Multi Domain SSL/EV Multi-Domain SSL (EV)

All multi-domain certs include 3 domains by default, max 100 total, max 97 SANStoADD.

### Response

Returns `SSLCreateResult` with `CertificateID`, `SSLType`, `Years`, `Status`, and `OrderId`/`TransactionId`/`ChargedAmount`.

### Error Codes

| Code | Description |
|------|-------------|
| 2010167 | Parameter Years is Missing |
| 2010298 | Parameter Type is Missing |
| 2011301 | SSL type invalid or discontinued |
| 2528166 | Order creation failed |
| 4080167 | 4/5-year certificates no longer available |

---

## ssl.getList

Returns a list of SSL certificates for the user.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| ListType | String | 50 | No | `ALL`, `Processing`, `EmailSent`, `TechnicalProblem`, `InProgress`, `Completed`, `Deactivated`, `Active`, `Cancelled`, `NewPurchase`, `NewRenewal` |
| SearchTerm | String | 70 | No | Keyword to search |
| Page | Number | 10 | No | Page to return (default: 1) |
| PageSize | Number | 100 | No | Results per page (min: 10, max: 100, default: 20) |
| SortBy | String | 20 | No | `PURCHASEDATE`, `PURCHASEDATE_DESC`, `SSLTYPE`, `SSLTYPE_DESC`, `EXPIREDATETIME`, `EXPIREDATETIME_DESC`, `Host_Name`, `Host_Name_DESC` |

### Response

Returns `SSL` elements with attributes: `CertificateID`, `HostName`, `SSLType`, `PurchaseDate`, `ExpireDate`, `ActivationExpireDate`, `IsExpiredYN`, `Status`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011272 | ListType is invalid |
| 5050900 | Unhandled exceptions |

---

## ssl.getInfo

Retrieves information about a specific SSL certificate.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | Number | 10 | Yes | Unique ID of the SSL certificate |
| Returncertificate | String | 10 | No | Return certificate in response (`true`/`false`) |
| Returntype | String | 10 | No* | Required if Returncert=true. `Individual` (X.509) or `PKCS7` |

### Response

Returns `SSLGetInfoResult` with attributes: `Status`, `Type`, `IssuedOn`, `Expires`, `ActivationExpireDate`, `OrderId`, `ReplacedBy`, `SANSCount`.

**Status values:** `Active`, `Newpurchase`, `Newrenewal`, `Purchased`, `Purchaseerror`, `Cancelled`, `Replaced`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011294 | CertificateID is invalid |
| 5050900 | Unhandled exceptions |

---

## ssl.activate

Activates a purchased non-activated SSL certificate.

Only HTTP POST is supported.

### Request Parameters

**Common parameters:**

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | number | 10 | Yes | SSL certificate to activate |
| CSR | string | 32767 | Yes | Certificate Signing Request (URL-encoded) |
| AdminEmailAddress | string | 255 | No | Email to send signed certificate to |
| WebServerType | string | 50 | No | Server software (e.g., `apacheopenssl`, `nginx`, `iis`, `cpanel`) |
| UniqueValue | string | 20 | No | Unique identifier for the request |

**Domain Control Validation (DCV):**

| Name | Type | Description |
|------|------|-------------|
| ApproverEmail | string | DCV method: an email from getApproverEmailList, `HTTPCSRHASH`, or `CNAMECSRHASH` |
| HTTPDCValidation | bool | Validate via HTTP file upload (not for Wildcard) |
| DNSDCValidation | bool | Validate via CNAME record |

**Multi-domain specific:** `DNSNames` (comma-separated FQDNs), `DNSApproverEmails` (DCV methods per domain).

**OV parameters:** `AdminOrganizationName`, `OrganizationDepartment`, `AdminCountry`, `AdminStateProvince`, `AdminCity`, `AdminAddress1`, `AdminPostalCode`, `AdminPhone`, `OrganizationDUNS`.

**EV parameters (all OV params plus):** `CompanyIncorporationCountry` (required), `CompanyIncorporationStateProvince`, `CompanyIncorporationLocality`, `CompanyIncorporationDate`, `CompanyDBA`, `CompanyRegistrationNumber`.

### Response

Returns `SSLActivateResult` with `HttpDCValidation` and `DNSDCValidation` blocks containing file upload or CNAME record values for DCV.

### Error Codes

| Code | Description |
|------|-------------|
| 2010294 | CertificateID is Missing |
| 2010296 | CSR is Missing |
| 3011295 | Approver email is invalid |
| 4011297 | Invalid ISO 3166-1 alpha-2 country |
| 4020294 | Activation period expired |

---

## ssl.renew

Creates a renewal SSL certificate.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | Number | 9 | Yes | SSL certificate to renew |
| Years | Number | 1 | Yes | Number of years (1-5) |
| SSLType | String | 50 | Yes | SSL product name |
| PromotionCode | String | 20 | No | Coupon code |

Renewal can be purchased if the certificate's status is ACTIVE, it's 90 days before expiration OR 180 days after expiration. Renewal certificate still needs to be activated.

### Response

Returns `SSLRenewResult` with `CertificateID`, `SSLType`, `Years`, `OrderId`, `TransactionId`, `ChargedAmount`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011294 | CertificateID is invalid |
| 4011294 | Cannot renew — certificate conditions not met |
| 4011331 | Certificate status is invalid |
| 2528166 | Order creation failed / insufficient funds |

---

## ssl.reissue

Initiates creation of a new certificate version of an active SSL.

### Request Parameters

Same parameters as `ssl.activate`. Only supported on certificates in `ACTIVE` status.

### Response

Same response structure as `ssl.activate` with DCV details.

### Error Codes

| Code | Description |
|------|-------------|
| 2011294 | CertificateID is invalid |
| 4011331 | Status is invalid or reissue already in progress |
| 4035900 | Cannot create certificate for reissue |

---

## ssl.parseCSR

Parses a Certificate Signing Request.

Only HTTP POST is supported.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| csr | String | 2000 | Yes | Certificate Signing Request |
| CertificateType | String | 50 | No | SSL type (recommended) |

### Response

Returns `CSRDetails` with: `CommonName`, `DomainName`, `Country`, `OrganisationUnit`, `Organisation`, `State`, `Locality`, `Email`, `DNSNames`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011300 | CertificateType is invalid |
| 3022296 | Failed to retrieve CSR details |

---

## ssl.getApproverEmailList

Gets approver email list for a domain.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| DomainName | String | 70 | Yes | Domain name |
| CertificateType | String | 50 | Yes | SSL product type |

### Response

Returns `GetApproverEmailListResult` with `DomainEmails`, `GenericEmails`, and `ManualEmails` lists.

### Error Codes

| Code | Description |
|------|-------------|
| 2011300 | CertificateType is invalid |
| 2011166 | DomainName is invalid |
| 3022295 | Failed to retrieve approver email |

---

## ssl.editDCVMethod

Sets or changes the Domain Control Validation method for a certificate request.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | Number | 10 | Yes | SSL certificate ID |
| DCVMethod | String | 255 | Yes* | DCV method for single-domain certs |
| DNSNames | String | 3500 | Yes** | Comma-separated domains |
| DCVMethods | String | 3500 | Yes** | Comma-separated DCV methods |

*Use DCVMethod for single-domain, **DNSNames and DCVMethods for multi-domain.

**DCV method values:** `HTTP_CSR_HASH` (file upload), `CNAME_CSR_HASH` (DNS record), or an email address from getApproverEmailList.

### Response

Returns `SSLEditDCVMethodResult` with DCV details and per-domain results.

### Error Codes

| Code | Description |
|------|-------------|
| 2011331 | Status is invalid |
| 3011295 | DCVMethod is invalid |
| 3011784 | HTTP DCV not allowed for Wildcard certificates |

---

## ssl.purchaseMoreSans

Purchases additional add-on domains for a multi-domain certificate.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | Number | 10 | Yes | Certificate ID |
| NumberOfSANSToAdd | Number | 2 | Yes | Number of add-on domains to order |

### Response

Returns `SSLPurchaseMoreSANSResult` with updated `SANSCount` and order details.

### Error Codes

| Code | Description |
|------|-------------|
| 2011301 | SSLType is invalid |
| 2528166 | Order creation failed |

---

## ssl.revokeCertificate

Revokes a reissued SSL certificate (Comodo certs only).

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | Number | 10 | Yes | Certificate to revoke |
| CertificateType | String | 50 | Yes | SSL product type |

### Response

Returns `RevokeCertificateResult` with `IsSuccess` and `ID`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011300 | Wrong SSL certificate selection |
| 4011331 | Status is invalid |

---

## ssl.resendFulfillmentEmail

Resends the fulfillment email containing the signed certificate.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | String | 10 | Yes | Certificate ID |

### Response

Returns `SSLResendFulfillmentEmailResult` with `ID` and `IsSuccess`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011294 | CertificateID is invalid |
| 3011299 | No administrator email on file |
| 3022334 | Failed to resend fulfillment email |

---

## ssl.resendApproverEmail

Resends the approver email or retries HTTP/DNS validation.

### Request Parameters

| Name | Type | MaxLen | Required | Description |
|------|------|--------|----------|-------------|
| CertificateID | String | 10 | Yes | Certificate ID |

### Response

Returns `SSLResendApproverEmailResult` with `ID` and `IsSuccess`.

### Error Codes

| Code | Description |
|------|-------------|
| 2011294 | CertificateID is invalid |
| 3011295 | ApproverEmail is invalid |
