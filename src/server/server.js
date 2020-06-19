const server = require('./index')

// set port
const port = process.env.port || 8000

server.listen(port, () => {
    console.log(`Hello, listening on port ${port}`)
})