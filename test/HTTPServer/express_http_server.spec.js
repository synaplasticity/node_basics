'use strict'

const expect = require('chai').expect
const request = require('request')
const util = require('../../src/HTTPserver/express_utils')
const h_app = require('../../src/HTTPserver/express_httpserver')
const port = 3000
var server
var app = h_app.getApp()

describe('Basic express server tests', () => {

    beforeEach(() => {
        server = util.startServer(app, port)
    })

    afterEach(() => util.stopServer(server))

    it('Should return a welcome string', (done) => {
        request('http://localhost:3000/', (req, res, body) => {
            done()
            expect(body).to.equal(`Greetings from ExpressJS`)
        })
    })

})