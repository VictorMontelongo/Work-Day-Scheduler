const timeDisplay = $("#time-display");
const bodyText = $(".text");
const submitBtn = $(".btn");
const rowTimeBlock = $(".time-block")
var text = ["text-9", "text - 10", "text -11", "text -12", "text -13", "text -15", "text-16", "text-17"];
// handle displaying the time
function displayTime() {
  currentTime = setInterval(function () {
    var now = dayjs();
    timeDisplay.text(now.format("MMMM D, YYYY hh:mm:ss"));
  });
}

// attempting to save the text from the body in local storage
function saveText() {
  console.log(bodyText);
  localStorage.setItem("text", JSON.stringify(text));


}
var storedData = localStorage.getItem("date-time")
for (var i = 9; i < 17; i++) {
  // This should determine past, current, and future time
  const currentClass = "past"

  const hourName = "9am"

  const hourData = ""

  const newBlock = $(` <div id="09" class="row time-block ${currentClass}">
        <div class="col-2 col-md-1 hour text-center py-3">${hourName}</div>
        <textarea id='text-09' class="col-8 col-md-10 description" rows="3"> ${hourData} </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
  `)
  // append to the calander itself

}


// save reference to important DOM elements
displayTime();