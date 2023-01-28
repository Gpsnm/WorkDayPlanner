// global variables
let testTime = 9;
let currentDayEl = $("#currentDay");
let currentTime = moment().format("HH");
let rowEl = $(".row");
let hourEl = $(".hour");
let textArea = $(".time-block");
let hour1 = $("#hour1")
let hourNeeded;
// set todays date.
currentDayEl.text(moment().format("DD-MM-YY"));

let timeNeed = rowEl.attr('data-time');

console.log(timeNeed);