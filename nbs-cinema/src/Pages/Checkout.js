import React from 'react';
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";
import Alert from "react-bootstrap/Alert";
import key from "./Payment";

import STRIPE_PUBLISHABLE from "./constants/stripe";
import PAYMENT_SERVER_URL from "./constants/server";


// document.getElementById(cost).value= new Number(JSON.parse(amount));


// var number=document.getElementById(cost).value; 

const CURRENCY = 'GBP';
// let amount = localStorage.getItem(key);
// console.log(amount);

const fromEuroToCent = amount => amount * localStorage.getItem('cost');

const successPayment = data => {
  alert('Payment Success');
  window.location = '/p_confirm';
  console.log(data);
  
};

if (Alert === 'Payment Success'){
    this.props.history.push("/home");
}

const errorPayment = data => {
  alert('Payment Error');
  console.log(data);
  console.log(localStorage.getItem('cost'))
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ email, description, amount }) =>
  <StripeCheckout
    email={email}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />;

export default Checkout;