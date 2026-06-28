## namecheap.ssl.resendfulfillmentemail

Resends the fulfilment email containing the certificate

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.ssl.resendfulfillmentemail&ClientIp=192.168.1.109&CertificateID=501513`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **CertificateID** (String, max 10, required): The unique certificate ID that you get after calling ssl.create command

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.ssl.resendFulfillmentEmail</RequestedCommand>
  <CommandResponse Type="namecheap.ssl.resendFulfillmentEmail">
    <SSLResendFulfillmentEmailResult ID="501513" IsSuccess="true" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>3.131</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **ID**: The unique integer value that represents the SSL certificate
- **IsSuccess**: Indicates whether the fulfillment email was resent successfully

## Error Codes

Specifies the error codes that might be returned from this method

- **2011294**: CertificateID is invalid
- **2011331**: Status is invalid
- **3022334**: Failed to resend fulfillment email
- **5050900**: Unhandled exceptions
- **3011299**: No administrator email is on file for this certificate
- **2010294**: Parameter CertificateID is Missing
