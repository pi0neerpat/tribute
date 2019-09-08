import React from 'react';
export default function TributeTotals({ principal, allocated }) {
  return(
    <div>
      Tribute
      <br/>
      Principal: { principal.toString() }
      <br/>
      Allocated Tribute: { allocated.toString() }
    </div>
  );
}
