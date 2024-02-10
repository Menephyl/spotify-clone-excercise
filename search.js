const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});


















/** Dessa forma, o nome e o gênero do artista serão exibidos dentro do elemento com a classe "artist-info". Você pode estilizar esse elemento usando CSS para que ele seja exibido da maneira desejada.

Para exibir os elementos de informações, você pode criar um novo elemento HTML dentro do elemento com o id "result-artist" e adicionar as informações desejadas a esse novo elemento. Por exemplo, você pode criar um elemento <div> com a classe "artist-info" e adicionar o nome do artista e o gênero dentro desse elemento. */