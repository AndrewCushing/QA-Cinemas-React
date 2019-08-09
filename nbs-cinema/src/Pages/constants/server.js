const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://myapidomain.com'
  : 'http://35.176.119.160:9000';

export default PAYMENT_SERVER_URL;
