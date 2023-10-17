const timeDisplay = $("#time-display");
const bodyText = $(".text");

// handle displaying the time
function displayTime() {
  currentTime = setInterval(function () {
    var now = dayjs();
    timeDisplay.text(now.format("MMMM D, YYYY hh:mm:ss"));
  });
}
displayTime();
// attempting to save the text from the body in local storage

// this should hold and create the blocks I need to hold the information
var hourData = []
const currentState = dayjs().format('H');
const hourBlock = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

for (var i = 0; i < 9; i++) {
  // This should determine past, current, and future time with color
  $("#row-display").append(`<div id=${i} class="row time-block ${currentState}">
  <div class="col-2 col-md-1 hour text-center py-3">${hourBlock[i]}</div>
  <textarea id='text-09' class="col-8 col-md-10 description" rows="3"> ${hourData} </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true">save</i>`)

  $(currentState).each(function () {
    const hourData = parseInt(this.id);
    $(this).changeState("past", hourData < currentState)
    $(this).changeState("present", hourData === currentState)
    $(this).changeState("future", hourData > currentState)
  })

  function colorChange() {
    $(currentState).each(function () {
      const hourData = parseInt(this.id)
      if (hourData === currentState) {
        $(this).removeState("past future").addState("present");
      } else if (hourData < currentState) {
        $(this).removeState("future present").addState("past");
      } else if (hourData > currentState) {
        $(this).removeState("past present").addState("future");
      }
    })
  }
}
const btnSave = $(".btn.saveBtn");
function saveProjectsToStorage(hourData) {
  localStorage.setItem('hourData', JSON.stringify(hourData));
}
function plannerFromStorage() {
  var Data = localStorage.getItem("hourData");
  if (Data) {
    Data = JSON.parse("hourData");
  } else {
    Data = [];
  }
  return Data;
}
btnSave.on("click", saveProjectsToStorage);

// Takes an array of dayData and saves them in localStorage.










// function colorDisplay() {
//       })
//     }
//     // save reference to important DOM elements
//     colorDisplay();
//
//     createBlocks();
//     colorChange();
