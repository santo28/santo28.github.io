var d = new Date();
// get date of the week

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[d.getDay()];

var day = d.getUTCDate();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October",
             "November", "December"];
var dayOfMonth = months[d.getMonth()];

var fullYear = d.getFullYear();

//Tuesday 5, June 2018
var fullDate = dayName + ' ' + day + ', ' + dayOfMonth + ' ' + fullYear;

document.getElementById('currentdate').innerHTML = fullDate;