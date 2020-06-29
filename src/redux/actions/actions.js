export default function searchName(value) {
  return {
    type: 'SEARCH',
    payload: value,
  };
}
