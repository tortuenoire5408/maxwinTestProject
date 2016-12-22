function getData(){
  this.getJsonLength = function(){
    var striArray = require('./data');
    // console.log(striArray[index].string);
    return striArray.length;
  }
  this.getJSON = function(index){
    var striArray = require('./data');
    console.log(striArray[index].string);
    // return striArray[index].string;
  }
};

module.exports = new getData();


// module.exports = {
//   getJSON : function(stringArray, index){ 
//             // console.log(stringArray[index].string);
//             return stringArray[index].string;
//   }
// };ß