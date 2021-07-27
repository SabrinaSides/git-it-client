import React from 'react';

function AddressForm() {
  return (
    <div>
      <h2>Shipping address</h2>
      <form>
        <label htmlFor='firstName' className='labels'>
          First Name:
        </label>
        <input required id='firstName' name='firstName' value='John' readOnly />

        <label htmlFor='lastName' className='labels'>
          Last Name:
        </label>
        <input required id='lastName' name='lastName' value='Smith' readOnly />

        <label htmlFor='address1' className='labels'>
          Address Line 1:
        </label>
        <input
          required
          id='address1'
          name='address1'
          value='123 JavaScript St'
          readOnly
        />

        <label htmlFor='address2' className='labels'>
          Address Line 2:
        </label>
        <input
          id='address2'
          name='address2'
          label='Address line 2:'
          value=' '
          readOnly
        />

        <label htmlFor='city' className='labels'>
          City:
        </label>
        <input required id='city' name='city' value='Oklahoma City' readOnly />

        <label htmlFor='state' className='labels'>
          State/Province/Region:
        </label>
        <input id='state' name='state' value='OK' readOnly />

        <label htmlFor='zip' className='labels'>
          Zip/Postal Code:
        </label>
        <input required id='zip' name='zip' value='12345' readOnly />

        <label htmlFor='country' className='labels'>
          Country:
        </label>
        <input required id='country' name='country' value='USA' readOnly />
      </form>
    </div>
  );
}

export default AddressForm;
