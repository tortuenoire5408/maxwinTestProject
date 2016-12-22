require("./project");
var getClockJS = require('./getClock');
var getDataJS = require('./getData');
var striArray = require('./data');
var stringArray = require('./data2');


document.write(
    '<marquee id="txt" width="300" height="30" scrollamount="0" loop="-1">&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp&emsp</marquee>'
    );
document.write(
    '<div id="marquee"><div id="marqueeText">Rolling Clouds</div></div>'
    );
document.write(
    '<div id="clock" width="300" height="30"></div>'
    );

// getClock    
setInterval(function(){
    var time = new Date();
    $("#clock").text(
        getClockJS.getTime(time)
        );
    }
    , 1000);


//getData2
delayTime();
setInterval(function(){
  delayTime();
    }, 18000);


function delayTime(){
    $("#txt").text(" ");
    $("#txt").attr('scrollamount','0');
    $("#txt").stop();
    console.log('delayTime');
    setTimeout(function(){
        getDataRestart()
    }, 1000);
  }

function getDataRestart(){
    var stringArrayLength = getDataJS.getJsonLength(stringArray);
    var num = Math.floor(Math.random()*stringArrayLength);
    var data = getDataJS.getJSON(stringArray, num);
    $("#txt").text(data);
    $("#txt").attr('scrollamount','5');
    document.getElementById('txt').start();
    $("#txt").prop('loop','-1');
    console.log("getDataRestart");
    setTimeout(function(){
        changeLoop()
    }, 5000);
  }

function changeLoop(){
    $("#txt").prop('loop','1');
    console.log("changeLoop");
  }  

//getData  
getDataMoveIn();
setInterval(function(){
   getDataMoveIn();
    }, 5000);


function getDataMoveIn(){
    var striArrayLength = getDataJS.getJsonLength(striArray);
    var number = Math.floor(Math.random()*striArrayLength);
    var data = getDataJS.getJSON(striArray, number)
    $("#marqueeText").text(data);
    $("#marqueeText").css("visibility","visible");
    $("#marqueeText").css("top","5");
    setTimeout(function(){
        getDataMoveOut()
    }, 3500);
  }

function getDataMoveOut(){
    $("#marqueeText").css("visibility","hidden");
    $("#marqueeText").css("top","30");
    setTimeout(function(){
        reset()
    }, 500);
  }

function reset(){
    $("#marqueeText").css("top","-20");
  }    