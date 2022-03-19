const elementById = (id) => {
  const text = document.getElementById(id);
  return text;

};

const handleSearch = () => {
  const keyword = elementById("keyword");

  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
  fetch(url)
    .then(res => res.json())
    .then(data => showArtists(data.artists));

  
};