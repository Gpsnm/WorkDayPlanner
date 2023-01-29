// global variables
let currentDayEl = $("#currentDay");
let currentTime = moment().format("HH");
let timeBlock = $(".time-block");
let saveBtn = $(".saveButton");
let rowEl = $(".row");
// set todays date.
currentDayEl.text(moment().format("DD-MM-YY"));

rowEl.each(function () {
    let timeSlot = parseInt($(this).attr("id"));
    if (timeSlot > currentTime) {
        $(this).addClass('future')
    } else if (timeSlot < currentTime){
        $(this).addClass('past')
    }else{
        $(this).addClass('present');
    }
let childTextArea = $(this).find("textarea");
childTextArea.val(localStorage.getItem(timeSlot));

});

saveBtn.click(function (){
    let clickedBtn = $(this);
    let closestRowEl = clickedBtn.closest(".row");
    let textArea = closestRowEl.find("textarea");
    let textAreaVal = textArea.val();
localStorage.setItem(closestRowEl.attr("id"), textAreaVal);
})
