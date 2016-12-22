// var number;
// var striArray = require('./data');

// var getDataJS = module.exports = {
//   getJSON : function(){
//     $.each(striArray, function(key, val){   
//             console.log(val.string);
//         });
//   },
//   getDataMoveIn : function(){
//     number = Math.floor(Math.random()*striArray.length);
//     $("#marqueeText").text(striArray[number].string);
//     $("#marqueeText").css("visibility","visible");
//     $("#marqueeText").css("top","5");
//     setTimeout(function(){
//         getDataJS.getDataMoveOut()
//     }, 3500);
//   },
//   getDataMoveOut : function(){
//     $("#marqueeText").css("visibility","hidden");
//     $("#marqueeText").css("top","30");
//     setTimeout(function(){
//         getDataJS.reset()
//     }, 500);
//   },
//   reset : function(){
//     $("#marqueeText").css("top","-20");
//   },
// };

var number;
// var striArray = require('./data');

function getData(){
  this.getJSON = function(striArray, index){
    console.log(striArray[index].string);
    return striArray[index].string;
  },
  this.getDataMoveIn = function(striArray){
    number = Math.floor(Math.random()*striArray.length);
    $("#marqueeText").text(striArray[number].string);
    $("#marqueeText").css("visibility","visible");
    $("#marqueeText").css("top","5px");
    // $("#marqueeText").css("width","200px");
    // console.log($("#marqueeText").css("top"));
    return [striArray.length, striArray[number].string, number, $("#marqueeText").text(), $("#marqueeText").css("visibility"), $("#marqueeText").css("top")];
    // setTimeout(function(){
    //     getDataMoveOut()
    // }, 3500);
  },
  getDataMoveOut = function(){
    $("#marqueeText").css("visibility","hidden");
    $("#marqueeText").css("top","30px");
    return [$("#marqueeText").css("visibility"), $("#marqueeText").css("top")];
    // setTimeout(function(){
    //     reset()
    // }, 500);
  },
  reset = function(){
    $("#marqueeText").css("top","-20px");
    return $("#marqueeText").css("top");
  }
};

module.exports = new getData();