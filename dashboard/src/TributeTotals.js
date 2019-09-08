import React from 'react';
const BigNumber = require('bignumber.js')
export default function TributeTotals({ principal, hats }) {

  let bigPrincipal = new BigNumber(principal.toString())
  let normPrincipal = bigPrincipal.dividedBy(Math.pow(10, 18)).toFixed(2)

  let sum = 0
  hats.proportions.forEach((item) => {
    console.log(item)
    sum += item
  })
  console.log(sum)

  let unallocatedStr = ((hats.proportions[0] / sum) * normPrincipal).toString()
  let unallocated = new BigNumber(unallocatedStr).toFixed(2)

  return(
    <div>
      Tribute
      <br/>
      Principal: { normPrincipal }
      <br/>
      Unallocated Tribute: { unallocated }
      <br/>
      <br/>
    </div>
  );
}
