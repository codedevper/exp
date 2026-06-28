## namecheap.ssl.revokecertificate

Revokes a reissued SSL certificate

> Important: This function is currently supported for Comodo certificates only.

This command is needed to revoke SSL certificates that were reissued and replaced in order to avoid usage of outdated certs with potentially compromised keys.

## Example Request

`http://api.sandbox.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=123456123456&UserName=apiexample&Command=namecheap.ssl.revokecertificate&certificatetype=positivessl&ClientIp=192.168.1.1&CertificateID=8111110`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **CertificateID** (Number, max 10, required): ID of the certificate for you wish to revoke (default: 1)
- **CertificateType** (String, max 50, required): Type of SSL Certificate

Possible values for Type parameter: InstantSSL, PositiveSSL, PositiveSSL Wildcard, EssentialSSL, EssentialSSL Wildcard, InstantSSL Pro, PremiumSSL Wildcard, EV SSL, EV Multi Domain SSL, Multi Domain SSL, PositiveSSL Multi Domain, Unified Communications.

Available starting July 11, 2026: Standard SSL, Standard Wildcard SSL, SAN Certificate, High Assurance SSL, OV Wildcard SSL, OV Multi-domain SSL, EV Multi-Domain SSL.

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
<Errors />
<Warnings />
<RequestedCommand>namecheap.ssl.revokecertificate</RequestedCommand>
<CommandResponse Type="namecheap.ssl.revokecertificate">
<RevokeCertificateResult IsSuccess="true" ID="8111110" >
</CommandResponse>
<Server>API02</Server>
<GMTTimeDifference>--5:00</GMTTimeDifference>
<ExecutionTime>0.874</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **IsSuccess**: Indicates whether the certificate was revoked successfully
- **CertificateID**: A unique integer value that represents the certificate

## Error Codes

Specifies the error codes that might be returned from this method

- **4011331**: Status is invalid
- **2011300**: Wrong SSL certificate selection. The type provided is not supported by command.
