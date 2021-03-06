console.log("salary calc");
// $().ready(readyNow);
$(document).ready(createEmployeeList);

function createEmployeeList() {
  // create table
  // input ids to create fill in boxes, id and placeholder will label the input box
  // button id to create the submit button
  const salaryTable = $(`
<h2> Add Employee </h2>
<input id="first-name"placeholder="First Name"/>
<input id="last-name" placeholder="Last Name"/>
<input id="employee-id" placeholder="Employee ID"/>
<input id="job-title" placeholder="Job Title"/>
<input id="annual-salary" placeholder="Annual Salary"/>
<button id="employee-submit-button">Submit</button>
<table id="salary-table">
<h2> Employees </h2>
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
        <tr>
        </tr>
    </tbody>
</table>
<p id="monthly-salary">Total Monthly Salary $</p>
`);

  //call table to the DOM  -- jquery on the body append the salaryTable
  $("body").append(salaryTable);

  // call the employee-submit-button when clicked
    $("#employee-submit-button").on("click", handleSalaryButton);

 // delete row button found on line 76 and 103
   $(".table").on("click", ".deleteEmployee", deleteRow);
}

// function to handle salary button 
function handleSalaryButton(event) {
  // will fire when click Submit in the form
  // below will add the input values
  const empFirstName = $("#first-name").val();
  const empLastName = $("#last-name").val();
  const empID = $("#employee-id").val();
  const jobTitle = $("#job-title").val();
  const salary = $("#annual-salary").val();
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

  // create new row in the table body with jQuery
  const elem = $(`
    <tr>
        <td>${empFirstName}</td>
        <td>${empLastName}</td>
        <td>${empID}</td>
        <td>${jobTitle}</td>
        <td>${salary}</td>
        <td><button class="deleteEmployee">Delete</button><td>
    </tr>
    `);

  // add new row created in const elem to the salary-table tbody to the DOM
  $("#salary-table tbody").append(elem);

  // update annual to monthly Cost
  // NOT WORKING
  /* function updateToMonthlySalary() {
    const totalMonthly = totalAnnualSalary / 12;
    if (totalMonthly > 20000) {
      $("#monthlySalary").addClass('over');
      $("#monthlySalary").removeClass('under')
    } else {
      $("#monthlySalary").addClass('under');
      $("#monthlySalary").removeClass('over');
    }
    console.log(totalMonthly); */
    
    /* // I can't get the total salary to add to the DOM
     $("#monthlySalary").text(totalMonthly.toFixed(2));
  } */
  

  // place monthly salary to the DOM
  //$("#monthly-salary").text(`Total Monthly Salary $${monthlyCost}`);
}



// function to be called by the delete buttons
// NOT WORKING
function deleteRow(event) {
    const reallyDelete = confirm("Press continue to delete the employee")
    if(reallyDelete){
      // find row in DOM and remove it
      const me = $(event.target);
      const entireRow = me.closest('tr');
      entireRow.remove();
    }
    console.log('in delete row');
    
}