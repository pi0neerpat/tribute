import React from 'react';

const providerName = 'Super Mariano Bros.';

const Report = ({ flowTotal }) => {
  if (flowTotal && flowTotal > 0) {
    return (
      <div>
        During the time this tribute was flowing, {flowTotal} DAI was directed
        to the publisher.
      </div>
    );
  }
  return <div />;
};
export default Report;
