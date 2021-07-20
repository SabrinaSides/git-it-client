import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function AddressForm() {
  return (
    <div>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name:'
            fullWidth
            value='John'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name:'
            fullWidth
            value='Smith'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Address line 1:'
            fullWidth
            value='123 JavaScript St'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='address2'
            name='address2'
            label='Address line 2:'
            fullWidth
            value=' '
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='City'
            fullWidth
            value='Oklahoma City'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='state'
            name='state'
            label='State/Province/Region'
            fullWidth
            value='OK'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Zip / Postal code'
            fullWidth
            value='12345'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='country'
            name='country'
            label='Country'
            fullWidth
            value='USA'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='saveAddress' value='yes' />
            }
            label='Use this address for payment details'
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AddressForm;
