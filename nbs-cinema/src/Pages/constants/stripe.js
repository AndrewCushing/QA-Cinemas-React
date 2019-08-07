const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_erntISM9dWX0vp47HCBY9LUS008z6y4DNU';
  

export default STRIPE_PUBLISHABLE;
