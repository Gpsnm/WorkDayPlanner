
// global variables 
let testTime = "13:00";
let currentDayEl = $("#currentDay");
let currentTime = moment().format("LT");
let rowEl = $(".row");
let hourArr = Array.from(rowEl)

// set todays date.
currentDayEl.text(moment().format('DD-MM-YY'));

// time conditions

console.log(hourArr);


