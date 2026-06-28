## namecheap.users.create

Creates a new account at NameCheap under this ApiUser.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiuser&Command=namecheap.users.create&ClientIp=192.168.1.109&newusername=user12&newuserpassword=newuser12&EmailAddress=apisample@gmail.com&FirstName=John&LastName=Pearl&AcceptTerms=1&AcceptNews=0&JobTitle=software%20developer&Organization=NC&Address1=8939%20S.%20cross%20Blvd&Address2=high%20street&City=California&StateProvince=CA&Zip=90045&Country=US&Phone=+1.6613102107&Fax=+1.6613102107`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **NewUserName** (String, max 20, required): Username for the new user account
- **NewUserPassword** (String, max 20, required): Password for the new user account
- **EmailAddress** (String, max 128, required): Email address of the user
- **IgnoreDuplicateEmailAddress** (String, max 10, optional): By default, it ignores to check if the email address is already in use. (default: Yes)
- **FirstName** (String, max 60, required): First name of the user
- **LastName** (String, max 60, required): Last name of the user
- **AcceptTerms** (Number, max 1, required): Terms of agreement. The Value should be 1 for user account creation. (default: 1)
- **AcceptNews** (Number, max 1, optional): Possible values are 0 and 1. Value should be 1 if the user wants to recieve newsletters else it should be 0.
- **JobTitle** (String, max 60, optional): Job designation of the user
- **Organization** (String, max 60, optional): Organization of the user
- **Address1** (String, max 60, required): StreetAddress1 of the user
- **Address2** (String, max 60, optional): StreetAddress2 of the user
- **City** (String, max 60, required): City of the user
- **StateProvince** (String, max 60, required): State/Province of the user
- **Zip** (String, max 15, required): Zip/Postal code of the user
- **Country** (String, max 2, required): Two letter country code of the user
- **Phone** (String, max 20, required): Phone number in the format +NNN.NNNNNNNNNN
- **PhoneExt** (String, max 10, optional): PhoneExt of the user
- **Fax** (String, max 20, optional): Fax number in the format +NNN.NNNNNNNNNN

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <RequestedCommand>namecheap.users.create</RequestedCommand>
  <CommandResponse Type="namecheap.users.create">
    <UserCreateResult Success="true" UserId="75" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5</GMTTimeDifference>
  <ExecutionTime>0.085</ExecutionTime>
</ApiResponse>
```

## Error Codes

> Specifies the error codes that might be returned from this method

- **2011153**: Email address is invalid
- **2011163**: Phone is invalid
- **2011165**: Fax is invalid
- **2011151**: FirstName is invalid
- **2011152**: LastName is invalid
- **2011103**: UserName is invalid
- **2033153**: Email address is already in use
- **2015182**: The contact phone is invalid. The phone number format is +NNN.NNNNNNNNNN
- **4011331**: StatusCode for create user is invalid
- **4022103**: Failed to create user
