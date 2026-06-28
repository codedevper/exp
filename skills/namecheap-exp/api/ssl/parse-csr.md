## namecheap.ssl.parseCSR

Parses the CSR

> Important: Only HTTP POST is supported for this method.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiuser&ApiKey=8a81d0b4124042459582746f6d575408&UserName=username&Command=namecheap.ssl.parseCSR&ClientIp=127.0.0.1&csr=-----BEGIN+CERTIFICATE+REQUEST-----%0AMIIDADCCAegCAQAwWzEUMBIGA1UEAwwLZXhhbXBsZS5jb20xFDASBgNVBAcMC0xv%0AcyBBbmdlbGVzMRMwEQYDVQQIDApDYWxpZm9ybmlhMQswCQYDVQQKDAJOQTELMAkG%0AA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDSCTC4mDLR%0AryXqhDrp9h30p6XHyhTXEjiLolcOCyhHa1Eokzp%2BnyhmE2SKtKL6Zf0xJmcUWr0T%0Auhd/VPbAcRgp/YuyipzOR1y1EWJoYKQT1UVp8yw7hcIPprReLoiWQM8dUigt1NNr%0AJlMP40RUZju8nEZWJoM%2B1D523vlhTIn/DojIfn0SvjF6riP/n4lraID6lbGmDVKv%0ALv4Fil41n/IQ5CcmNG6ROouw4VxOu4ltys0CSeV0dce33KVmiqosCMrqRTi8os0D%0AWF/LLmfXNzRg6Moi05Hw6SaZL4x2vz%2BR2u6C6fY9xKnePF5bsiKDgF41CrtfzhXA%0AeoM8IDQHAqg1AgMBAAGgYDBeBgkqhkiG9w0BCQ4xUTBPMAkGA1UdEwQCMAAwCwYD%0AVR0PBAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAWBgNVHREE%0ADzANggtleGFtcGxlLmNvbTANBgkqhkiG9w0BAQsFAAOCAQEAz8uyWS%2BCFbg0JYy1%0A0uLE6GlBgCsj1QZJQFd%2B9ftrToMp%2BPnsaK7O9FDKOARpF9dTzfqw3zvdjqcBteuY%0AcD3jbuN0QJxKF%2BtzbOBVtfNwlyC1T786ii36v3VHd10Si2mtZFdkZMJDjLXgoPBb%0Aiy%2BVrV%2B5sn2V5tfO15jW2/fHtGU5oaP60w0oJxBkaBnspb%2BQDgvTZAY8TFgoc5Oh%0A5MAJ48oJi79yAMeFf9e/vJrtBaR9vTFCP/4gKIIpl0I7a8CUR4L%2Bzr1k7ke2AANI%0As5IMg%2BcZpKmo2A8fWcueW/FCv9HHHqOb%2BlUYVtlKeDQxBShj5IPDI8Jv%2Bxv/ZeO9%0AOT98hQ%3D%3D%0A-----END+CERTIFICATE+REQUEST-----`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **csr** (String, max 2000, required): Certificate Signing Request. Note: It is obligatory to use URL-encoded data only in the API calls. In order to encode properly the CSR code, please use this online tool.
- **CertificateType** (String, max 50, optional*): Type of SSL Certificate. *This parameter is not mandatory, but we recommend specifying it for each call.

Possible values for CertificateType parameter: InstantSSL, PositiveSSL, PositiveSSL Wildcard, EssentialSSL, EssentialSSL Wildcard, InstantSSL Pro, PremiumSSL Wildcard, EV SSL, EV Multi Domain SSL, Multi Domain SSL, PositiveSSL Multi Domain, Unified Communications.

Available starting July 11, 2026: Standard SSL, Standard Wildcard SSL, SAN Certificate, High Assurance SSL, OV Wildcard SSL, OV Multi-domain SSL, EV Multi-Domain SSL.

## Example Response

```xml
<ApiResponse Status="OK">
    <Errors/>
    <Warnings/>
    <RequestedCommand>namecheap.ssl.parseCSR</RequestedCommand>
    <CommandResponse Type="namecheap.ssl.parseCSR">
        <SSLParseCSRResult>
            <CSRDetails>
                <CommonName>yourdomain.com</CommonName>
                <DomainName>yourdomain.com</DomainName>
                <Country>US</Country>
                <OrganisationUnit>IT</OrganisationUnit>
                <Organisation>Company</Organisation>
                <ValidTrueDomain>false</ValidTrueDomain>
                <State>California</State>
                <Locality>Los Angeles</Locality>
                <Email>example@yourdomain.com</Email>
                <DNSNames>yourdomain.com</DNSNames>
            </CSRDetails>
        </SSLParseCSRResult>
    </CommandResponse>
    <Server>WEB1-SANDBOX1</Server>
    <GMTTimeDifference>--5:00</GMTTimeDifference>
    <ExecutionTime>0.001</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Common name**: The hostname for which SSL is applied.
- **Domain name**: The domain name for which SSL is applied.
- **Country**: Country of the SSL applicant.
- **Organisation Unit**: Organisation unit of the SSL applicant.
- **Organisation**: Organisation of the SSL applicant.
- **ValidTrueDomain**: This value is returned by GeoTrust provider only. It indicates whether CSR parse was successful.
- **State**: State information of the SSL applicant.
- **Locality**: Locality information of the SSL applicant.
- **Email**: Email address of the SSL applicant.

## Error Codes

Specifies the error codes that might be returned from this method

- **2011300**: CertificateType is invalid
- **3022296**: Failed to retrive CSR details from provider
- **5050900**: Unhandled exceptions
