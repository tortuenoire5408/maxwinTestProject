var num;
// var stringArray = require('./data2');;

// var getData2JS = module.exports = {
//   getJSON : function(){
//     $.each(stringArray, function(key, val){   
//             console.log(val.string);
//         });
//   },
//   delayTime : function(){
//     $("#txt").text(" ");
//     $("#txt").attr('scrollamount','0');
//     $("#txt").stop();
//     console.log("delayTime");
//     setTimeout(function(){
//         getData2JS.getDataRestart()
//     }, 1000);
//   },
//   getDataRestart : function(){
//     num = Math.floor(Math.random()*stringArray.length);
//     $("#txt").text(stringArray[num].string);
//     $("#txt").attr('scrollamount','5');
//     document.getElementById('txt').start();
//     $("#txt").prop('loop','-1');
//     console.log("getDataRestart");
//     setTimeout(function(){
//         getData2JS.changeLoop()
//     }, 5000);
//   },
//   changeLoop : function(){
//     $("#txt").prop('loop','1');
//     console.log("changeLoop");
//   },
// };

module.exports = {
  getJSON : function(stringArray, index){ 
            console.log(stringArray[index].string);
            return stringArray[index].string;
  },
  delayTime : function(){
    $("#txt").text(" ");
    $("#txt").attr('scrollamount','0');
    $("#txt").stop();
    // console.log('delayTime');
    return [$("#txt").text(), $("#txt").attr('scrollamount'), $("#txt").stop()]; 
    // setTimeout(function(){
    //     getData2JS.getDataRestart()
    // }, 1000);
  },
  getDataRestart : function(stringArray){
    num = Math.floor(Math.random()*stringArray.length);
    $("#txt").text(stringArray[num].string);
    $("#txt").attr('scrollamount','5');
    $("#txt").prop('loop','-1');
    // document.getElementById('txt').start();
    // console.log("getDataRestart");
    return [stringArray.length, stringArray[num].string, num, $("#txt").text(), $("#txt").attr('scrollamount'), $("#txt").prop('loop')];
    setTimeout(function(){
        getData2JS.changeLoop()
    }, 5000);
  },
  changeLoop : function(){
    $("#txt").prop('loop','1');
    // console.log("changeLoop");
    return $("#txt").prop('loop');
  },
};