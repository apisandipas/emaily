export default (emails) => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !validateEmail(email))

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`
  }

  return null
}

function validateEmail (email) {
  /* eslint no-useless-escape: 0 */
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)

}
