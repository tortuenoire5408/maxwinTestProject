var getClock = require('../getClock.js');
var expect = require('chai').expect;
var time = new Date();

describe('取得時間格式测试', function() {
    describe('年', function() {
        it('isGreaterThan', function() {
            expect(getClock.getYear(time)).to.be.least(2016);
        });
    });
    describe('月', function() {
        it('isGreaterThan', function() {
            expect(getClock.getMonth(time)).to.be.least(1);
        });
        it('isLessThan', function() {
            expect(getClock.getMonth(time)).to.be.most(12);
        });
    });
    describe('日', function() {
        it('isGreaterThan', function() {
            expect(getClock.getMonth(time)).to.be.least(1);
        });
        it('isLessThan', function() {
            expect(getClock.getMonth(time)).to.be.most(31);
        });
    });
     describe('時', function() {
        it('isGreaterThan', function() {
            expect(getClock.getHours(time)).to.be.least(0);
        });
        it('isLessThan', function() {
            expect(getClock.getHours(time)).to.be.most(23);
        });
    });
     describe('分', function() {
        it('isGreaterThan', function() {
            expect(getClock.getMinutes(time)).to.be.least(0);
        });
        it('isLessThan', function() {
            expect(getClock.getMinutes(time)).to.be.most(59);
        });
    });
     describe('秒', function() {
        it('isGreaterThan', function() {
            expect(getClock.getSeconds(time)).to.be.least(0);
        });
        it('isLessThan', function() {
            expect(getClock.getSeconds(time)).to.be.most(59);
        });
    });
    describe('是否為字串', function() {
        it('isString', function() {
            expect(getClock.getTime(time)).to.be.a('string');
        });
    }); 
});
