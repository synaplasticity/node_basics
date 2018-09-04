expect = require('chai').expect
should = require('chai').should
request = require('request')
port = 3000
sinon = require('sinon')
util = require('../../src/HTTPserver/express_utils')
expPG = require('../../src/HTTPserver/express_async_await_postgres')
uri = `http://localhost:${port}/users`

describe('pg unit tests', () => {
    var responseValue, responseBody
    
    beforeEach(() => {
        responseValue = {
            statusCode: 200,
            headers: {
                'content-type': 'application/json'
            }
        }
    
        responseBody = {
            status: 'success',
            data: [
                {
                    name: 'Amadeus',
                    age: 150
                }
            ]
        }
    
        this.get = sinon.stub(request, 'get')
    })

    afterEach(() => request.get.restore())

    it('Unit test when we have db calls in our function', (done) => {
        this.get.yields(null, responseValue, JSON.stringify(responseBody))

        request.get(uri, (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(res.headers['content-type']).to.equal('application/json')

            body = JSON.parse(body)
            expect(body.status).to.equal('success')
            expect(body.data.length).to.equal(1)
            expect(body.data[0].name).to.equal('Amadeus')
            expect(body.data[0].age).to.equal(150)
            done()
        })
    })
})