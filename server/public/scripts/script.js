$(document).ready(onReady);

function onReady() {
  console.log("is jquery working?"); // yes!

  // listeners (handlers) here
  $(".submit-button").on("click", handleSubmit);
  $("#table-body").on("click", "#delete-button", handleDelete);

} // end onReady


let totalAnnualSalary = 0;

// submit button handler
function handleSubmit(event) {
  event.preventDefault(); // jquery has default behavior we don't want here
  console.log("click --> inside handleSubmit");

  // copy and store input from text boxes to variables
  const firstName = $("#first-name-input").val();
  const lastName = $("#last-name-input").val();
  const idNumber = $("#id-number-input").val();
  const jobTitle = $("#job-title-input").val();
  let annualSalary = Number($("#salary-input").val());
  totalAnnualSalary += annualSalary;

  // append input into table
$("#table-body").append(`
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td>
      <button id='delete-button'></button>
    </td>
  </tr>
`);

// clear input in text boxes
$('#first-name-input').val("")
$('#last-name-input').val("")
$('#id-number-input').val("")
$('#job-title-input').val("")
$('#salary-input').val("")

// declare variable to store monthly total cost
// round it to nearest whole number 
let monthlyTotal = Math.round(totalAnnualSalary / 12)
console.log("Monthly Total is:", monthlyTotal)

// add text displaying the monthy total cost under the table
$(".monthly-total").text(`Monthly Total: $${monthlyTotal}`)

// only if monthly total gets bigger than 20000 assign it a class
// we can style that class differently so it changes when the 
// condition is met
if (monthlyTotal > 20000) {
  $('.monthly-total').addClass('red-background');
} // end conditional  

} // end handleSubmit


// delete button handler
function handleDelete() {
  console.log("this:", $(this));
  // this works but it looks weird?
  $(this).closest('tr').remove();
} // end handleDelete
