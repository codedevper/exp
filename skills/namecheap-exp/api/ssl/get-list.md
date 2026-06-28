## namecheap.ssl.getList

Returns a list of SSL certificates for a particular user

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.ssl.getList&ClientIp=192.168.1.109`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **ListType** (String, max 50, optional): Possible values are ALL, Processing, EmailSent, TechnicalProblem, InProgress, Completed, Deactivated, Active, Cancelled, NewPurchase, NewRenewal. (default: All)
- **SearchTerm** (String, max 70, optional): Keyword to look for on the SSL list
- **Page** (Number, max 10, optional): Page to return (default: 1)
- **PageSize** (Number, max 100, optional): Total number of SSL certificates to display in a page. Minimum value is 10 and maximum value is 100. (default: 20)
- **SortBy** (String, max 20, optional): Possible values are PURCHASEDATE, PURCHASEDATE_DESC, SSLTYPE, SSLTYPE_DESC, EXPIREDATETIME, EXPIREDATETIME_DESC, Host_Name, Host_Name_DESC.

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK">
  <Errors />
  <RequestedCommand>namecheap.ssl.getList</RequestedCommand>
  <CommandResponse Type="namecheap.ssl.getList">
    <SSLListResult>
      <SSL CertificateID="52546" HostName="domain12.com" SSLType="SSLCertificate1" PurchaseDate="09/25/2006" ExpireDate="09/25/2007" ActivationExpireDate="12/31/2008" IsExpiredYN="true" Status="inprogress" />
      <SSL CertificateID="52547" HostName="domain12x.com" SSLType="SSLCertificate2" PurchaseDate="09/26/2006" ExpireDate="09/26/2008" ActivationExpireDate="12/31/2009" IsExpiredYN="false" Status="inprogress" />
      <SSL CertificateID="52556" HostName="domainxy.com" SSLType="SSLCertificate3" PurchaseDate="10/17/2006" ExpireDate="10/17/2008" ActivationExpireDate="12/31/2009" IsExpiredYN="false" Status="new" />
    </SSLListResult>
    <Paging>
      <TotalItems>3</TotalItems>
      <CurrentPage>1</CurrentPage>
      <PageSize>20</PageSize>
    </Paging>
  </CommandResponse>
  <Server>SERVER</Server>
  <GMTTimeDifference>+5:30</GMTTimeDifference>
  <ExecutionTime>1.094</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **CertificateID**: The unique integer value that represents the SSL certificate
- **HostName**: The common name for which the SSL is used
- **SSLType**: Type of SSL
- **PurchaseDate**: The date at which the certificate is purchased
- **ExpireDate**: The date at which the certificate expires
- **ActivationExpireDate**: The date before which the certificate needs to be activated
- **IsExpiredYN**: The expiration status of the certificate
- **Status**: The current status of SSL certificate

## Error Codes

Specifies the error codes that might be returned from this method

- **5050900**: Unhandled exceptions
- **2011272**: ListType is invalid
