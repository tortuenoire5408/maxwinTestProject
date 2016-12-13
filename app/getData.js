var number;
var striArray = require('./data');

var getDataJS = module.exports = {
  getJSON : function(){
    $.each(striArray, function(key, val){   
            console.log(val.string);
        });
  },
  getDataMoveIn : function(){
    number = Math.floor(Math.random()*striArray.length);
    $("#marqueeText").text(striArray[number].string);
    $("#marqueeText").css("visibility","visible");
    $("#marqueeText").css("top","5");
    setTimeout(function(){
        getDataJS.getDataMoveOut()
    }, 3500);
  },
  getDataMoveOut : function(){
    $("#marqueeText").css("visibility","hidden");
    $("#marqueeText").css("top","30");
    setTimeout(function(){
        getDataJS.reset()
    }, 500);
  },
  reset : function(){
    $("#marqueeText").css("top","-20");
  },
};