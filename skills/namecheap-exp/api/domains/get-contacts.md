> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.domains.getContacts
Gets contact information for the requested domain

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.getContacts&ClientIp=192.168.1.109&DomainName=domain1.com`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain to get contacts

## Example Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.domains.getContacts</RequestedCommand>
  <CommandResponse Type="namecheap.domains.getContacts">
    <DomainContactsResult Domain="domain1.com" domainnameid="3152456">
      <Registrant ReadOnly="false">
        <OrganizationName>NameCheap.com</OrganizationName>
        <JobTitle>Software Developer</JobTitle>
        <FirstName>John</FirstName>
        <LastName>Smith</LastName>
        <Address1>8939 S. cross Blvd</Address1>
        <Address2>ca 110-708</Address2>
        <City>california</City>
        <StateProvince>ca</StateProvince>
        <StateProvinceChoice>P</StateProvinceChoice>
        <PostalCode>90045</PostalCode>
        <Country>US</Country>
        <Phone>+1.6613102107</Phone>
        <Fax>+1.6613102107</Fax>
        <EmailAddress>john@gmail.com</EmailAddress>
        <PhoneExt>+1.6613102</PhoneExt>
      </Registrant>
      <Tech ReadOnly="false">
        <OrganizationName>NameCheap.com</OrganizationName>
        <JobTitle>Software Developer</JobTitle>
        <FirstName>John</FirstName>
        <LastName>Smith</LastName>
        <Address1>8939 S. cross Blvd</Address1>
        <Address2>ca 110-708</Address2>
        <City>california</City>
        <StateProvince>ca</StateProvince>
        <StateProvinceChoice>P</StateProvinceChoice>
        <PostalCode>90045</PostalCode>
        <Country>US</Country>
        <Phone>+1.6613102107</Phone>
        <Fax>+1.6613102107</Fax>
        <EmailAddress>john@gmail.com</EmailAddress>
        <PhoneExt>+1.6613102</PhoneExt>
      </Tech>
      <Admin ReadOnly="false">
        <OrganizationName>NameCheap.com</OrganizationName>
        <JobTitle>Software Developer</JobTitle>
        <FirstName>John</FirstName>
        <LastName>Smith</LastName>
        <Address1>8939 S. cross Blvd</Address1>
        <Address2>ca 110-708</Address2>
        <City>california</City>
        <StateProvince>ca</StateProvince>
        <StateProvinceChoice>P</StateProvinceChoice>
        <PostalCode>90045</PostalCode>
        <Country>US</Country>
        <Phone>+1.6613102107</Phone>
        <Fax>+1.6613102107</Fax>
        <EmailAddress>john@gmail.com</EmailAddress>
        <PhoneExt>+1.6613102</PhoneExt>
      </Admin>
      <AuxBilling ReadOnly="false">
        <OrganizationName>NameCheap.com</OrganizationName>
        <JobTitle>Software Developer</JobTitle>
        <FirstName>John</FirstName>
        <LastName>Smith</LastName>
        <Address1>8939 S. cross Blvd</Address1>
        <Address2>ca 110-708</Address2>
        <City>california</City>
        <StateProvince>ca</StateProvince>
        <StateProvinceChoice>P</StateProvinceChoice>
        <PostalCode>90045</PostalCode>
        <Country>US</Country>
        <Phone>+1.6613102107</Phone>
        <Fax>+1.6613102107</Fax>
        <EmailAddress>john@gmail.com</EmailAddress>
        <PhoneExt>+1.6613102</PhoneExt>
      </AuxBilling>
      <CurrentAttributes>
        <RegistrantNexus>C11</RegistrantNexus>
        <RegistrantNexusCountry />
        <RegistrantPurpose>P1</RegistrantPurpose>
      </CurrentAttributes>
      <WhoisGuardContact>
        <Registrant ReadOnly="true">
          <OrganizationName>Privacy service provided by Withheld for Privacy ehf</OrganizationName>
          <JobTitle>N/A</JobTitle>
          <FirstName>Withheld for</FirstName>
          <LastName>Privacy Purposes</LastName>
          <Address1>Kalkofnsvegur 2</Address1>
          <Address2 />
          <City>Reykjavik</City>
          <StateProvince>Capital Region</StateProvince>
          <StateProvinceChoice>Capital Region</StateProvinceChoice>
          <PostalCode>101</PostalCode>
          <Country>IS</Country>
          <Phone>+354.4212434</Phone>
          <Fax />
          <EmailAddress>95fabfd2c51b4307bsdfb626568.protect@withheldforprivacy.com</EmailAddress>
          <PhoneExt />
        </Registrant>
        <Tech ReadOnly="true">
          <OrganizationName>Privacy service provided by Withheld for Privacy ehf</OrganizationName>
          <JobTitle>N/A</JobTitle>
          <FirstName>Withheld for</FirstName>
          <LastName>Privacy Purposes</LastName>
          <Address1>Kalkofnsvegur 2</Address1>
          <Address2 />
          <City>Reykjavik</City>
          <StateProvince>Capital Region</StateProvince>
          <StateProvinceChoice>Capital Region</StateProvinceChoice>
          <PostalCode>101</PostalCode>
          <Country>IS</Country>
          <Phone>+354.4212434</Phone>
          <Fax />
          <EmailAddress>95fabfd2c51b4307bsdfb626568.protect@withheldforprivacy.com</EmailAddress>
          <PhoneExt />
        </Tech>
        <Admin ReadOnly="true">
          <OrganizationName>Privacy service provided by Withheld for Privacy ehf</OrganizationName>
          <JobTitle>N/A</JobTitle>
          <FirstName>Withheld for</FirstName>
          <LastName>Privacy Purposes</LastName>
          <Address1>Kalkofnsvegur 2</Address1>
          <Address2 />
          <City>Reykjavik</City>
          <StateProvince>Capital Region</StateProvince>
          <StateProvinceChoice>Capital Region</StateProvinceChoice>
          <PostalCode>101</PostalCode>
          <Country>IS</Country>
          <Phone>+354.4212434</Phone>
          <Fax />
          <EmailAddress>95fabfd2c51b4307bsdfb626568.protect@withheldforprivacy.com</EmailAddress>
          <PhoneExt />
        </Admin>
        <AuxBilling ReadOnly="true">
          <OrganizationName>Privacy service provided by Withheld for Privacy ehf</OrganizationName>
          <JobTitle>N/A</JobTitle>
          <FirstName>Withheld for</FirstName>
          <LastName>Privacy Purposes</LastName>
          <Address1>Kalkofnsvegur 2</Address1>
          <Address2 />
          <City>Reykjavik</City>
          <StateProvince>Capital Region</StateProvince>
          <StateProvinceChoice>Capital Region</StateProvinceChoice>
          <PostalCode>101</PostalCode>
          <Country>IS</Country>
          <Phone>+354.4212434</Phone>
          <Fax />
          <EmailAddress>95fabfd2c51b4307bsdfb626568.protect@withheldforprivacy.com</EmailAddress>
          <PhoneExt />
        </AuxBilling>
        <CurrentAttributes />
      </WhoisGuardContact>
    </DomainContactsResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.078</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **Domain**: The registered domain name
- **DomainnameID**: A unique integer value that represents the domain
- **Readonly**: Possible values: True, False. Indicates whether contact information can be edited or is read-only.

## Error Codes
- **2019166**: Domain not found
- **2016166**: Domain is not associated with your account
- **4019337**: Unable to retrieve domain contacts
- **3016166**: Domain is not associated with Enom
- **3019510**: This domain has expired/ was transferred out/ is not associated with your account
- **3050900**: Unknown response from provider
- **5050900**: Unknown exceptions
