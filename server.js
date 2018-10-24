const app = require('./src/app')
const config = require('./src/config/env')

const { port } = config
app.listen(port, () => {
  console.log('Magic happening on port', port)
})