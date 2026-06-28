## namecheap.users.resetPassword

When you call this API, a link to reset password will be emailed to the end user's profile email id. The end user needs to click on the link to reset password.

> NOTE: UserName should be omitted for this API call. All other Global parameters must be included.

## Example Requests

`https://api.namecheap.com/xml.response?APIUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&clientip=61.11.95.68&command=namecheap.users.resetpassword&findby=username&findbyvalue=sampleuser`

`https://api.namecheap.com/xml.response?APIUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&clientip=61.11.95.68&command=namecheap.users.resetpassword&findby=username&findbyvalue=sampleuser&URLPattern=http://www.somedomain.com/ownformat/resetpassword/[RESETCODE]&EmailFromName=sampleusername&EmailFrom=sampleuser@somedomain.com`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **FindBy** (String, max 20, required): Possible values: EMAILADDRESS, DOMAINNAME, USERNAME
- **FindByValue** (String, max 20, required): The username/email address/domain of the user
- **EmailFromName** (String, max 20, optional): Enter a different value to overwrite the default value (default: namecheap.com)
- **EmailFrom** (String, max 20, optional): Enter a different value to overwrite the default value (default: support@namecheap.com)
- **URLPattern** (String, max 20, optional): Enter a different URL to overwrite namecheap.com (default: http://namecheap.com [RESETCODE])

## Example Response

```xml
<?xml version="1.0" encoding="utf-8"?>
<ApiResponse Status="OK" xmlns="http://api.namecheap.com/xml.response">
 <Errors />
 <RequestedCommand>namecheap.users.resetPassword</RequestedCommand>
 <CommandResponse Type="namecheap.users.resetPassword">
   <UserResetPasswordResult Success="true">
     <Email>contact@useremail.com</Email>
   </UserResetPasswordResult>
 </CommandResponse>
<Server>SERVER159</Server>
<GMTTimeDifference>--5:00</GMTTimeDifference>
<ExecutionTime>0.742</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **Success**: Indicates whether the password was reset successfully

## Error Codes

> Specifies the error codes that might be returned from this method

- **2011315**: FindBy is invalid
- **4027153**: Failed to send email
- **4022335**: Unable to reset password
- **5050900**: Unknown exceptions
