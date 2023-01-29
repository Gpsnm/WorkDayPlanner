// global variables
let currentDayEl = $("#currentDay");
let currentTime = moment().format("HH");
let timeBlock = $(".time-block");
let saveBtn = $(".saveButton");
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
// let childTextArea = $(this).find("textarea");
// childTextArea.val(localStorage.getItem(timeSlot));

});

// saveBtn.click(function (){
//     let clickedBtn = $(this);
//     let closestTimeBlockEl = clickedBtn.closest(".time-block");
//     let textArea = closestTimeBlockEl.find("textarea");
//     let textAreaVal = textArea.val();
// localStorage.setItem(closestTimeBlockEl.attr("id"), textAreaVal);
// })
