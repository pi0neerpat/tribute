1. Get some DAI on Kovan
2. Approve the rDAI contract to spend your DAI tokens. Use the DAI contract and call the "Approve" function.

*guy*: 0xea718e4602125407fafcb721b7d760ad9652dfe7
*wad*: enter the number or rDAI you wish to create !! attention- wad has 18 decimal units

DAI contract (Kovan) https://oneclickdapp.com/tuna-club/

3. Call the "mint" function with the same amount (or less) than you approved.

rDAI contract (kovan) https://oneclickdapp.com/verona-bless/

### Off-Ramp

`redeemAndTransferAll`

1. Get the rDAI interest you have accrued. On the rDAI contract, call `interestPayableOf` with your address.

2. Claim the interest as rDAI tokens into your wallet. On the rDAI contract, call `redeem` with the amount from step 1. (optional: You can `redeem` and convert to DAI in a single step, by instead using `redeemAndTransferAll`.)




## Data Structure

### rToken.sol

`accounts mapping -> struct Accounts -> getHatByAddress() -> getHatByID() -> recipients and proportions`

 | address | proportion (%)|
|--------| ----- |
My wallet (0xabc...)| 100 |
Dapp (coolDapp.ETH)|0|

Dapp computes *at current interest rate*, what __proportion__ of your stack will provide the __appropriate amount__ of rDAI?



**Stack** - Amount of rDAI the user has. This amount never goes down!

**Annual Interest Rate** - Amount of rDAI interest earned. Derived from cDAI e.g. 9.9% per year. Hereafter the cDAI and rDAI interest rates are identical.

**Content Meter Rate** - rDAI per hour fee desired by the content provider.

**Stack Proportion** - Percentage of Stack which will satisfy the Content Meter Rate. This amount is used to make the "hat" transfer

Stack (rDAI) * Annual Interest Rate (rDAI/year) / (365 days * 24 hours) / Content Meter Rate = Stack

> e.g. "Stack" 100 rDAI / "Desired Rate" rDAI/hour * "Current Interest Rate" "Rate" 0.01 rDAI / hour =  

| address | proportion |
|--------| ----- |
My wallet (0xabc...)| 90 |
Dapp (coolDapp.ETH)|10|
