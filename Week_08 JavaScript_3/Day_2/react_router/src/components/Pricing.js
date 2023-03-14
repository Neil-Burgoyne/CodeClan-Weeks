import React from 'react';

const Pricing = ({ prices }) => {
  const priceList = prices.map((price) => (
    <li key={price}>£{price}</li>
  ))

  return (
    <div>
      <h4>Pricing</h4>
      <ul>
        {priceList}
      </ul>
    </div>
  );
};

export default Pricing;
