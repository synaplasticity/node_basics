'use strict'

const expect = require('chai').expect
const request = require('request')
const app = require('../../src/HTTPserver/express_httpserver')
const port = 3000
var server

describe('Basic express server tests', () => {

    beforeEach(() => {
        server = app.startServer(port)
    })

    afterEach(() => app.stopServer(server))

    it('Should return a welcome string', (done) => {
        request('http://localhost:3000/', (req, res, body) => {
            done()
            expect(body).to.equal(`Greetings from ExpressJS`)
        })
    })

})