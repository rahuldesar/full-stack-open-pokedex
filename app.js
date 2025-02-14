const express = require('express')
const app = express()
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // throw 'error...'
  // // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1.2') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
  /* eslint-enable no-console */

  //* window.console.log(someThing); .. this should work too
  // ? https://github.com/susanBuck/e28-fall19/issues/141
})