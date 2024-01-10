export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const initialValue = 0;
  const sum = array.reduce((acc, curValue) =>
    acc + curValue.id, initialValue);
  return sum;
}
