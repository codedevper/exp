## namecheap.domains.reactivate
Reactivates an expired domain

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.reactivate&ClientIp=192.168.1.109&DomainName=models.tv&YearsToAdd=1&IsPremiumDomain=true&premiumprice=650`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain name to reactivate
- **PromotionCode** (String, max 70, optional): Promotional (coupon) code for reactivating the domain
- **YearsToAdd** (Number, max 2, optional): Number of years after expiry
- **IsPremiumDomain** (Boolean, max 10, optional): Indication if the domain name is premium
- **PremiumPrice** (Currency, max 20, optional): Reactivation price for the premium domain

## Example Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.domains.reactivate</RequestedCommand>
  <CommandResponse Type="namecheap.domains.reactivate">
    <DomainReactivateResult Domain="models.tv" IsSuccess="true" ChargedAmount="650.0000" OrderID="23569" TransactionID="25080" />
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+5:00</GMTTimeDifference>
  <ExecutionTime>12.915</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **DomainName**: Domain name that you are trying to reactivate
- **IsSuccess**: Indicates whether the domain was reactivated successfully
- **ChargedAmount**: Total amount charged for reactivation
- **OrderID**: Unique integer value that represents the order
- **TransactionID**: Unique integer value that represents the transaction

## Error Codes
- **2033409**: Possibly a logical error at the authentication phase. The order chargeable for the Username is not found.
- **2019166**: Domain not found
- **2030166**: Edit permission for the domain is not supported
- **2011170**: Promotion code is invalid
- **2011280**: TLD is invalid
- **2528166**: Order creation failed
- **3024510**: Error response from Enom while updating the domain
- **3050511**: Unknown error response from Enom
- **2020166**: Domain does not meet the expiration date for reactivation
- **2016166**: Domain is not associated with your account
- **5050900**: Unhandled exceptions
- **4024166**: Failed to update the domain in your account
- **2015170**: Promotion code is not allowed for premium domains
- **2015167**: Premium domain can be reactivated for 1 year only
- **2015610**: Premium prices cannot be zero for premium domains
- **2515623**: You are trying to reactivate a premium domain. Premium price should be added to the request to reactivate the premium domain.
- **2511623**: Domain name is not premium
- **2515610**: Premium price is incorrect. It should be (premium renewal price value).
