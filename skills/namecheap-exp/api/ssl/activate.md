## namecheap.ssl.activate

Activates a purchased and non-activated SSL certificate by collecting and validating certificate request data and submitting it to Comodo.

> Both HTTP GET and POST are supported by this method.

Command can be run on purchased and non-activated SSLs in "Newpurchase" or "Newrenewal" status. Use getInfo and getList APIs to collect SSL status.

Only supported products can be activated. On July 11, 2026, we are switching our certificate provider to SSL.com, and Sectigo products will be deprecated. To maintain backward compatibility, requests for a deprecated product will not fail — an equivalent SSL type is automatically issued in its place. We recommend specifying one of the new product names when purchasing a certificate. See create API to learn supported products.

> Sandbox limitation: Activation process works for all certificates. However, an actual test certificate will not be returned for OV and EV certificates.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiuser&ApiKey=8a81d0b4124042459582746f6d575408&UserName=username&Command=namecheap.ssl.activate&ClientIp=127.0.0.1&CertificateID=1234567&csr=-----BEGIN+CERTIFICATE+REQUEST-----%0AMIIDADCCAegCAQAwWzEUMBIGA1UEAwwLZXhhbXBsZS5jb20xFDASBgNVBAcMC0xv%0AcyBBbmdlbGVzMRMwEQYDVQQIDApDYWxpZm9ybmlhMQswCQYDVQQKDAJOQTELMAkG%0AA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDSCTC4mDLR%0AryXqhDrp9h30p6XHyhTXEjiLolcOCyhHa1Eokzp%2BnyhmE2SKtKL6Zf0xJmcUWr0T%0Auhd/VPbAcRgp/YuyipzOR1y1EWJoYKQT1UVp8yw7hcIPprReLoiWQM8dUigt1NNr%0AJlMP40RUZju8nEZWJoM%2B1D523vlhTIn/DojIfn0SvjF6riP/n4lraID6lbGmDVKv%0ALv4Fil41n/IQ5CcmNG6ROouw4VxOu4ltys0CSeV0dce33KVmiqosCMrqRTi8os0D%0AWF/LLmfXNzRg6Moi05Hw6SaZL4x2vz%2BR2u6C6fY9xKnePF5bsiKDgF41CrtfzhXA%0AeoM8IDQHAqg1AgMBAAGgYDBeBgkqhkiG9w0BCQ4xUTBPMAkGA1UdEwQCMAAwCwYD%0AVR0PBAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAWBgNVHREE%0ADzANggtleGFtcGxlLmNvbTANBgkqhkiG9w0BAQsFAAOCAQEAz8uyWS%2BCFbg0JYy1%0A0uLE6GlBgCsj1QZJQFd%2B9ftrToMp%2BPnsaK7O9FDKOARpF9dTzfqw3zvdjqcBteuY%0AcD3jbuN0QJxKF%2BtzbOBVtfNwlyC1T786ii36v3VHd10Si2mtZFdkZMJDjLXgoPBb%0Aiy%2BVrV%2B5sn2V5tfO15jW2/fHtGU5oaP60w0oJxBkaBnspb%2BQDgvTZAY8TFgoc5Oh%0A5MAJ48oJi79yAMeFf9e/vJrtBaR9vTFCP/4gKIIpl0I7a8CUR4L%2Bzr1k7ke2AANI%0As5IMg%2BcZpKmo2A8fWcueW/FCv9HHHqOb%2BlUYVtlKeDQxBShj5IPDI8Jv%2Bxv/ZeO9%0AOT98hQ%3D%3D%0A-----END+CERTIFICATE+REQUEST-----&AdminEmailAddress=email%40example.com&WebServerType=apacheopenssl&ApproverEmail=HTTPCSRHASH&DNSNames=secure.example.com%2C+login.example.com&DNSApproverEmails=CNAMECSRHASH%2C+admin%40login.example.com`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.
>
> Note: It is obligatory to use URL-encoded data only in the API calls. In order to encode properly the CSR code, please use this online tool.

### Common parameters

These parameters are common for all types of certificates

- **CertificateID** (number, max 10, required): Unique identifier of SSL certificate to be activated
- **CSR** (string, max 32767, required): Certificate Signing Request (CSR)
- **AdminEmailAddress** (string, max 255, optional): Email address to send signed SSL certificate file to. Note: For SSL.com certificates (e.g. Standard SSL), certificate files are emailed by Namecheap. To avoid Namecheap communication being sent to your customer, omit this field and use getInfo. If omitted, SSL can only be obtained by calling getInfo.
- **WebServerType** (string, max 50, optional): Server software where SSL will be installed. Defines SSL certificate file format (PEM or PKCS7). Allowed values: apacheopenssl, apachessl, apacheraven, apachessleay, apache2, apacheapachessl, tomcat, cpanel, ipswitch, plesk, weblogic, website, webstar, nginx, iis, iis4, iis5, c2net, ibmhttp, iplanet, domino, dominogo4625, dominogo4626, netscape, zeusv3, cobaltseries, ensim, hsphere, other
- **UniqueValue** (string, max 20, optional): Unique identifier of SSL issue/reissue request. If not provided, it is created by the Namecheap system.

### Domain Control Validation (DCV)

Any domain in a certificate request must pass Domain Control Validation (DCV). This procedure ensures that a requested domain exists and that the certificate request is coming from an authorized source.

- **ApproverEmail** (string, max 255, optional*): Sets method to pass DCV through. Allowed values: one of the domain-related email addresses returned by getApproverEmailList API; HTTPCSRHASH, CNAMECSRHASH (multi-domain certificates only). * Becomes required if none of HTTPDCValidation or DNSDCValidation is supplied.
- **HTTPDCValidation** (bool, N/A, optional): Sets all domains in certificate request to be validated through HTTP DCV. This method is not available for Wildcard certificates.
- **DNSDCValidation** (bool, N/A, optional): Sets all domains in certificate requested domains to be validated through CNAME DCV.

Explanation of supported DCV methods:

Email - validate domain control by receiving an email from the Certificate Authority, clicking a link and entering a DCV code. Only emails returned by getApproverEmailList can be used. Using custom emails will result in error

HTTPDCValidation - validate domain control by uploading a text file for all hostnames included in the SSL as in http://yourdomain.com/.well-known/pki-validation/FileName.txt. Where yourdomain.com is a domain name specified in certificate request (in CSR Common Name and DNSNames), FileName.txt is the value returned in activate \<FileName\> API response, File content is returned in activate \<FileContent\> response

DNSDCValidation - validate domain control by creating a CNAME record in the requested domain(s) DNS settings as in _HostName.yourdomain.com CNAME Target.comodoca.com. Where actual HostName value is returned in activate \<HostName\> API response, yourdomain.com is a domain name specified in certificate request (in CSR Common Name and DNSNames), Actual Target value is in activate \<Target\> API response

### Multi-domain specific

These parameters are specific to multi-domain certificate types

- **DNSNames** (string, max 32767, optional): Specifies domain names to be included into the certificate request in addition to the Common Name in (CSR). Format: a comma-separated list of Fully-Qualified Domain Names. Number of items must be less or equal to the number of purchased additional domains (SANSCount). Use getInfo API to check SANSCount. Use purchaseMoreSans API to increase SANSCount.
- **DNSApproverEmails** (string, max 32767, optional*): Sets method to pass DCV through for each domain in the certificate request. * Becomes required if at least one domain is passed in DNSNames. Format: a comma-separated list of DCV methods that corresponds each domain supplied in DNSNames. One DCV method for each domain. Allowed values: one of the domain-related email addresses returned by getApproverEmailList API, HTTPCSRHASH, CNAMECSRHASH.

### OV & EV

These parameters are common to Organization Validation (OV) and Extended Validation (EV) certificate types.

- **AdminOrganizationName** (string, max 255, optional): Organization name to be validated by Comodo validation staff and encoded into the issued certificate. If not supplied, "O" (organization) value from CSR will be used.
- **OrganizationDepartment** (string, max 255, optional): Organizational Unit Name (e.g. company department)
- **AdminCountry** (string, max 2, optional*): Organization country name to be validated by Comodo validation staff and encoded into the issued certificate. * Not required for OV, required for EV. Format: Two-letter ISO 3166-1 alpha-2 country code. Restrictions apply.
- **AdminStateProvince** (string, max 255, optional*): Organization state or province to be validated by Comodo validation staff and encoded into the issued certificate. * Not required for OV, required for EV.
- **AdminCity** (string, max 255, optional*): Organization city or locality to be validated by Comodo validation staff and encoded into the issued certificate. * Not required for OV, required for EV.
- **AdminAddress1** (string, max 255, optional*): Organization street address to be validated by Comodo validation staff and encoded into the issued certificate. Not required for OV, required for EV.
- **AdminAddress2** (string, max 255, optional): Additional organization street address to be validated by Comodo validation staff and encoded into the issued certificate.
- **AdminPostalCode** (string, max 255, optional*): Organization postal code to be validated by Comodo validation staff and encoded into the issued certificate. * Not required for OV, required for EV.
- **AdminPhone** (string, max 32, optional): Organization phone number registered in any reputable online database used for certificate request verification callback
- **OrganizationDUNS** (string, max 20, optional): Organization's number in DUN & Bradstreet company database

### EV only

These parameters are common only to Extended Validation (EV) certificate types.

- **CompanyIncorporationCountry** (string, max 2, required): Country where the organization's legal existence was established (e.g., where it was incorporated). Format: Two-letter ISO 3166-1 alpha-2 country code.
- **CompanyIncorporationStateProvince** (string, max 255, optional): State or province where the organization's legal existence was established
- **CompanyIncorporationLocality** (string, max 100, optional): City or locality where the organization's legal existence was established
- **CompanyIncorporationDate** (string, max 100, optional): Date when the organization's legal existence was established
- **CompanyDBA** (string, max 100, optional): Organization's "Doing business as" name (assumed name / trade name)
- **CompanyRegistrationNumber** (string, max 100, optional): Number assigned to an organization by an Incorporating Agency

### OV only

These parameters are common only to Organization Validation (OV) certificate types.

- **OrganizationRepFirstName** (string, max 60, optional): Full-time organization representative's first name
- **OrganizationRepLastName** (string, max 60, optional): Full-time organization representative's last name
- **OrganizationRepTitle** (string, max 60, optional): Full-time organization representative's job title
- **OrganizationRepPhone** (string, max 255, optional): Full-time organization representative's phone number
- **OrganizationRepEmailAddress** (string, max 128, optional): Organization representative's contact email to send OV callback email to

## Example request (PositiveSSL Multi Domain, 3 domains total, 3 different DCV methods used)

`https://api.namecheap.com/xml.response?ApiUser=apiuser&ApiKey=8a81d0b4124042459582746f6d575408&UserName=username&ClientIp=127.0.0.1&Command=namecheap.ssl.activate&CertificateID=1234567&csr=-----BEGIN+CERTIFICATE+REQUEST-----+MIIDOjCCAiICAQAwgZ4xFDASBgNVBAMTC2dldC1yZWt0LnVzMQswCQYDVQQGEwJV+QTEUMBIGA1UECxMLU1NMIFN1cHBvcnQxEzARBgNVBAgTCktoYXJraXZza2ExJjAk+BgkqhkiG9w0BCQEWF2V4YW1wbGUuY29tQGV4YW1wbGUuY29tMRQwEgYDVQQKEwtF+eGFtcGxlIEluYzEQMA4GA1UEBxMHS2hhcmtpdjCCASIwDQYJKoZIhvcNAQEBBQAD+ggEPADCCAQoCggEBALZbEHVmINDE8y8W2gsM3KunAhGi4URNaKLsJ1FZiaeqjqy6+kLZdJyLlBR%2BCfRmJ98uX%2BMfevLmxcBCR6KWxkQ6GxBgPBAipWqVbLWk2ROYwEuKg+bvcFV7lZBJXXg6PugH3517y%2F6EAGhGnSE965NHXzdED6wHx49atUlEge5aDl2OiC+pxCepGwKf%2FYNT2IgNO0MCafLosWN78c6YKlILJwbcZbQhtj3kOg1jNRB32vXxYdZ+gCJBkrGWi6jnXJkwo9UC7mFyy9H5ckcFv1Psir88VsxmOJWYs6AYIopZIxVvv42m+tWa%2Fv0CdBhhY4iZtGb7ak1260Fapl2SumSAIcSMCAwEAAaBWMFQGCSqGSIb3DQEJ+DjFHMEUwCQYDVR0TBAIwADALBgNVHQ8EBAMCBeAwEwYDVR0lBAwwCgYIKwYBBQUH+AwEwFgYDVR0RBA8wDYILZ2V0LXJla3QudXMwDQYJKoZIhvcNAQELBQADggEBAH%2FE+trn0oDiFzGtaguMIlF7PSfy%2F%2B9e0iP8JystU1b013%2BE1xe2hZtxvW54voB2qJP1v+1W7uyZdPq4SBKsep192Z2appCTDy9PfjhcobKoCeNtpEACMC52UcnOfJeAg1NugX+%2FHu5X%2FF%2FCKMM4eqtYeu%2BVTJirDBSgTGGL9RhVVxDLoxJVH%2Fg0cOozr5Uwiux6bkh+ynmRUpAa0%2FRJQnFA1ojyep7J0NUKbxl5OnerSOjOZeksFtGrgrRrIpCLSGivDOUt+chYQ4Z4%2B9KQtpeaXV4Y09mr1R6htPk%2F8oWidlnW93lYm227DN4dmgf5MnfehhDXx+%2FCUN01oggVmgyMyoxr4%3D+-----END+CERTIFICATE+REQUEST-----&AdminEmailAddress=email%40example.com&WebServerType=apacheopenssl&ApproverEmail=HTTPCSRHASH&DNSNames=secure.example.com%2C+login.example.com&DNSApproverEmails=CNAMECSRHASH%2C+admin%40login.example.com`

## Example Response (multi-domain certificate, 3 domains total, 3 different DCV methods)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK" xmlns="http://api.namecheap.com/xml.response">
 <Errors/>
 <Warnings/>
 <RequestedCommand>namecheap.ssl.activate</RequestedCommand>
 <CommandResponse Type="namecheap.ssl.activate">
  <SSLActivateResult ID="953413" IsSuccess="true">
   <HttpDCValidation ValueAvailable="true">
    <DNS domain="secure.example.com">
     <FileName><![CDATA[4E3324A380B58813D5A2F32AA13A96F0.txt]]></FileName>
     <FileContent><![CDATA[6694010FAC8ED8F806F1EAD56A1A0478DE6620A256BB8C356A8DD2146B00E884 comodoca.com 5a955211b1f8c]]></FileContent>
    </DNS>
   </HttpDCValidation>
   <DNSDCValidation ValueAvailable="true">
    <DNS domain="login.example.com">
     <HostName><![CDATA[_4E3324A380B58813D5A2F32AA13A96F0.login.example.com]]></HostName>
     <Target><![CDATA[6694010FAC8ED8F806F1EAD56A1A0478.DE6620A256BB8C356A8DD2146B00E884.5a955211b1f8c.comodoca.com]]></Target>
    </DNS>
   </DNSDCValidation>
  </SSLActivateResult>
 </CommandResponse>
 <Server>5eda89c931f6</Server>
 <GMTTimeDifference>--5:00</GMTTimeDifference>
 <ExecutionTime>2.227</ExecutionTime>
</ApiResponse>
```

Activation success will result in certificate's status change to "PURCHASED"

Activation failure caused by an error from Namecheap will not change the certificate's status. Activation parameters can be corrected and activation retried at once

Activation failure caused by an error from Certificate Provider will change the certificate's change to "PURCHASEERROR". Contact support to have the status reset and retry activation

To actually get the certificate issued, have it sent to AdminEmailAddress or make it possible to download through getInfo API, certificate requestor must pass Domain Control Validation as well as organization validation for OV & EV certificates.

## Response Parameters

- **Status**: Status of command execution
- **Type**: Returns command that was run
- **ID**: ID of certificate that was activated
- **IsSuccess**: Indicates whether the SSL certificate was activated successfully
- **HTTPDCValidation ValueAvailable**: Indicates whether HTTP DCV was set as DCV method for at least one domain in request
- **DNSDCValidation ValueAvailable**: Indicates whether CNAME DCV was set as DCV method for at least one domain in request
- **DNS domain**: Domain for which the HTTP or CNAME DCV values should be used
- **FileName**: File name for the text file to be used for HTTP DCV
- **FileContent**: File content for the text file to be used for HTTP DCV
- **HostName**: Left (alias) CNAME record value to be used for CNAME DCV
- **Target**: Right (CNAME) record value to be used for CNAME DCV

## Error Codes

Specifies the error codes that might be returned from this method

- **2010214**: Parameter AdminEmailAddress is Missing
- **2010294**: Parameter CertificateID is Missing
- **2010295**: Approver email is required
- **2010295**: DNSApproverEmails is required
- **2010296**: Parameter CSR is Missing
- **2010326**: Parameter AdminAddress1 is missing
- **2010326**: Parameter AdminCity is missing
- **2010326**: Parameter AdminStateProvince is missing
- **2010326**: Parameter AdminCountry is missing
- **2010326**: Parameter AdminPostalCode is missing
- **2010396**: Either CSR Organization or AdminOrganizationName must be specified
- **2010667**: CompanyIncorporationCountry is Required for EV SSL certificates
- **2010767**: The additional domain names provided in DNSNames exceeded the purchased SANS.Only %1$d SANS can be activated for this certificate.
- **2010767**: The additional DNSNames and their corresponding approver emails are not equal
- **2011166**: Invalid Renewal Order Domain
- **2011212**: Parameter AdminPhone is Invalid
- **2011213**: Parameter AdminFax is Invalid
- **2011214**: Parameter AdminEmailAddress is Invalid
- **2011215**: Parameter AdminPhoneExt is Invalid
- **2011294**: Parameter CertificateID is Invalid
- **2011294**: CertificateID is invalid
- **2011295**: Approver email is invalid
- **2011296**: The CSR provided is invalid to generate a wildcard certificate. Please make sure that you generate a CSR with a Common Name (CN) that starts with '*.' (ex: *.yourdomain.com)
- **2011300**: Invalid SSL Certificate Selection
- **2011301**: We're sorry, the requested SSL type has been discontinued
- **2011388**: Parameter OrganizationRepPhone is TooLong
- **2011388**: Parameter OrganizationRepPhone is Invalid
- **2011389**: Parameter OrganizationRepFax is TooLong
- **2011389**: Parameter OrganizationRepFax is Invalid
- **2011668**: Parameter CompanyIncorporationDate is Invalid. Valid format is YYYY-MM-DD
- **2011767**: We have detected that either a common name or one of the additional domain fields contain one of the following unsupported elements: an Internet-accessible IP Address, Internal Domain Name or a TLD we do not yet support. If you believe this is a mistake - please contact support. Thank you.
- **2011784**: Both File-Based and DNS-Based authentication can't be enabled
- **2013201**: Parameter AdminOrganizationName is TooLong
- **2013202**: Parameter AdminJobTitle is TooLong
- **2013203**: Parameter AdminFirstName is TooLong
- **2013204**: Parameter AdminLastName is TooLong
- **2013207**: Parameter AdminCity is TooLong
- **2013208**: Parameter AdminStateProvince is TooLong
- **2013209**: Parameter AdminStateProvinceChoice is TooLong
- **2013210**: Parameter AdminPostalCode is TooLong
- **2013211**: Parameter AdminCountry is TooLong
- **2013212**: Parameter AdminPhone is TooLong
- **2013213**: Parameter AdminFax is TooLong
- **2013214**: Parameter AdminEmailAddress is TooLong
- **2013215**: Parameter AdminPhoneExt is TooLong
- **2013294**: Parameter CertificateID is TooLong
- **2013295**: Parameter ApproverEmail is TooLong
- **2013296**: Parameter CSR is TooLong
- **2013297**: Parameter WebServerType is TooLong
- **2013372**: Parameter OrganizationRepEmailAddress is TooLong
- **2013372**: Parameter OrganizationRepEmailAddress is Invalid
- **2013374**: Parameter OrganizationRepFirstName is TooLong
- **2013375**: Parameter OrganizationRepLastName is TooLong
- **2013376**: Parameter OrganizationRepTitle is TooLong
- **2013380**: Parameter OrganizationRepLegalName is TooLong
- **2013380**: Parameter OrganizationRepDUNS is TooLong
- **2013380**: Parameter OrganizationDepartment is TooLong
- **2013384**: Parameter OrganizationRepCity is TooLong
- **2013385**: Parameter OrganizationRepStateProvince is TooLong
- **2013386**: Parameter OrganizationRepPostalCode is TooLong
- **2013387**: Parameter OrganizationRepCountry is TooLong
- **2013388**: Parameter OrganizationPhone is TooLong
- **2013388**: Parameter OrganizationPhone is Invalid
- **2013389**: Parameter OrganizationFax is TooLong
- **2013389**: Parameter OrganizationFax is Invalid
- **2013667**: Parameter CompanyIncorporationCountry is TooLong
- **2013900**: Parameter AdminAddress1 is TooLong
- **2013900**: Parameter AdminAddress2 is TooLong
- **2013900**: Parameter OrganizationRepAddress1 is TooLong
- **2013900**: Parameter OrganizationRepAddress2 is TooLong
- **2013900**: Parameter OrganizationLegalName is TooLong
- **2013900**: Parameter OrganizationRepPostOfficeBox is TooLong
- **2013900**: Parameter OrganizationDepartment is TooLong
- **2013900**: Parameter OrganizationAddress1 is TooLong
- **2013900**: Parameter OrganizationAddress2 is TooLong
- **2013900**: Parameter OrganizationPOBox is TooLong
- **2013900**: Parameter OrganizationDUNS is TooLong
- **2013900**: Parameter OrganizationCity is TooLong
- **2013900**: Parameter OrganizationStateProvince is TooLong
- **2013900**: Parameter OrganizationCountry is TooLong
- **2013900**: Parameter OrganizationPostalCode is TooLong
- **2013900**: Parameter HTTPDCValidation is Invalid
- **2013900**: Parameter DNSDCValidation is Invalid
- **2013900**: Parameter CompanyRegistrationNumber is TooLong
- **2013900**: Parameter CompanyIncorporationStateProvince is TooLong
- **2013900**: Parameter CompanyIncorporationLocality is TooLong
- **2013900**: Parameter CompanyIncorporationDate is TooLong
- **2013900**: Parameter CompanyDBA is TooLong
- **2014296**: Duplicate Values in Common Names detected.Each Common Name should have a unique value.
- **2030296**: Invalid CSR - Wildcard not supported with this type of certificate.
- **3011295**: Error From Certificate Provider
- **3011295**: Approver email is not valid
- **3011295**: Approver email for the DomainName %1$s is not valid.Please provide the dnsapprover emails in the same order of dnsnames.
- **3011296**: Invalid CSR. %1$s
- **3022296**: Error occures while creating Http DCV based file
- **3022296**: Error occured while retrieving details for DNS based DCValidation.
- **3027295**: We are unable to process your order. Error Details: Internal error occurred;Invalid Status code: %1$s
- **4011294**: CertificateId is not valid
- **4011296**: CSR invalid error from provider
- **4011297**: Parameter AdminCountry %1$s is not a valid ISO 3166-1 alpha-2 country
- **4011297**: Parameter OrganizationRepCountry %1$s is not a valid ISO 3166-1 alpha-2 country
- **4011297**: Parameter OrganizationCountry %1$s is not a valid ISO 3166-1 alpha-2 country
- **4011297**: Parameter CompanyIncorporationCountry %1$s is not a valid ISO 3166-1 alpha-2 country
- **4011331**: Status is InValid.
- **4011331**: Unable to update DCV filerecords in database. Please try again.
- **4011380**: OrganizationRepDUNS must be integer
- **4011900**: OrganizationDUNS must be integer
- **4020294**: Activation period for this certificate has expired.
- **4024296**: Unable to update records in the database
- **4024510**: Unable to update records.
- **4050900**: Error occured from database
- **4080167**: Due to recent CA/B Forum updates, it is no longer possible to activate 4- and 5-year certificates after March 1, 2015. Please contact support.
- **4080167**: Due to revised CA/B Forum regulations, it is no longer possible to activate 3-, 4-, and 5-year certificates after March 1, 2018. Please contact our support team.
