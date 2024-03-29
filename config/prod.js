// prod.js

const {
  GOOGLE_CLIENT_ID,
  GOOLE_CLIENT_SECRET,
  MONGO_URI,
  COOKIE_KEY,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
  SENDGRID_API_KEY,
  REDIRECT_DOMAIN
} = process.env

module.exports = {
  googleClientID: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOLE_CLIENT_SECRET,
  mongoURI: MONGO_URI,
  cookieKey: COOKIE_KEY,
  stripePublishableKey: STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: STRIPE_SECRET_KEY,
  sendGridKey: SENDGRID_API_KEY,
  redirectDomain: REDIRECT_DOMAIN
}
