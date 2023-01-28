// global variables
let testTime = 9;
let currentDayEl = $("#currentDay");
let currentTime = moment().format("HH");
let rowEl = $(".row");
let hourEl = $(".hour");

// set todays date.
currentDayEl.text(moment().format("DD-MM-YY"));
