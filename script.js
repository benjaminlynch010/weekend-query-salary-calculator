$(document).ready(onReady) 

function onReady() {
    console.log('is jquery working?') // yes!

    // handlers here
    $(".submit-button").on('click', handleSubmit)
    $("#table-body").on('click', handleDelete)




}

function handleSubmit(event) {
    event.preventDefault() // jquery has default behavior we don't want here
    console.log('click --> inside handleSubmit')

    const firstName = $('#first-name-input').val()
    const lastName = $('#last-name-input').val()
    const idNumber = $('#id-number-input').val()
    const jobTitle = $('#job-title-input').val()
    const annualSalary = $('#salary-input').val()

$('#table-body').append(`
<tr>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${idNumber}</td>
  <td>${jobTitle}</td>
  <td>${annualSalary}</td>
  <td><button id='delete-button'>Delete</button></td>
</tr>
`)

}

function handleDelete() {
    console.log('this:', $(this))
    $('#table-body').remove()
}