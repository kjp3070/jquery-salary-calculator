console.log('salary calc');
// $().ready(readyNow);
$(document).ready(createEmployeeList);

function createEmployeeList(){
// create table
const salaryTable = $(`
<h2> Add Employee </h2>
<input id="first-name" placeholder="First Name"/>
<input id="last-name" placeholder="Last Name"/>
<input id="employee-id" placeholder="Employee ID"/>
<input id="job-title" placeholder="Job Title"/>
<input id="annual-salary" placeholder="Annual Salary"/>
<button id="employee-submit-button"
<table id="salary-table">Submit</button>
<br>
    <thead>
       <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Employee ID</th>
           <th>Job Title</th>
           <th>Annual Salary</th>
       </tr>
    </thead>
    <tbody>
    </tbody>
</table>
<p id="total-salary">Total Monthly Salary "</p>
`);
//call table to the DOM
$('body').append(salaryTable);

// call the employee-submit-button when clicked
$("#employee-submit-button").on('click', handleSalaryButton);

// delete employee from DOM
//   COMPLETE        $('body').on('click', '.deleteEmployee', deleteRow);

}
// global variable to set totalSalary to zero
let totalSalary = 0;

// function to handle salary button
function handleSalaryButton(event) {
    const empFirstName = $('#first-name').val();
    const empLastName = $('#last-name').val();
    const empID = $('#employee-id').val();
    const jobTitle = $('#job-title').val();
    const salary = $('#annual-salary').val();
    console.log(empFirstName);
    console.log(empLastName);
    console.log(empID);
    console.log(jobTitle);
    console.log(salary);

// clear input values
    $("#first-name").val("");
    $("#last-name").val("");
    $("#employee-id").val("");
    $("#job-title").val("");
    $("#annual-salary").val("");

// add row to the table
   $("tbody").append(event);

// update total salary
totalSalary += Number(salary);
$('#total-salary').text(`${$totalSalary}`); 

}

const annualSalary = $('#annual-salary').val();
// need for each button