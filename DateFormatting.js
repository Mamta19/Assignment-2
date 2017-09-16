var d = new Date(1993,6, 28);
console.log(d.toString());     
console.log(d.toDateString()); 
console.log(d.toTimeString());
getMonthYear: function(date){
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return month + '/' + year; 
    }
 
    var getMonthYear = DateFormatter.getMonthYear(new Date());
    console.log('Get Month Year ' + getMonthYear);
