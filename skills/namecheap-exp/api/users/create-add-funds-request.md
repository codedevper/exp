## namecheap.users.createaddfundsrequest

Creates a request to add funds through a credit card.

3 steps to adding funds:

Step 1: Make your application call namecheap.users.createaddfundsrequest command (as shown in the example request given below).

Step 2: If your API call is executed successfully, you will see an XML response with Tokenid, ReturnURL and RedirectURL (as shown in the example response given below).

A Tokenid is a unique alphanumeric value. The Tokenid can be used to find out if funds were added successfully or if there was an error adding funds. The RedirectURL should be used to submit credit card details.

Step 3: Make your application to programmatically redirect customer to the RedirectURL so that the customer can submit credit card details.

Once payment is processed, you will be automatically redirected to the URL you've specified in the createaddfundsrequest call.

## Example Request

`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiuser&command=namecheap.users.createaddfundsrequest&clientip=192.168.1.109&paymenttype=creditcard&amount=40&returnurl=http://www.yourdomain.com/payments.asp`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **Username** (String, max 20, required): Username to add funds to
- **PaymentType** (String, max 30, required): Allowed payment value: Creditcard
- **Amount** (Number, max 10, required): Amount to add
- **ReturnUrl** (String, max 300, required): A valid URL to which the user should be redirected once payment is complete

## Example Response

```xml
<?xml version="1.0" encoding="utf-8"?>
<ApiResponse Status="OK">
<Errors/>
<Warnings/>
  <RequestedCommand>namecheap.users.createAddfundsRequest</RequestedCommand>
    <CommandResponse Type="namecheap.users.createAddfundsRequest">
     <Createaddfundsrequestresult TokenID="3b54569a58e04ca6bde7db944d328cb4"
      ReturnURL="http://www.namecheap.com/myaccount/addfunds/Payment.aspx?tokenid=3b545328cb4"/
      RedirectURL="https://www.namecheap.com/myaccount/addfunds/Payment.aspx?tokenid=3b545328cb4"/>
    </CommandResponse>
<Server>IMWS-A09</Server>
<GMTTimeDifference>+5:30</GMTTimeDifference>
<ExecutionTime>10.732</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **TokenID**: It is a unique ID that is created by API, it will redirect user to add funds page in user's account where they can add funds.
- **RedirectURL**: The URL that is used to submit credit card details.
- **ReturnURL**: The valid URL to which the user will be redirected after payment.

## Error Codes

> Specifies the error codes that might be returned from this method

- **2030343**: Parameter PaymentType is unsupported
- **2019103**: Username not found
- **2015312**: Minimum amount should be added
- **2013312**: Amount is out of range
- **2029341**: Credit card not approved
- **5050900**: Unknown Exceptions
