require("./project");
var getClockJS = require('./getClock');
var getDataJS = require('./getData');
var striArray = require('./data');
var getData2JS = require('./getData2');
var stringArray = require('../data2');


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
    var time = new Date();
    $("#clock").text(
        getClockJS.getTime(time)
        );
    }
    , 1000);

$.each(striArray, function(key, val){
                getDataJS.getJSON(striArray, key);
            });
            
getDataJS.getDataMoveIn(striArray);
setInterval(function(){
   getDataJS.getDataMoveIn(striArray);
    }, 5000);

$.each(stringArray, function(key, val){
                getData2JS.getJSON(stringArray, key);
            });

getData2JS.getJSON();
getData2JS.delayTime();
setInterval(function(){
   getData2JS.delayTime();
    }, 18000);
