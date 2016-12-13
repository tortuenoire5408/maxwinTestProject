require("./project");
var getClockJS = require('./getClock');
var getDataJS = require('./getData');
var getData2JS = require('./getData2');

document.write(
    '<marquee id="txt" width="300" height="30" scrollamount="0" loop="-1">&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp</marquee>'
    );
document.write(
    '<div id="marquee"><div id="marqueeText">Rolling Clouds</div></div>'
    );
document.write(
    '<div id="clock" width="300" height="30"></div>'
    );
setInterval(function(){
    $("#clock").text(
        getClockJS.getClock()
        );
    }
    , 1000);
getDataJS.getJSON();
getDataJS.getDataMoveIn();
setInterval(function(){
   getDataJS.getDataMoveIn();
    }, 5000);
getData2JS.getJSON();
getData2JS.delayTime();
setInterval(function(){
   getData2JS.delayTime();
    }, 18000);
