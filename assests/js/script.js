const timeDisplay = $("#time-display");






// save reference to important DOM elements
displayTime();

// handle displaying the time
function displayTime() {
  currentTime = setInterval(function () {
    var now = dayjs();
    timeDisplay.text(now.format("MMMM D, YYYY hh:mm:ss"));
  });
}