async function searchCharacters(search, setResults) {
  const Key = 'f4f71b8883c5ec7ab8066b03fd5ab2f1';
  const queryString = `https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${search}`;

  const data = await fetch(`${queryString}`, {
    headers: { accept: 'application/json' },
  });
  const res = await data.json();
  // for (const key in res.results) {
  //   console.log(key);
  //   console.log(res.results[key]);
  // }

  setResults(res.results);
}
export default searchCharacters;
