// global variables
let currentDayEl = $("#currentDay");
let currentTime = moment().format("HH");
let timeBlock = $(".time-block");
let saveBtn = $("#savebtn");
// set todays date.
currentDayEl.text(moment().format("DD-MM-YY"));

timeBlock.each(function () {
    let timeSlot = parseInt($(this).attr("id"));
    if (timeSlot > currentTime) {
        $(this).addClass('future')
    } else if (timeSlot < currentTime){
        $(this).addClass('past')
    }else{
        $(this).addClass('present');
    }
});