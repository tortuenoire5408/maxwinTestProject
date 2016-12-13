module.exports = {
    getClock: function (){
        var time = new Date();
        var year = time.getFullYear();
        var month = ""+(time.getMonth()+1);
        var date = ""+time.getDate();
        var hours = ""+time.getHours();
        var minutes = ""+time.getMinutes();
        var Seconds = ""+time.getSeconds();
        if(month.length<2) month = "0"+month;
        if(date.length<2) date = "0"+date;
        if(hours.length<2) hours = "0"+hours;
        if(minutes.length<2) minutes = "0"+minutes;
        if(Seconds.length<2) Seconds = "0"+Seconds;
        var timeFormat = year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+Seconds;
        return timeFormat;
    }
};