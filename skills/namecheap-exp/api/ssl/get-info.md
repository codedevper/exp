## namecheap.ssl.getInfo

Retrieves information about the requested SSL certificate

## Example Request

`http://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=abcdef16ddaa4451113320f3446456ceaf7&UserName=apiexample&Command=namecheap.ssl.getinfo&certificateID=743585&ClientIp=192.168.1.1&returncertificate=true&returntype=individual`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **CertificateID** (Number, max 10, required): Unique ID of the SSL certificate

Obtaining the certificate:

If wish to have a certificate in the appropriate format returned for active certificate, you should use the following parameters:

- **Returncertificate** (String, max 10, optional): A flag for returning certificate in response
- **Returntype** (String, max 10, optional*): Type of returned certificate. Parameter takes "Individual" (for X.509 format) or "PKCS7" values. *Parameter is required, if Returncert was set to true.

## Example Response

```xml
<ApiResponse Status="OK">
<Errors />
<Warnings />
<RequestedCommand>namecheap.ssl.getInfo</RequestedCommand>
<CommandResponse Type="namecheap.ssl.getInfo">
 <SSLGetInfoResult Status="active" StatusDescription="Certificate is Active." Type="positivessl" IssuedOn="1/20/2014" Expires="1/20/2015" ActivationExpireDate="" OrderId="10439081"ReplacedBy="747253" SANSCount="0">
 <CertificateDetails>
 <CSR>
 <![CDATA[
-----BEGIN CERTIFICATE REQUEST-----
MIIC3jCCAcYCAQAwgZgxGTAXBgNVBAMMEGxhbWFyaW9vbmVhbC5jb20xFTATBgNV
BAoMDGxhbWFyaW9vbmVhbDERMA8GA1UECwwIc2VjdXJpdHkxCzAJBgNVBAcMAkto
5eu2KxLOJtaRL++ur5foTTe9
-----END CERTIFICATE REQUEST-----
]]>
 </CSR>
<ApproverEmail>example@domain.com</ApproverEmail>
<CommonName>domain.com</CommonName>
<AdministratorName>John Doe</AdministratorName>
<AdministratorEmail>example@domain.com</AdministratorEmail>
 <Certificates CertificateReturned="true" ReturnType="Individual">
 <Certificate>
 <![CDATA[
-----BEGIN CERTIFICATE-----
MIIFBDCCA+ygAwIBAgIQJXnrY7043QfanPVrLcKPczANBgkqhkiG9w0BAQUFADBz
MQswCQYDVQQGEwJHQjEbMBkGA1UECBMSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYD
LDGeQmFIuHBMs878DkdOKZUsR4Cs7AzcYOxRWZUuAHpDrHQQiR5QHTg6Mc2ZtFvr
QwQg7hdY7gQDuoC94Ndm/2LrNbY9ZFz4dCV2+E8BYBsL0GlPMlSKxw==
-----END CERTIFICATE-----
]]>
 </Certificate>
 <CaCertificates>
<Certificate Type="INTERMEDIATE">
 <Certificate>
 <![CDATA[
-----BEGIN CERTIFICATE-----
MIIENjCCAx6gAwIBAgIBATANBgkqhkiG9w0BAQUFADBvMQswCQYDVQQGEwJTRTEU
MBIGA1UEChMLQWRkVHJ1c3QgQUIxJjAkBgNVBAsTHUFkZFRydXN0IEV4dGVybmFs
c4g/VhsxOBi0cQ+azcgOno4uG+GMmIPLHzHxREzGBHNJdmAPx/i9F4BrLunMTA5a
mnkPIAou1Z5jJh5VkpTYghdae9C8x49OhgQ=
-----END CERTIFICATE-----
]]>
 </Certificate>
</Certificate>
<Certificate Type="INTERMEDIATE">
 <Certificate>
 <![CDATA[
-----BEGIN CERTIFICATE-----
MIIE5TCCA82gAwIBAgIQB28SRoFFnCjVSNaXxA4AGzANBgkqhkiG9w0BAQUFADBv
uuGtm87fM04wO+mPZn+C+mv626PAcwDj1hKvTfIPWhRRH224hoFiB85ccsJP81cq
cdnUl4XmGFO3
-----END CERTIFICATE-----
]]>
 </Certificate>
</Certificate>
 </CaCertificates>
 </Certificates>
 </CertificateDetails>
 <Provider>
<OrderID>111111</OrderID>
<Name>COMODO</Name>
 </Provider>
 </SSLGetInfoResult>
</CommandResponse>
<Server>API01</Server>
<GMTTimeDifference>--5:00</GMTTimeDifference>
<ExecutionTime>0.542</ExecutionTime>
 </ApiResponse>
```

## Status Attribute Values

- **Active**: Certificate is activated
- **Newpurchase**: This is the initial status after a certificate is purchased. After this, you need to use namecheap.ssl.activate command to activate the certificate.
- **Newrenewal**: This is the initial stage after a 'renewal' certificate is purchased. After this, you need to use namecheap.ssl.activate command to activate the certificate.
- **Purchased**: Comodo certificate is activated and awaiting issuance.
- **Purchaseerror**: Error while processing the certificate.
- **Cancelled**: Certificate is canceled.
- **Replaced**: Certificate was replaced after a reissue of the certificate.

## Response Parameters

- **Status**: Current status of the SSL certificate
- **StatusDescription**: Description of the current status
- **Type**: Type of SSL
- **Issuedon**: Date on which the certificate is issued
- **Expires**: Date on which the certificate expires
- **ActivationExpireDate**: The date before which the certificate needs to be activated
- **OrderID**: A unique integer value that represents the Namecheap Order ID. (There is a sub-node \<Provider\> in the response. If we have a provider Order ID, it will be displayed in this section)
- **ReplacedBy**: Indicates reissued certificate ID
- **SANSCount**: Indicates the number of add-on domains

## Error Codes

Specifies the error codes that might be returned from this method

- **2011294**: CertificateID is invalid
- **5050900**: Unhandled exceptions
