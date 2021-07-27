import React from 'react';
import { Link } from 'react-router-dom';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './CheckoutReview';
import config from '../config';
import '../styles/Checkout.css'

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleDeleteEntireCart = () => {
    const url = `${config.API_ENDPOINT}/shoppingCart`;
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(url, options).then(() => {
      props.fetchData();
    });
  };

  return (
    <React.Fragment>
      <header className='banner'>
        <h1>Checkout</h1>
      </header>
      <main>
          <p>**All info prefilled for demo**</p>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <p>
                  Thank you for your order.
                </p>
                <p variant='subtitle1'>
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </p>
                <br />
                <Link to={'/shop'} onClick={handleDeleteEntireCart}>
                  Back to Home Page
                </Link>
              </React.Fragment>
            ) : (
              <div className='checkout-container'>
                {getStepContent(activeStep)}
                <div>
                  {activeStep !== 0 && (
                    <button className='checkout-button' onClick={handleBack}>
                      Back
                    </button>
                  )}
                  <button
                  className='checkout-button'
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
      </main>
    </React.Fragment>
  );
}
