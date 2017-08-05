// prod.js
// 
const {
  GOOGLE_CLIENT_ID,
  GOOLE_CLIENT_SECRET,
  MONGO_URI,
  COOKIE_KEY
} = process.env

module.exports = {
  googleClientID: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOLE_CLIENT_SECRET,
  mongoURI: MONGO_URI,
  cookieKey: COOKIE_KEY
}
