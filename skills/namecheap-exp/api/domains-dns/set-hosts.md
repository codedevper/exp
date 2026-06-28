## namecheap.domains.dns.setHosts

Sets DNS host records settings for the requested domain.

> We recommend you use HTTPPOST method when setting more than 10 hostnames.
>
> All host records that are not included into the API call will be deleted, so add them in addition to new host records.

> NOTE: The [ ] brackets are used to represent optional values (e.g.[1...n]). Do not include the [ ] brackets in your API requests.

## Example GET Request

`https://api.namecheap.com/xml.response?apiuser=demo&apikey=d41474b94e7d4536baabb074a09c96bd&username=demo&Command=namecheap.domains.dns.setHosts&ClientIp=122.178.155.204&SLD=domain51&TLD=com&HostName1=@&RecordType1=URL&Address1=http://www.namecheap.com&TTL1=100&HostName2=mynewcomp&RecordType2=A&Address2=12.56.67.78&TTL2=1000`

## Example POST Request

```json
{
  "authDetails":{
    "ParentUserType":"",
    "ParentUserId":0,
    "UserId":"",
    "UserName":"",
    "ClientIp":"",
    "EndUserIp":"",
    "AdminUserName":"",
    "DisableSecurityNotification":true,
    "AllowWhenDomainLocked":true,
    "ProceedWhenDomainLockedFlag":true,
    "DefaultChargeForUserName":"",
    "Roles":[
      "User"
    ]
  },
  "request":{
    "RequestValues":[
      {
        "Key":"HostName1",
        "Value":"@"
      },
      {
        "Key":"RecordType1",
        "Value":"A"
      },
      {
        "Key":"Address1",
        "Value":"213.87.128.103"
      },
      {
        "Key":"TTL1",
        "Value":"3600"
      },
      {
        "Key":"HostName2",
        "Value":"@"
      },
      {
        "Key":"RecordType2",
        "Value":"AAAA"
      },
      {
        "Key":"Address2",
        "Value":"8f1f:6f14:ca8e:e50c:6a3a:7f30:2814:5d70"
      },
      {
        "Key":"TTL2",
        "Value":"300"
      },
      {
        "Key":"HostName3",
        "Value":"@"
      },
      {
        "Key":"RecordType3",
        "Value":"CAA"
      },
      {
        "Key":"Address3",
        "Value":"0 issue \"iva.name\""
      },
      {
        "Key":"TTL3",
        "Value":"1800"
      },
      {
        "Key":"HostName4",
        "Value":"www"
      },
      {
        "Key":"RecordType4",
        "Value":"CNAME"
      },
      {
        "Key":"Address4",
        "Value":"chasity.biz."
      },
      {
        "Key":"TTL4",
        "Value":"1200"
      },
      {
        "Key":"HostName5",
        "Value":"dk1024-2012._domainkey.returnpath.com."
      },
      {
        "Key":"RecordType5",
        "Value":"TXT"
      },
      {
        "Key":"Address5",
        "Value":"Aut et sed sit quos aut harum omnis molestias asperiores."
      },
      {
        "Key":"TTL5",
        "Value":"1200"
      },
      {
        "Key":"HostName6",
        "Value":"ns"
      },
      {
        "Key":"RecordType6",
        "Value":"NS"
      },
      {
        "Key":"Address6",
        "Value":"gabriel.info."
      },
      {
        "Key":"TTL6",
        "Value":"3600"
      }
    ],
    "SLD":"msvec1664270616687",
    "TLD":"xyz"
  }
}
```

> All "Key", "Value", "TLD" and "SLD" values should be substituted with the actual values/domain & TLDs you want to set up.

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **SLD** (String, max 70, required): SLD of the domain to setHosts
- **TLD** (String, max 10, required): TLD of the domain to setHosts
- **HostName[1..n]** (String, required): Sub-domain/hostname to create the record for
- **RecordType[1..n]** (String, required): Possible values: A, AAAA, ALIAS, CAA, CNAME, MX, MXE, NS, TXT, URL, URL301, FRAME
- **Address[1..n]** (String, required): Possible values are URL or IP address. The value for this parameter is based on RecordType.
- **MXPref[1..n]** (String, required): MX preference for host. Applicable for MX records only.
- **EmailType** (String, required): Possible values are: MXE - to set up your custom MXE record. MX - to set up custom MX records of your mail provider. FWD - to set up MX records for our Free Email Forwarding service. OX - to set up MX records for our Private Email service.
- **TTL[1..n]** (String, optional): Time to live for all record types. Possible values: any value between 60 to 60000 (default: 1800)
- **Flag** (String, optional): Is an unsigned integer between 0 and 255. The flag value is an 8-bit number, the most significant bit of which indicates the criticality of understanding of a record by a CA. It's recommended to use '0'
- **Tag** (String, optional): A non-zero sequence of US-ASCII letters and numbers in lower case. The tag value can be one of the following values: issue — specifies the certification authority that is authorized to issue a certificate for the domain name or subdomain record used in the title; issuewild — specifies the certification authority that is allowed to issue a wildcard certificate for the domain name or subdomain record used in the title; iodef — specifies the e-mail address or URL (compliant with RFC 5070) a CA should use to notify a client if any issuance policy violation spotted by this CA.

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="https://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.dns.setHosts</RequestedCommand>
  <CommandResponse Type="namecheap.domains.dns.setHosts">
    <DomainDNSSetHostsResult Domain="domain51.com" IsSuccess="true" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>32.76</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Domain**: The domain name for which you are trying to set host records.
- **IsSuccess**: Indicates whether host records were set successfully.

## Error Codes

Specifies the error codes that might be returned from this method

- **2019166**: Domain not found
- **2016166**: Domain is not associated with your account
- **2030166**: Edit permission for domain is not supported
- **3013288**: Too many records
- **4013288**: Too many records
- **3031510**: Error From Enom when Errorcount <> 0
- **3050900**: Unknown error from Enom
- **4022288**: Unable to get nameserver list
