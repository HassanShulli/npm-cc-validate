'use strict';
var expect = require('chai').expect;
var ccValid = require('../dist/index.js');
describe('validate function test', () => {
    it('should return true', () => {
        var result = ccValid.isValid('4111111111111111');
        expect(result).to.equal(true);
    });
    it('should return true', () => {
        var result = ccValid.isValid('4111211111111111');
        expect(result).to.equal(false);
    });
});