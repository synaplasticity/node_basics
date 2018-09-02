'use strict'

const expect = require('chai').expect
const request = require('request')
const util = require('../../src/HTTPserver/express_utils')
const expWrap = require('../../src/HTTPserver/express_async_await_wrapper')
const port = 3000
const url = `http://localhost:${port}/`
const w_app = expWrap.getApp()
var server

describe('Express app worth async/await wrapper tests', () => {

    beforeEach(() => server = util.startServer(w_app, port))

    afterEach(() => util.stopServer(server))

    it('Must return a welcome message', (done) => {
        request(url, (req, res, body) => {
            done()
            expect(body).to.equal('ExpressJS is in the house. Now with async wrapper.')
        })
    })

})