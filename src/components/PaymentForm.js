import React from 'react';

export default function PaymentForm() {
  return (
    <div>
      <h2>
        Payment method
        </h2>
      <form>
      <label htmlFor='cardName' className='labels'>Name on Card:</label>
          <input
            required
            id='cardName'
            value='John Smith'
            readOnly
          />
<label htmlFor='cardNumber' className='labels'>Card Number:</label>
          <input
            required
            id='cardNumber'
            value='1234-5678-8900-0000'
            readOnly
          />
<label htmlFor='expDate' className='labels'>Expiration Date:</label>
          <input
            required
            id='expDate'
            value='10/24'
            readOnly
          />
          <label htmlFor='cvv' className='labels'>CVV:</label>
          <input
            required
            id='cvv'
            value='123'
            readOnly
          />
      </form>
    </div>
  );
}
