var getData = require('../getData');
var striArray = require('../data');
var expect = require('chai').expect;
var jsdom = require('jsdom');


describe('取得跑馬燈测试', function() {

    ///$ is undefined || window is undefine
    var document = jsdom.jsdom('<html><head></head><body></body></html>');
    var window = document.defaultView;
    global.window = window
    global.$ = global.jQuery = require('../jquery');

    describe('取得字串', function() {
        it('getData.getJSON(striArray, key) isEqual val.string', function() {
            $.each(striArray, function(key, val){
                expect(getData.getJSON(striArray, key)).to.be.equal(val.string);
            });
        });
    });
});
