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


const studentsList: Student[] = [student1, student2];

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
