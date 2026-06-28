> IMPORTANT: Our privacy service provider recently changed to WithheldforPrivacy. We want to avoid service interruption for our API users, so please note that in some cases, you may still see Whoisguard in the API parameter names.

## namecheap.whoisguard.renew

Renews domain privacy protection.

## Example Request

`http://api.namecheap.com/xml.response?apiuser=demo&apikey=d41474b94e7d4536baabb074a09c96bd&username=demo&Command=Namecheap.Whoisguard.renew&Whoisguardid=38495&Years=1&ClientIp=192.168.1.109`

## Request Parameters

> Global parameters are not shown here for clarity, but should be present in all requests

- **WhoisguardID** (String, max 10, required): Domain privacy ID to renew
- **Years** (Number, max 9, required): Number of years to renew (default: 1)
- **PromotionCode** (Number, max 20, optional): Promotional (coupon) code for renewing the domain privacy

## Example Response

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.whoisguard.renew</RequestedCommand>
   <CommandResponse Type="namecheap.whoisguard.renew">
      <WhoisguardRenewResult WhoisguardId="38495" Years="1" Renew="true" OrderId="580938" TransactionId="884255" ChargedAmount="6.8000"/>
   </CommandResponse>
  <Server>API01</Server>
  <GMTTimeDifference>--5:00</GMTTimeDifference>
  <ExecutionTime>0.029</ExecutionTime>
</ApiResponse>
```

## Response Parameters

- **WhoisGuard ID**: A unique integer value that represents the domain privacy subscription.
- **Years**: Number of years to renew
- **Renew**: Renewal status
- **OrderId**: A unique integer value that represents the Order
- **TransactionId**: A unique integer that represents the Transaction
- **ChargedAmount**: Amount charged for the domain privacy renewal.

## Error Codes

Specifies the error codes that might be returned from this method

- **2011167**: No of years should be max of 9
- **2029331**: This domain privacy is not allowed to renew before 30 days of its expiration. So cannot Renew
- **2528268**: Order creation failed / validation error
- **5050900**: Unhandled exception
