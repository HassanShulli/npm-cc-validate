'use strict';
var expect = require('chai').expect;
var ccValid = require('../dist/index.js');
describe('validate function test', () => {
    it('should return true visa card', () => {
        var result = ccValid.isValid('4196 2214 3817 0266 ');
        expect(result.isValid).to.equal(true);
        expect(result.cardType).to.equal('Visa');
    });
    it('should return false Visa', () => {
        var result = ccValid.isValid('4111211111111111');
        expect(result.isValid).to.equal(false);
        expect(result.cardType).to.equal('Visa');
    });
    it('should return true MasterCard', () => {
        var result = ccValid.isValid('5505032603781347');
        expect(result.isValid).to.equal(true);
        expect(result.cardType).to.equal('MasterCard');
    });
});