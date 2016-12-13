var num;
var stringArray = require('./data2');;

var getData2JS = module.exports = {
  getJSON : function(){
    $.each(stringArray, function(key, val){   
            console.log(val.string);
        });
  },
  delayTime : function(){
    $("#txt").text(" ");
    $("#txt").attr('scrollamount','0');
    $("#txt").stop();
    console.log("delayTime");
    setTimeout(function(){
        getData2JS.getDataRestart()
    }, 1000);
  },
  getDataRestart : function(){
    num = Math.floor(Math.random()*stringArray.length);
    $("#txt").text(stringArray[num].string);
    $("#txt").attr('scrollamount','5');
    document.getElementById('txt').start();
    $("#txt").prop('loop','-1');
    console.log("getDataRestart");
    setTimeout(function(){
        getData2JS.changeLoop()
    }, 5000);
  },
  changeLoop : function(){
    $("#txt").prop('loop','1');
    console.log("changeLoop");
  },
};