'use strict';
var expect = require('chai').expect;
var ccValid = require('../dist/index.js');
describe('validate function test', () => {
    it('should return false, invalid input', () => {
        var result = ccValid.isValid(91231232123);
        expect(result.isValid).to.equal(false);
        expect(result.message).to.equal('input is not of type string');
    });
    it('should return false, invalid input', () => {
        var result = ccValid.isValid('0000 0000 0000 0000');
        expect(result.isValid).to.equal(false);
        expect(result.message).to.equal('An input of all zeroes is not a valid credit card number');
    });
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
    it('should return false MasterCard', () => {
        var result = ccValid.isValid('5505032603781346');
        expect(result.isValid).to.equal(false);
        expect(result.cardType).to.equal('MasterCard');
    });
    it('should return true JCB', () => {
        var result = ccValid.isValid('3538 1118 7085 6309');
        expect(result.isValid).to.equal(true);
        expect(result.cardType).to.equal('JCB');
    });
    it('should return false JCB', () => {
        var result = ccValid.isValid('3538 1118 7085 6307');
        expect(result.isValid).to.equal(false);
        expect(result.cardType).to.equal('JCB');
    });
    it('should return true Discover', () => {
        var result = ccValid.isValid('6011 0845 6829 9588');
        expect(result.isValid).to.equal(true);
        expect(result.cardType).to.equal('Discover');
    });
    it('should return false Discover', () => {
        var result = ccValid.isValid('6011 0845 6829 9587');
        expect(result.isValid).to.equal(false);
        expect(result.cardType).to.equal('Discover');
    });
    it('should return true Discover', () => {
        var result = ccValid.isValid('6011 0845 6829 9588');
        expect(result.isValid).to.equal(true);
        expect(result.cardType).to.equal('Discover');
    });
    it('should return false Discover', () => {
        var result = ccValid.isValid('6011 0845 6829 9587');
        expect(result.isValid).to.equal(false);
        expect(result.cardType).to.equal('Discover');
    });
    it('should return true Diners Club', () => {
        var result = ccValid.isValid('3820701658582478');
        expect(result.isValid).to.equal(true);
        expect(result.cardType).to.equal('Diners Club');
    });
    it('should return false Diners Club', () => {
        var result = ccValid.isValid('3820701658582479');
        expect(result.isValid).to.equal(false);
        expect(result.cardType).to.equal('Diners Club');
    });
});