// Write your code in the main.ts file:
// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location


interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1 : Student =  {
    firstName: "Serah",
    lastName: "Nderi",
    age: 26,
    location: "Kikuyu"
}

const student2 : Student = {
    firstName: "Terry",
    lastName: "Nderi",
    age: 30,
    location: "Kahawa",
}


// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Vanilla JavaScript code to render the table
document.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  const headerFirstNameCell = headerRow.insertCell();
  const headerLocationCell = headerRow.insertCell();

  headerFirstNameCell.textContent = 'First Name';
  headerLocationCell.textContent = 'Location';

  const tableBody = table.createTBody();

  studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
});
