## namecheap.ssl.renew

Creates a renewal SSL certificate

> Both HTTP GET and POST are supported by this method.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&command=namecheap.ssl.renew&clientip=1.2.3.4&certificateid=501904&ssltype=positivessl&years=1`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **CertificateID** (Number, max 9, required): Unique ID of the SSL certificate you wish to renew
- **Years** (Number, max 1, required): Number of years renewal SSL will be issued for. Allowed values: 1,2,3,4,5.
- **SSLType** (String, max 50, required): SSL product name. See "Possible values for SSLType parameter" below this table.
- **PromotionCode** (String, max 20, optional): Promotional (coupon) code for the certificate

Possible values for Type parameter starting July 11, 2026: Standard SSL, Standard Wildcard SSL, SAN Certificate, High Assurance SSL, OV Wildcard SSL, OV Multi-domain SSL, EV SSL, EV Multi-Domain SSL.

The following values will be deprecated on July 11, 2026: PositiveSSL, EssentialSSL, InstantSSL, InstantSSL Pro, PremiumSSL, PositiveSSL Wildcard, EssentialSSL Wildcard, PremiumSSL Wildcard, PositiveSSL Multi Domain, Multi Domain SSL, Unified Communications, EV Multi Domain SSL.

> Note: To maintain backward compatibility, automatic product replacement is applied to deprecated CertificateType values. A request specifying a deprecated product will not fail — an equivalent SSL type will be issued and returned in the response instead. Starting July 11, 2026, we recommend specifying one of the new product names when purchasing a certificate via the create method.

SSL certificates classification by domain coverage and validation type:

Single-domain:
- Domain Validation (DV): PositiveSSL, EssentialSSL, Standard SSL
- Organization Validation (OV): InstantSSL, InstantSSL Pro, PremiumSSL, High Assurance SSL
- Extended Validation (EV): EV SSL

Wildcard:
- Domain Validation (DV): PositiveSSL Wildcard, EssentialSSL Wildcard, Standard Wildcard SSL
- Organization Validation (OV): PremiumSSL Wildcard, OV Wildcard SSL

Multi-domain:
- Domain Validation (DV): PositiveSSL Multi Domain, SAN Certificate
- Organization Validation (OV): Multi Domain SSL, Unified Communications, OV Multi-domain SSL
- Extended Validation (EV): EV Multi Domain SSL, EV Multi-Domain SSL

> Renewal certificate can be purchased if the renewed certificate's (a) status is ACTIVE, (b) it's 90 days before its expiration date OR 180 days after its expiration date
>
> Renewal certificate created as result of this API still needs to be activated
>
> Activating renewal certificate before the renewed certificate's expiry will transfer the days left until expiry into the renewal certificate
>
> It's not possible to specify number of SANSToAdd in renew API. Renewal certificate will be created with the exact same number of SANS that the renewed certificate has.

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK" xmlns="http://api.namecheap.com/xml.response">
    <Errors/>
    <Warnings/>
    <RequestedCommand>namecheap.ssl.renew</RequestedCommand>
    <CommandResponse Type="namecheap.ssl.renew">
        <SSLRenewResult CertificateID="123456" SSLType="PositiveSSL" Years="1" OrderId="1234567" TransactionId="1234567" ChargedAmount="9.0000"/>
    </CommandResponse>
    <Server>59f31428be24</Server>
    <GMTTimeDifference>--5:00</GMTTimeDifference>
    <ExecutionTime>1.534</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **CertificateID**: A unique integer value that identifies the renewal certificate created as result of renewal
- **Years**: Number of years for which the renewal certificate will be valid once it is issued
- **Order ID**: A unique integer value that identifies the renewal order
- **TransactionID**: A unique integer value that identifies the renewal transaction
- **ChargedAmount**: The amount charged for the order

## Error Codes

Specifies the error codes returned by this method

- **2010167**: Parameter Years is Missing
- **2010294**: Parameter CertificateID is Missing
- **2010301**: Parameter SSLType is Missing
- **2011167**: Parameter Years is Invalid
- **2011170**: Promotion code is not available
- **2011170**: Promotion code usage exceeded
- **2011170**: Promotion code is not started yet.
- **2011170**: Promotion code is expired
- **2011170**: Promotion code requires username.
- **2011170**: Access denied for the promotion code
- **2011170**: Promotion code is not active
- **2011170**: Error occured while validating promotion code
- **2011294**: Parameter CertificateID is Invalid
- **2011301**: Parameter SSLType is not valid
- **2011301**: We're sorry, the requested SSL type has been discontinued
- **2012301**: SSLType Mismatch
- **2013167**: Parameter Years is TooLong
- **2013167**: Parameter Years is OutOfRange. Max Years value for this Type is 2.
- **2013167**: Parameter Years is OutOfRange
- **2013170**: Parameter PromotionCode is TooLong
- **2013294**: Parameter CertificateID is TooLong
- **2013301**: Parameter SSLType is TooLong
- **2528166**: Order creation failed
- **2528166**: ORDER CREATION FAILED; INSUFFICIENTFUNDS;Insufficient funds in account; Sorry! Your available balance is insufficient to cover the current billing amount;
- **4011294**: Certificate not meet the ExpireDate. So cannot Renew
- **4011294**: Cannot renew with Year=3 when certificate's days to expire > 90. Try again when certificate's days to expire <= 90
- **4011294**: CertificateID is invalid
- **4011331**: Certificate status is invalid
- **4028294**: This CertificateID is already queued for Renewal
- **4080167**: Due to recent CA/B Forum updates, it is no longer possible to purchase 4- and 5-year certificates after March 1, 2015. Please contact our support team.
- **4080167**: Due to revised CA/B Forum regulations, it is no longer possible to activate 3-, 4-, and 5-year certificates after March 1, 2018. Please contact our support team.
