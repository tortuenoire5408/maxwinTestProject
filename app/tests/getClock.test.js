var getClock = require('../getClock.js');
var expect = require('chai').expect;
var time = new Date();

describe('取得時間格式测试', function() {
    describe('年', function() {
        it('Year isGreaterThan 2016', function() {
            expect(getClock.getYear(time)).to.be.least(2016);
        });
        it('Year isEqual time.getFullYear()', function() {
            expect(getClock.getYear(time)).to.be.equal(time.getFullYear());
        });
    });
    describe('月', function() {
        it('Month isGreaterThan 1', function() {
            expect(getClock.getMonth(time)).to.be.least(1);
        });
        it('Month isLessThan 12', function() {
            expect(getClock.getMonth(time)).to.be.most(12);
        });
        it('Month isEqual time.getMonth()+1', function() {
            expect(getClock.getMonth(time)).to.be.equal(time.getMonth()+1);
        });
    });
    describe('日', function() {
        it('Date isGreaterThan 1', function() {
            expect(getClock.getMonth(time)).to.be.least(1);
        });
        it('Date isLessThan 31', function() {
            expect(getClock.getMonth(time)).to.be.most(31);
        });
        it('Date isEqual time.getDate()', function() {
            expect(getClock.getDate(time)).to.be.equal(time.getDate());
        });
    });
     describe('時', function() {
        it('Hours isGreaterThan 0', function() {
            expect(getClock.getHours(time)).to.be.least(0);
        });
        it('Hours isLessThan 23', function() {
            expect(getClock.getHours(time)).to.be.most(23);
        });
        it('Hours isEqual time.getHours()', function() {
            expect(getClock.getHours(time)).to.be.equal(time.getHours());
        });
    });
     describe('分', function() {
        it('Minutes isGreaterThan 0', function() {
            expect(getClock.getMinutes(time)).to.be.least(0);
        });
        it('Minutes isLessThan 59', function() {
            expect(getClock.getMinutes(time)).to.be.most(59);
        });
        it('Minutes isEqual time.getMinutes()', function() {
            expect(getClock.getMinutes(time)).to.be.most(time.getMinutes());
        });
    });
     describe('秒', function() {
        it('Seconds isGreaterThan 0', function() {
            expect(getClock.getSeconds(time)).to.be.least(0);
        });
        it('Seconds isLessThan 59', function() {
            expect(getClock.getSeconds(time)).to.be.most(59);
        });
        it('Seconds isEqual time.getSeconds()', function() {
            expect(getClock.getSeconds(time)).to.be.most(time.getSeconds());
        });
    });
    describe('是否為字串', function() {
        it('getClock.getTime(time) is a String', function() {
            expect(getClock.getTime(time)).to.be.a('string');
        });
    }); 
});
