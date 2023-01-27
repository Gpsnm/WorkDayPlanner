
// global variables 
let currentDayEl = $("#currentDay");
let currentTime = moment().format("LT");
let currentHour =$(".hour");
// set todays date.
currentDayEl.text(moment().format('DD-MM-YY'));

// time conditions 
