function getClock(){
    this.getYear = function(time){
        var year = time.getFullYear();
        return year;
    }
    this.getMonth = function(time){
        var month = (time.getMonth()+1);
        return month;
    }
    this.getDate = function(time){
        var date = time.getDate();
        return date;
    }
    this.getHours = function(time){
        var hours = time.getHours();
        return hours;
    }
    this.getMinutes = function(time){
        var minutes = time.getMinutes();
        return minutes;
    }
    this.getSeconds = function(time){
        var Seconds = time.getSeconds();
        return Seconds;
    }
    this.getTime = function(time){
        var year = this.getYear(time);
        var month = (this.getMonth(time)+1);
        var date = this.getDate(time);
        var hours = this.getHours(time);
        var minutes = this.getMinutes(time);
        var Seconds = this.getSeconds(time);
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