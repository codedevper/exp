## namecheap.domains.renew
Renews an expiring domain

## Example Request
`https://api.namecheap.com/xml.response?ApiUser=apiexample&ApiKey=56b4c87ef4fd49cb96d915c0db68194&UserName=apiexample&Command=namecheap.domains.renew&ClientIp=192.168.1.109&DomainName=models.tv&Years=1&IsPremiumDomain=true&PremiumPrice=650`

## Request Parameters
> Global parameters are not shown here, but they should be present in all requests.

- **DomainName** (String, max 70, required): Domain name to renew
- **Years** (Number, max 2, required): Number of years to renew
- **PromotionCode** (String, max 20, optional): Promotional (coupon) code for renewing the domain
- **IsPremiumDomain** (Boolean, max 10, optional): Indication if the domain name is premium
- **PremiumPrice** (Currency, max 20, optional): Renewal price for the premium domain

## Example Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ApiResponse xmlns="http://api.namecheap.com/xml.response" Status="OK">
  <Errors />
  <Warnings />
  <RequestedCommand>namecheap.domains.renew</RequestedCommand>
  <CommandResponse Type="namecheap.domains.renew">
    <DomainRenewResult DomainName="models.tv" DomainID="151378" Renew="true" OrderID="109116" TransactionID="119569" ChargedAmount="650.0000">
      <DomainDetails>
        <ExpiredDate>4/30/2021 11:31:13 AM</ExpiredDate>
        <NumYears>0</NumYears>
      </DomainDetails>
    </DomainRenewResult>
  </CommandResponse>
  <Server>SERVER-NAME</Server>
  <GMTTimeDifference>+2:59</GMTTimeDifference>
  <ExecutionTime>29.914</ExecutionTime>
</ApiResponse>
```

## Response Parameters
- **DomainName**: Domain name that you are trying to renew
- **DomainID**: Unique integer value that represents the domain
- **Renew**: Indicates whether the domain was renewed successfully
- **ChargedAmount**: Total amount charged for the renewal
- **OrderID**: Unique integer value that represents the order
- **TransactionID**: Unique integer value that represents the transaction

## Error Codes
- **2033409**: Possibly a logical error at the authentication phase. The order chargeable for the Username is not found.
- **2011170**: Validation error from PromotionCode
- **2011280**: TLD is invalid
- **2528166**: Order creation failed
- **2020166**: Domain has expired. Please reactivate your domain.
- **3028166**: Failed to renew, error from Enom
- **3031510**: Error from Enom ( Errcount <> 0 )
- **3050900**: Unknown error from Enom
- **2016166**: Domain is not associated with your account
- **4024167**: Failed to update years for your domain
- **4023166**: Error occurred during the domain renewal
- **4022337**: Error in refunding funds
- **2015170**: Promotion code is not allowed for premium domains
- **2015167**: Premium domain can be renewed for 1 year only
- **2015610**: Premium prices cannot be zero for premium domains
- **2515623**: You are trying to renew a premium domain. Premium price should be added to request to renew the premium domain.
- **2511623**: Domain name is not premium
- **2515610**: Premium price is incorrect. It should be (premium renewal price value).
