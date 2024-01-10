export default function getListStudentsIds(array) {
    if (!Array.isArray(array)) {
      return [];
    }
    const x = array.map((jambo) => jambo.id);
    return x;
}
