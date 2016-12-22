var getData2 = require('../getData');
var striArray = require('../data2');
var expect = require('chai').expect;
var jsdom = require('jsdom');


describe('取得跑馬燈测试', function() {

    ///$ is undefined || window is undefine
    var document = jsdom.jsdom('<html><head></head><body></body></html>');
    var window = document.defaultView;
    global.window = window
    global.$ = global.jQuery = require('../jquery');

    describe('取得字串', function() {
        it('getData2.getJsonLength() isEqual 3', function() {
                expect(getData2.getJsonLength(striArray)).to.be.equal(3);
        });
        
        it('getData.getJSON(index) isEqual val.string', function() {
            $.each(striArray, function(key, val){
                expect(getData2.getJSON(striArray, key)).to.be.equal(val.string);
            });
        });
    });
});
