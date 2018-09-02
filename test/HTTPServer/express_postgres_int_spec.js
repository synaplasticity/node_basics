'use strict'

const expect = require('chai').expect
const request = require('request')
const util = require('../../src/HTTPserver/express_utils')
const expPG = require('../../src/HTTPserver/express_async_await_postgres')

const port = 3000
const uri = `http://localhost:${port}/users`
const p_app = expPG.getApp()
var server

describe('Express postgress tests', () => {

    beforeEach(() => server = util.startServer(p_app, port))

    afterEach(() => util.stopServer(server))

    it('Must return the user list', (done) => {
        request(uri, (req, res, body) => {
            done()
            expect(body).to.equal('[{"name":"Amadeus","age":150}]')
            expect(JSON.parse(body)[0].name).to.equal('Amadeus')
        })
    })

    it('Must have the correct user name', (done) => {
        request(uri, (req, res, body) => {
            done()
            expect(JSON.parse(body)[0].name).to.equal('Amadeus')
        })
    })

})