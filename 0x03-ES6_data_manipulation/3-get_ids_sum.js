export default function getStudentIdsSum(students) {
  function sumIds(accumulator, currentValue) {
    return accumulator + currentValue.Id;
  }

  const studentIdsSum = students.reduce(sumIds, 0);

  console.log(studentIdsSum);
  return studentIdsSum;
}
