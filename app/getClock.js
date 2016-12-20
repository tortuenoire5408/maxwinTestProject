    var year;
    var month;
    var date;
    var hours;
    var minutes;
    var Seconds;
    
function getClock(){
    this.getYear = function(time){
        year = time.getFullYear();
        return year;
    }
    this.getMonth = function(time){
        month = (time.getMonth()+1);
        return month;
    }
    this.getDate = function(time){
        date = time.getDate();
        return date;
    }
    this.getHours = function(time){
        hours = time.getHours();
        return hours;
    }
    this.getMinutes = function(time){
        minutes = time.getMinutes();
        return minutes;
    }
    this.getSeconds = function(time){
        Seconds = time.getSeconds();
        return Seconds;
    }
    this.getTime = function(time){
        year = time.getFullYear();
        month = (time.getMonth()+1);
        date = time.getDate();
        hours = time.getHours();
        minutes = time.getMinutes();
        Seconds = time.getSeconds();
        if(month.length<2) month = "0"+month;
        if(date.length<2) date = "0"+date;
        if(hours.length<2) hours = "0"+hours;
        if(minutes.length<2) minutes = "0"+minutes;
        if(Seconds.length<2) Seconds = "0"+Seconds;
        var timeFormat = year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+Seconds;
        return timeFormat;
    }
}

module.exports = new getClock(); 



// module.exports = {
//     getYear : function(time){
//         year = time.getFullYear();
//         return year;
//     },
//     getMonth : function(time){
//         month = (time.getMonth()+1);
//         return month;
//     },
//     getDate : function(time){
//         date = time.getDate();
//         return date;
//     },
//     getHours : function(time){
//         hours = time.getHours();
//         return hours;
//     },
//     getMinutes : function(time){
//         minutes = time.getMinutes();
//         return minutes;
//     },
//     getSeconds : function(time){
//         Seconds = time.getSeconds();
//         return Seconds;
//     },
//     getTime : function(time){
//         year = time.getFullYear();
//         month = (time.getMonth()+1);
//         date = time.getDate();
//         hours = time.getHours();
//         minutes = time.getMinutes();
//         Seconds = time.getSeconds();
//         if(month.length<2) month = "0"+month;
//         if(date.length<2) date = "0"+date;
//         if(hours.length<2) hours = "0"+hours;
//         if(minutes.length<2) minutes = "0"+minutes;
//         if(Seconds.length<2) Seconds = "0"+Seconds;
//         var timeFormat = year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+Seconds;
//         return timeFormat;
//     }
// };