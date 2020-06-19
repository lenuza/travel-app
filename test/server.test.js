const app = require('../src/server/index')
const supertest =  require('supertest')

test('Check if server responds with status 200', (done) => {
    supertest(app)
        .get('/')
        .expect(200)
        .end(done)
})
