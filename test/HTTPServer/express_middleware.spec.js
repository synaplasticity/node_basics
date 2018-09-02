'use strict'

const expect = require('chai').expect
const expMwr = require('../../src/HTTPserver/express_middleware')
const util = require('../../src/HTTPserver/express_utils')
const request = require('request')
const port = 3000
const em_app = expMwr.getApp()
var server


describe('Express middleware tests', () => {

    beforeEach(() => server = util.startServer(em_app, port))
    
    afterEach(() => util.stopServer(server))

    it('Must return a welcome message', (done) => {
        request('http://localhost:3000/', (req, res, body) => {
            done()
            expect(body).to.equal('Hello from ExpressJS middleware. Now with logging.')
        })
    })

}) 