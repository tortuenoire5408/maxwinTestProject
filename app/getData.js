module.exports = {
    getJsonLength : function(JSONArray){
        var stringArray = JSONArray;
        console.log(stringArray.length);
        return stringArray.length;
    },
    getJSON : function(JSONArray, index){ 
        var stringArray = JSONArray;
        console.log(stringArray[index].string);
        return stringArray[index].string;
    }
};