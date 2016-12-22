var getData2 = require('../getData2');
var stringArray = require('../data2');
var expect = require('chai').expect;
var jsdom = require('jsdom');
// var cssPath = '../project.css';


describe('取得跑馬燈测试', function() {

    ///$ is undefined || window is undefine
    var document = jsdom.jsdom('<html><head></head><body></body></html>');
    global.document = document;
    var window = document.defaultView;
    global.window = window
    global.$ = global.jQuery = require('../jquery');
        
    document.write(
    '<marquee id="txt" width="300" height="30" scrollamount="0" loop="-1">&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp</marquee>'
    );

    describe('取得字串', function() {
        it('getData2.getJSON(striArray, key) isEqual val.string', function() {
            $.each(stringArray, function(key, val){
                expect(getData2.getJSON(stringArray, key)).to.be.equal(val.string);
            });
        });
    });
    describe('延遲一秒', function(){
        it('$("#txt").text() is a String', function(){
            expect(getData2.delayTime()[0]).to.be.a('string');
        });
        it('$("#txt").text() isEqual " "', function(){
            expect(getData2.delayTime()[0]).to.be.equal(' ');
        });
        it('$("#txt").attr("scrollamount") is a String', function(){
            expect(getData2.delayTime()[1]).to.be.a('string');
        });
        it('$("#txt").attr("scrollamount") isEqual 0', function(){
            expect(getData2.delayTime()[1]).to.be.equal('0');
        });
    });

    describe('取得資料重新開始', function(){
        var getDataArray = getData2.getDataRestart(stringArray);
        it('stringArray.length isEqual 3', function(){
            expect(getDataArray[0]).to.be.equal(3);
        });
        it('stringArray[num] isEqual stringArray[getDataArray[2]].string', function(){
            expect(getDataArray[1]).to.be.equal(stringArray[getDataArray[2]].string);
        });
        it('$("#txt").text() isEqual stringArray[getDataArray[2]].string', function(){
            expect(getDataArray[3]).to.be.equal(stringArray[getDataArray[2]].string);
        });
        it('$("#txt").attr("scrollamount") isEqual 5', function(){
            expect(getDataArray[4]).to.be.equal('5');
        })
        it('$("#txt").prop("loop") isEqual -1', function(){
            expect(getDataArray[5]).to.be.equal('-1');
        })
    });

    describe('改變loop數值', function(){
        it('$("#txt").prop("loop") isEqual 1', function(){
            expect(getData2.changeLoop()).to.be.equal('1');
        })
    });

});    