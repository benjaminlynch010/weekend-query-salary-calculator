$(document).ready(onReady);

function onReady() {
  console.log("is jquery working?"); // yes!

  // listeners (handlers) here
  $(".submit-button").on("click", handleSubmit);
  $("#table-body").on("click", "#delete-button", handleDelete);

} // end onReady


// functions


  let totalAnnualSalary = 0;

function handleSubmit(event) {
  event.preventDefault(); // jquery has default behavior we don't want here
  console.log("click --> inside handleSubmit");

  const firstName = $("#first-name-input").val();
  const lastName = $("#last-name-input").val();
  const idNumber = $("#id-number-input").val();
  const jobTitle = $("#job-title-input").val();
  let annualSalary = Number($("#salary-input").val());
  totalAnnualSalary += annualSalary

$("#table-body").append(`
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button id='delete-button'>Delete</button></td>
  </tr>
`);
console.log(totalAnnualSalary)

$("#monthly-total").append(`
${Math.round(totalAnnualSalary / 12)}
`);
} // end handleSubmit


function handleDelete() {
  console.log("this:", $(this));
  $(this).parent().parent().remove();
} // end handleDelete
