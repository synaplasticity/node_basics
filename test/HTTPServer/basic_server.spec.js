const expect = require('chai').expect
const request = require('request')
const server = require('../../src/HTTPServer/basic_httpserver')

describe('Basic HTTPServer tests', () => {

    beforeEach(() => server.startServer(3000))
    afterEach(() => server.stopServer())

    it('Successful request', (done) => {
        request('http://localhost:3000/', (req, res, body) => {
            done()
            expect(body).to.equal('Hello from NodeJS server.')
        })
    })
})
