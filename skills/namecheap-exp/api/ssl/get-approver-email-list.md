## namecheap.ssl.getApproverEmailList

Gets approver email list for the requested domain

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.ssl.getApproverEmailList&ClientIp=192.168.1.109&domainname=domain.com&CertificateType=rapidssl`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain name to get the list
- **CertificateType** (String, max 50, required): Type of SSL certificate

Possible values for SSLType parameter: InstantSSL, PositiveSSL, PositiveSSL Wildcard, EssentialSSL, EssentialSSL Wildcard, InstantSSL Pro, PremiumSSL Wildcard, EV SSL, EV Multi Domain SSL, Multi Domain SSL, PositiveSSL Multi Domain, Unified Communications.

Available starting July 11, 2026: Standard SSL, Standard Wildcard SSL, SAN Certificate, High Assurance SSL, OV Wildcard SSL, OV Multi-domain SSL, EV Multi-Domain SSL.

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.ssl.getApproverEmailList</RequestedCommand>
  <CommandResponse Type="namecheap.ssl.getApproverEmailList">
    <GetApproverEmailListResult Domain="domain.com">
      <Domainemails/>
      <Genericemails>
        <email>postmaster@domain.com</email>
        <email>sslwebmaster@domain.com</email>
        <email>ssladministrator@domain.com</email>
        <email>mis@domain.com</email>
      </Genericemails>
    </GetApproverEmailListResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>--6:00</GMTTimeDifference>
  <ExecutionTime>3.615</ExecutionTime>
</ApiResponse>
```

## Response Parameters

The following items are the description of GetApproverEmailList Details section in the response.

- **DomainEmails**: Indicates domain Whois email address
- **GenericEmails**: Indicates generic email addresses for the domain
- **ManualEmails**: This value is returned by provider. The provider segregates emails and sends to us in groups. This value is hidden in Namecheap UI.

## Error Codes

Specifies the error codes that might be returned from this method

- **2011296**: CSR is invalid
- **2011300, 4011300**: CertificateType is invalid
- **2011166**: DomainName is invalid
- **3022295**: Failed to retrive ApproverEmail
- **5050900**: Unhandled exceptions
