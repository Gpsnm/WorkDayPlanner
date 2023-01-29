// global variables
let currentDayEl = $("#currentDay");
let currentTime = moment().format("HH");
let timeBlock = $(".time-block");
let saveBtn = $(".saveButton");
let rowEl = $(".row");
// set todays date.
currentDayEl.text(moment().format("DD-MM-YY"));

//  function that takes the row node tree and loops through
// getting each id and passing it as a number.
rowEl.each(function () {
  let timeSlot = parseInt($(this).attr("id"));
  if (timeSlot > currentTime) {
    $(this).addClass("future");
  } else if (timeSlot < currentTime) {
    $(this).addClass("past");
  } else {
    $(this).addClass("present");
  }

//   used to access local storage and display in text area even after a reload.
  let childTextArea = $(this).find("textarea");
  childTextArea.val(localStorage.getItem(timeSlot));
});

// function that executes once the saved button has been clicked, it finds the nearest row div closest to the clicked button then inturn finds the closest textarea and returns its value that is passed into local storage.
saveBtn.click(function () {
  let clickedBtn = $(this);
  let closestRowEl = clickedBtn.closest(".row");
  let textArea = closestRowEl.find("textarea");
  let textAreaVal = textArea.val();
  localStorage.setItem(closestRowEl.attr("id"), textAreaVal);
});
