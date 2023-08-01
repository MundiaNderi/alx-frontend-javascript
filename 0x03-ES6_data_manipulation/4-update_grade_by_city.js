/*eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
  // First, create a map of studentId to grade for quick access
  const gradeMap = newGrades.reduce((map, entry) => {
    map[entry.studentId] = entry.grade;
    return map;
  }, {});

  // Then, filter the students by the given city and update the grades using the map
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradeMap[student.id] || 'N/A', // Use 'N/A' if no grade is found
    }));
}

export default updateStudentGradeByCity;
