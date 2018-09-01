const chai = require('chai')
const sinon = require('sinon')

beforeEach(() => sinon.sandbox.create())

afterEach(() => sinon.sandbox.restore())
