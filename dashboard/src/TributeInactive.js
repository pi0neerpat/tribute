import React from 'react';
export default function TributeInactive({ services }) {
  console.log(services)

  let inactives = services.filter((item) => {
    return item.status == false
  }).map((item, i) => {
    return <span key={i}> <br/>{ item.name } </span>
  })

  return(
    <div>
      Inactive Tributes
      { inactives }
      <br/>
      <br/>
    </div>
  );
}
