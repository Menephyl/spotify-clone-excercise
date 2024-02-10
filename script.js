const searchInput = document.getElementById('search-input'); // só é necessário entender como funcionam as propriedades getElementBId e querySelector
 // const searchInput2 =  document.querySelectorAll('.cards'); // para requisições de api, verificar no dev tools o network do arquivo 
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){

    const url=  `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
    .then((response) => response.json() )
    .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    result.forEach(element => {
            artistName.innerText = element.name;
            artistImage.src = element.urlImg;
    });
    resultsArtist.classList.remove('hidden')
}

document.addEventListener('input', function(){
    const  searchTerm =searchInput.value.toLowerCase();
    if(searchTerm ===''){
 resultPlaylist.classList.add('hidden');
 resultsArtist.classList.rempve('hidden');
    return
}
requestApi(searchTerm);

})
function displayArtistInfo(result){ 
    const artistImage = document.getElementById("artist-info")
    const artistName = document.getElementById('artist-name')
    const artistInfo = document.createElement('div');
    artistInfo.classList.add('artist-info');

    result.ForEach((element) =>{
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
        
        const nameElement = document.createElement('p');
        nameElement.innerText = `Nome:${element.name}`;
        artistInfo.appendChild(nameElement);

        const genreElement = document.createElement('p');
        genreElement.innerText = `Gênero:${element.genre}`
        artistInfo.appendChild(genreElement);
    
});
    resultsArtist.classList.remove('hidden');
    resultsArtist.appendChild(artistInfo);
    
}
/*function greeting deve pegar a id greeting e com base no horario saudar o usuário. obs colocar no portifolio /*

Para exibir os elementos de informações, você pode criar um novo elemento HTML dentro do elemento com o id "result-artist" e adicionar as informações desejadas a esse novo elemento. Por exemplo, você pode criar um elemento <div> com a classe "artist-info" e adicionar o nome do artista e o gênero dentro desse elemento.

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");
  const artistInfo = document.createElement("div");
  artistInfo.classList.add("artist-info");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;

    const nameElement = document.createElement("p");
    nameElement.innerText = `Nome: ${element.name}`;
    artistInfo.appendChild(nameElement);

    const genreElement = document.createElement("p");
    genreElement.innerText = `Gênero: ${element.genre}`;
    artistInfo.appendChild(genreElement);
  });

  resultArtist.classList.remove("hidden");
  resultArtist.appendChild(artistInfo);
}* Dessa forma, o nome e o gênero do artista serão exibidos dentro do elemento com a classe "artist-info". Você pode estilizar esse elemento usando CSS para que ele seja exibido da maneira desejada.*/

//
