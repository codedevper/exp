## namecheap.ssl.editDCVMethod

Sets domain control validation (DCV) method(s) for domain(s) in certificate request

> Both HTTP GET and POST are supported by this method.

Can be used as 'retry' mechanism, by setting the same (currently set) DCV method(s) for domain(s) in certificate request

## Example request for multi-domain certificate

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=abcdef16ddaa4451113320f3446456ceaf7&UserName=apiexample&ClientIp=192.168.1.1&Command=namecheap.ssl.editdcvmethod&certificateID=743585&DNSNames=example.com,example.net,example.org&DCVMethods=CNAME_CSR_HASH,HTTP_CSR_HASH,admin@example.org`

## Example request for single-domain or wildcard certificate

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=abcdef16ddaa4451113320f3446456ceaf7&UserName=apiexample&ClientIp=192.168.1.1&Command=namecheap.ssl.editdcvmethod&certificateID=743585&DCVMethod=HTTP_CSR_HASH`

## Request Parameters

> Global parameters are not shown here (for clarity), but they should be present in all requests.

- **CertificateID** (Number, max 10, required): Unique ID of the SSL certificate to set new DCV method for
- **DCVMethod** (String, max 255, required): DCV method to validate domain control with. DCVMethod should be used when changing DCV method for single-domain certificates.
- **DNSNames** (String, max 3500, required): Comma-separated list of domain names to set new DCV method for. DNSNames and DCVMethods should be used when changing DCV method for multi-domain certificates.
- **DCVMethods** (String, max 3500, required): Comma-separated list of DCV methods to validate domain control with. DNSNames and DCVMethods should be used when changing DCV method for multi-domain certificates.

editDCVMethod can only be used when certificate activation or reissue was started but the certificate is not issued yet, (certificate getInfo status "PURCHASED"). Running this command on certificates with other status will produce a "Status is invalid" error.

Possible values for DCVMethod and DCVMethods and description of methods:

- HTTP_CSR_HASH - validate domain control by uploading a text file to the site's public directory. File name and file content are returned in editDCVMethod response \<FileName\> and \<FileContent\>. This method is not available for Wildcard certificates.
- CNAME_CSR_HASH - validate domain control by creating a CNAME record in the domain's DNS settings. CNAME record values are returned in editDCVMethod response \<HostName\> and \<Target\>.
- admin@example.com - validate domain control by receiving an email from the Certificate Authority, clicking a link and entering a DCV code. Only emails returned by getApproverEmailList can be used. Using custom emails will result in error.

Learn more on domain control validation (DCV) →

## Example response for multi-domain certificate

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK" xmlns="http://api.namecheap.com/xml.response">
 <Errors/>
 <Warnings/>
 <RequestedCommand>namecheap.ssl.editDCVMethod</RequestedCommand>
 <CommandResponse Type="namecheap.ssl.editDCVMethod">
  <SSLEditDCVMethodResult ID="897918" IsSuccess="true">
   <HttpDCValidation ValueAvailable="true">
    <FileName><![CDATA[2689665E8233592B5981D44FCD1F38F9.txt]]></FileName>
    <FileContent><![CDATA[DBE4528C4E70301286E5368B52760B385341BA3C8534537F8C2F5AC674230066 comodoca.com 59a7e83a9404f]]></FileContent>
   </HttpDCValidation>
   <DNSDCValidation ValueAvailable="true">
    <HostName><![CDATA[_2689665E8233592B5981D44FCD1F38F9.example.com]]></HostName>
    <Target><![CDATA[DBE4528C4E70301286E5368B52760B38.5341BA3C8534537F8C2F5AC674230066.59a7e83a9404f.comodoca.com]]></Target>
   </DNSDCValidation>
   <Domains>
    <Domains Name="example.com" IsSuccess="true" DCVMethodSet="CNAME_CSR_HASH"/>
    <Domains Name="example.net" IsSuccess="true" DCVMethodSet="HTTP_CSR_HASH"/>
    <Domains Name="example.org" IsSuccess="true" DCVMethodSet="admin@example.org"/>
   </Domains>
  </SSLEditDCVMethodResult>
 </CommandResponse>
 <Server>d7855d416639</Server>
 <GMTTimeDifference>--5:00</GMTTimeDifference>
 <ExecutionTime>1.634</ExecutionTime>
</ApiResponse>
```

## Example response for single-domain or wildcard certificate

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse Status="OK" xmlns="http://api.namecheap.com/xml.response">
 <Errors/>
 <Warnings/>
 <RequestedCommand>namecheap.ssl.editDCVMethod</RequestedCommand>
 <CommandResponse Type="namecheap.ssl.editDCVMethod">
  <SSLEditDCVMethodResult ID="893024" IsSuccess="true">
   <HttpDCValidation ValueAvailable="true">
    <FileName><![CDATA[2689665E8233592B5981D44FCD1F38F9.txt]]></FileName>
    <FileContent><![CDATA[DBE4528C4E70301286E5368B52760B385341BA3C8534537F8C2F5AC674230066 comodoca.com 59a7ea09227de]]></FileContent>
   </HttpDCValidation>
   <DNSDCValidation ValueAvailable="false">
    <HostName><![CDATA[]]></HostName>
    <Target><![CDATA[]]></Target>
   </DNSDCValidation>
   <Domains/>
  </SSLEditDCVMethodResult>
 </CommandResponse>
 <Server>d7855d416639</Server>
 <GMTTimeDifference>--5:00</GMTTimeDifference>
 <ExecutionTime>0.930</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **ID**: The unique integer value that represents the SSL certificate
- **IsSuccess**: Indicates whether the SSL certificate is activated
- **HttpDCValidation ValueAvailable**: Indicates whether HTTP_CSR_HASH was set as DCV method for at least one domain. Possible values: True, False.
- **FileName**: File name for the text file to be used for HTTP DCV
- **FileContent**: File content for the text file to be used for HTTP DCV
- **DNSDCValidation ValueAvailable**: Indicates whether CNAME_CSR_HASH was set as DCV method for at least one domain. Possible values: True, False.
- **HostName**: Values for the left part of CNAME record (alias)
- **Target**: Values for the right part of CNAME record (CNAME)
- **Domains**: Block that list domains in a multi-domain certificate request, command execution result and DCV method set for each domain
- **Domains Name**: Domain name in a multi-domain certificate affected by editDCVMethod command execution
- **IsSuccess**: Indicates whether DCV method change was successful
- **DCVMethodSet**: Indicates DCV method set for the domain

## Error Codes

- **2010294**: Parameter CertificateID is Missing
- **2013294**: Parameter CertificateID is TooLong
- **2011294**: Parameter CertificateID is Invalid
- **2013294**: Parameter DNSNames is TooLong
- **2013294**: Parameter DCVMethod is TooLong
- **2013294**: Parameter DCVMethods is TooLong
- **2010784**: Insufficient data to edit dcvalidation method
- **2011784**: DNSNames or DCVMethods cannot be sent along with DCVMethod
- **2010784**: DNSNames or DCVMethods is missing to edit dcv method for this multi domain certificate
- **2011767**: There is no dnsnames or mismatch in the dnsnames provided during previous activation.Please check dnsnames and try again.
- **2010784**: DCVMethod is missing to edit dcv method for this single domain certificate
- **2011331**: Status is Invalid
- **2010767**: The DNSNames and their corresponding DCVMethods are not equal
- **3011295**: DCVMethod is invalid
- **3011784**: DCVMethod for the DomainName %1$s is not valid.Please provide valid DCVMethod in DCVMethods parameter for this DomainName
- **2011301**: We're sorry, the requested SSL type has been discontinued
- **3011295**: Error From Certificate Provider
- **3011784**: Due to CA/B Forum regulations, HTTP DCV method is not allowed for Wildcard certificates
- **4011331**: Unable to update DCV filerecords in database. Please try again.
