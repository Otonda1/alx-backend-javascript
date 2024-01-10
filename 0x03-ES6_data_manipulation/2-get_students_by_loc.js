export default function getStudentsByLocation(getListStudents, city) {
  if (!Array.isArray(getListStudents) || typeof city !== 'string') {
    return [];
  }
  const filteredStudents = getListStudents.filter((student) => student.location = city);
  return filteredStudents;
}
