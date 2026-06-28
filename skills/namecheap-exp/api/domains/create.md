> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

UPDATE: Free PositiveSSL is no longer supported. Please do not send the AddFreePositiveSSL parameter.

## namecheap.domains.create
Registers a new domain

## Important
We recommend using the HTTP POST method for this command.

For successful registration of an IDN domain, you need to send the IdnCode parameter and provide the domain name in the Punycode format (Example: xn--sdkhjsdhfkdh.com), as we do not support native code.

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.create&ClientIp=192.168.1.109&DomainName=aa.us.com&Years=1&AuxBillingFirstName=John&AuxBillingLastName=Smith&AuxBillingAddress1=8939%20S.cross%20Blv&AuxBillingStateProvince=CA&AuxBillingPostalCode=90045&AuxBillingCountry=US&AuxBillingPhone=+1.6613102107&AuxBillingEmailAddress=john@gmail.com&AuxBillingOrganizationName=NC&AuxBillingCity=CA&TechFirstName=John&TechLastName=Smith&TechAddress1=8939%20S.cross%20Blvd&TechStateProvince=CA&TechPostalCode=90045&TechCountry=US&TechPhone=+1.6613102107&TechEmailAddress=john@gmail.com&TechOrganizationName=NC&TechCity=CA&AdminFirstName=John&AdminLastName=Smith&AdminAddress1=8939%cross%20Blvd&AdminStateProvince=CA&AdminPostalCode=9004&AdminCountry=US&AdminPhone=+1.6613102107&AdminEmailAddress=joe@gmail.com&AdminOrganizationName=NC&AdminCity=CA&RegistrantFirstName=John&RegistrantLastName=Smith&RegistrantAddress1=8939%20S.cross%20Blvd&RegistrantStateProvince=CS&RegistrantPostalCode=90045&RegistrantCountry=US&RegistrantPhone=+1.6613102107&RegistrantEmailAddress=jo@gmail.com&RegistrantOrganizationName=NC&RegistrantCity=CA&AddFreeWhoisguard=no&WGEnabled=no&GenerateAdminOrderRefId=False&IsPremiumDomain=True&PremiumPrice=206.7&EapFee=0`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain name to register
- **Years** (Number, max 2, required): Number of years to register (default: 2)
- **PromotionCode** (String, max 20, optional): Promotional (coupon) code for the domain
- **Nameservers** (String, optional): Comma-separated list of custom nameservers to be associated with the domain name
- **AddFreeWhoisguard** (String, max 10, optional): Adds free domain privacy for the domain (default: no)
- **WGEnabled** (String, max 10, optional): Enables free domain privacy for the domain (default: no)
- **IsPremiumDomain** (Boolean, max 10, optional): Indication if the domain name is premium
- **PremiumPrice** (Currency, max 20, optional): Registration price for the premium domain
- **EapFee** (Currency, max 20, optional): Purchase fee for the premium domain during Early Access Program (EAP)*
*Currently, Namecheap does not support registration of premium domains during EAP.
- **IdnCode** (String, max 100, optional): Code of Internationalized Domain Name (please refer to the note below)

Contact parameters — required for four contact types: Registrant, Tech, Admin, AuxBilling. Replace {Type} with each prefix:
- **{Type}OrganizationName** (String, max 255, optional): Organization of the {Type} user
- **{Type}JobTitle** (String, max 255, optional): Job title of the {Type} user
- **{Type}FirstName** (String, max 255, required): First name of the {Type} user
- **{Type}LastName** (String, max 255, required): Second name of the {Type} user
- **{Type}Address1** (String, max 255, required): Address1 of the {Type} user
- **{Type}Address2** (String, max 255, optional): Address2 of the {Type} user
- **{Type}City** (String, max 50, required): City of the {Type} user
- **{Type}StateProvince** (String, max 50, required): State/Province of the {Type} user
- **{Type}StateProvinceChoice** (String, max 50, optional): StateProvinceChoice of the {Type} user
- **{Type}PostalCode** (String, max 50, required): PostalCode of the {Type} user
- **{Type}Country** (String, max 50, required): Country of the {Type} user
- **{Type}Phone** (String, max 50, required): Phone number in the format +NNN.NNNNNNNNNN
- **{Type}PhoneExt** (String, max 50, optional): PhoneExt of the {Type} user
- **{Type}Fax** (String, max 50, optional): Fax number in the format +NNN.NNNNNNNNNN
- **{Type}EmailAddress** (String, max 255, required): Email address of the {Type} user

Billing contact (all optional):
- **BillingFirstName** (String, max 255): First name of the Billing user
- **BillingLastName** (String, max 255): Second name of the Billing user
- **BillingAddress1** (String, max 255): Address1 of the Billing user
- **BillingAddress2** (String, max 255): Address2 of the Billing user
- **BillingCity** (String, max 50): City of the Billing user
- **BillingStateProvince** (String, max 50): State/Province of the Billing user
- **BillingStateProvinceChoice** (String, max 50): StateProvinceChoice of the Billing user
- **BillingPostalCode** (String, max 50): PostalCode of the Billing user
- **BillingCountry** (String, max 50): Country of the Billing user
- **BillingPhone** (String, max 50): Phone number in the format +NNN.NNNNNNNNNN
- **BillingPhoneExt** (String, max 50): PhoneExt of the Billing user
- **BillingFax** (String, max 50): Fax number in the format +NNN.NNNNNNNNNN
- **BillingEmailAddress** (String, max 255): Email address of the Billing user
- **BillingTaxNumber** (String, max 25): Tax number of the Billing user

Extended attributes — required for .us, .eu, .ca, .co.uk, .org.uk, .me.uk, .nu , .com.au, .net.au, .org.au, .es, .nom.es, .com.es, .org.es, .de, .fr TLDs only.

## Possible values for the IdnCode parameter
afr, alb, ara, arg, arm, asm, ast, ave, awa, aze, bak, bal, ban, baq, bas, bel, ben, bho, bos, bul, bur, car, cat, che, chi, chv, cop, cos, cze, dan, div, doi, dut, eng, est, fao, fij, fin, fre, fry, geo, ger, gla, gle, gon, gre, guj, heb, hin, hun, inc, ind, inh, isl, ita, jav, jpn, kas, kaz, khm, kir, kor, kur, lao, lav, lit, ltz, mal, mkd, mlt, mol, mon, mri, msa, nep, nor, ori, oss, pan, per, pol, por, pus, raj, rum, rus, san, scr, sin, slo, slv, smo, snd, som, spa, srd, srp, swa, swe, syr, tam, tel, tgk, tha, tib, tur, ukr, urd, uzb, vie, wel, yid

## Example Response
```xml
<?xml version="1.0" encoding="utf-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
<Errors/>
<Warnings/>
<RequestedCommand>namecheap.domains.create</RequestedCommand>
<CommandResponse Type="namecheap.domains.create">
<DomainCreateResult Domain="aa.us.com" Registered="true" ChargedAmount="200.8700" DomainID="103877" OrderID="22158" TransactionID="51284" WhoisguardEnable="false" NonRealTimeDomain="false"/>
</CommandResponse>
<Server>NC-DEV07</Server>
<GMTTimeDifference>+2:59</GMTTimeDifference>
<ExecutionTime>29.914</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **Domain**: Domain name that you are trying to register.
- **Registered**: Possible responses: True, False. Indicates whether the domain was registered.
- **ChargedAmount**: Total amount charged for registration.
- **DomainID**: Unique integer value that represents the domain.
- **OrderID**: Unique integer value that represents the order.
- **TransactionID**: Unique integer value that represents the transaction.
- **WhoisguardEnable**: Possible responses: True, False. Indicates whether domain privacy protection is enabled for the domain.
- **NonRealTimeDomain**: Possible responses: True, False. Indicates whether the domain registration is instant (real-time) or not.

## Error Codes
- **2033409**: Possibly a logical error at the authentication phase. The order chargeable for the Username is not found
- **2033407, 2033270**: Cannot enable domain privacy when AddWhoisguard is set to NO
- **2015182**: Contact phone is invalid. The phone number format is +NNN.NNNNNNNNNN
- **2015267**: EUAgreeDelete option should not be set to NO
- **2011170**: Validation error from PromotionCode
- **2011280**: Validation error from TLD
- **2015167**: Validation error from Years
- **2030280**: TLD is not supported in API
- **2011168**: Nameservers are not valid
- **2011322**: Extended Attributes are not valid
- **2010323**: Check the required field for billing domain contacts
- **2528166**: Order creation failed
- **3019166, 4019166**: Domain not available
- **3031166**: Error while getting information from the provider
- **3028166**: Error from Enom ( Errcount <> 0 )
- **3031900**: Unknown response from the provider
- **4023271**: Error while adding a free PositiveSSL for the domain
- **3031166**: Error while getting a domain status from Enom
- **4023166**: Error while adding a domain
- **5050900**: Unknown error while adding a domain to your account
- **4026312**: Error in refunding funds
- **5026900**: Unknown exceptions error while refunding funds
- **2515610**: Prices do not match
- **2515623**: Domain is premium while considered regular or is regular while considered premium
- **2005**: Country name is not valid
