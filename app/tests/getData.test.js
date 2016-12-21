var getData = require('../getData');
var striArray = require('../data');
var expect = require('chai').expect;
var jsdom = require('jsdom');
var chai_jquery = require('chai-jquery');

describe('取得跑馬燈测试', function() {

    ///$ is undefined || window is undefine
    var doc = jsdom.jsdom("<html><body></body></html>");
    var window = doc.defaultView;
    global.window = window
    global.$ = require('../jquery');

    describe('取得字串', function() {
        it('isEqual', function() {
            $.each(striArray, function(key, val){
                expect(getData.getJSON(striArray, key)).to.be.equal(val.string);
                console.log(val.string);   
            });
        });
    });

    describe('進入畫面之前', function() {
        it('isEqual', function() {
            expect(getData.getDataMoveIn(striArray)).to.be.equal('visible');
        });
        // it('isEqual', function(striArray) {
            // expect($('#marqueeText')).to.have.css('text', '#ffffff');
            // expect(window).to have_selector('#marqueeText', text = 'ffffff');
        // });
        
    });
});
