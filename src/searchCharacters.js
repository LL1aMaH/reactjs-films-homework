// import React from 'react';

function searchCharacters(search) {
  const api = 'https://api.themoviedb.org/3/';
  const Key = 'f4f71b8883c5ec7ab8066b03fd5ab2f1';
  const queryString = `movie/76341?api_key=${Key}&query=${search}`;
  return fetch(`${api}${queryString}`, {
    method: 'GET',
  })
    .then((r) => r.json())
    .then((r) => r.data.results)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
export default searchCharacters;
