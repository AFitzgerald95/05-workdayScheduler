// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready()

printSchedule();


var currentDate = dayjs().format('dddd, MMMM DD, YYYY')
   $('.currentDate').text(currentDate)
   // console.log(currentDate)

var currentHour = dayjs().format('HH');

  // console.log(currentHour)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('.saveBtn').click(function() {

    $('.time-block').each(function() {
      var parentId = $(this).attr('id');
      var userInput = $(this).find('textarea').val();
      localStorage.setItem(parentId, userInput);  
  });
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

function timeOfDay() {

  $('.time-block').each(function() {
    var listTime = parseInt($(this).attr('id').split('-')[1], 10);
  // console.log(listTime)
  // var currentHour = dayjs().format('HH');
  // console.log(currentHour)

    if (listTime == currentHour) {
      $(this).removeClass('past present future').addClass('present');
    } else if (listTime > currentHour) {
      $(this).removeClass('past present future').addClass('future');
    } else if (listTime < currentHour) {
      $(this).removeClass('past present future').addClass('past');
   };
  });
};

timeOfDay();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

function printSchedule() {
  $('.time-block').each(function() {
    var parentId = $(this).attr('id');
    var storedUserInput = localStorage.getItem(parentId);
    
    if (storedUserInput) {
      $(this).find('textarea').val(storedUserInput);
    }
  });
}

  printSchedule();

  // TODO: Add code to display the current date in the header of the page.