var getData = require('../getData');
var striArray = require('../data');
var expect = require('chai').expect;
var jsdom = require('jsdom');
// var cssPath = '../project.css';


describe('取得跑馬燈测试', function() {

    ///$ is undefined || window is undefine
    var document = jsdom.jsdom('<html><head></head><body></body></html>');
    var window = document.defaultView;
    global.window = window
    global.$ = global.jQuery = require('../jquery');
    document.write(
    '<div id="marquee"><div id="marqueeText">Rolling Clouds</div></div>'
    );
    // addCss(cssPath);
    // function addCss(cssPath){
    // var newCss=document.createElement("link");
    // newCss.setAttribute("rel", "stylesheet");
    // newCss.setAttribute("type", "text/css");
    // newCss.setAttribute("href", cssPath);
    // document.getElementsByTagName("head")[0].appendChild(newCss);
    // }

    describe('取得字串', function() {
        it('isEqual', function() {
            $.each(striArray, function(key, val){
                expect(getData.getJSON(striArray, key)).to.be.equal(val.string);
            });
        });
    });

    describe('進入畫面之前', function() {
        var getArray = getData.getDataMoveIn(striArray);
        it('isEqual', function() {
            expect(getArray[0]).to.be.equal(10);
        });
        it('isEqual', function() {
            expect(getArray[1]).to.be.equal(striArray[getArray[2]].string);
        });
        it('isEqual', function() {
            expect(getArray[3]).to.be.equal(striArray[getArray[2]].string);
        });
        it('isEqual', function() {
            expect(getArray[4]).to.be.equal('visible');
        });
        it('isEqual', function() {
            expect(getArray[5]).to.be.equal('5px');
        });
    });
});
