function fetchSwapi(endpoint) {
  fetch(endpoint)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
function fetchOmdb() {
  var apiKey = "7da1d0ba";
  var apiUrl = `http://www.omdbapi.com/?s=star+wars&apikey=${apiKey}`;
  fetch(apiUrl)
    .then(function (response) {
      console.log(response);

      console.log(omdbtoSwapi[0]);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.Search[0]);
    });
}
fetchOmdb();

// fetchSwapi("https://swapi.dev/api/films/1");
// fetchSwapi("https://swapi.dev/api/films/2");
// fetchSwapi("https://swapi.dev/api/films/3");
var omdbtoSwapi = {
  0: 1,
  1: 2,
  2: 3,
  4: 4,
  6: 5,
  5: 6,
};
// Function to fetch data from SWAPI
function fetchSwapi(character) {
  var swapiUrl = `https://swapi.dev/api/people/?search=${encodeURIComponent(
    character
  )}`;

  return fetch(swapiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("SWAPI Data:", data);

      displayCharacterImage(
        data.results[0].name,
        `https://starwars-visualguide.com/assets/img/characters/${data.results[0].url.match(
          /\d+/
        )}.jpg`
      );
    });
}

// Function to fetch data from OMDB API
function fetchOmdb(character) {
  var apiKey = "24f8ea01";
  var omdbUrl = `https://www.omdbapi.com/?s=${character}&apikey=${apiKey}`;

  return fetch(omdbUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("OMDB Data:", data);
      displayCharacterImage(character, data.Search[0].Poster);
    });
}

// Function to display the character's image
function displayCharacterImage(character, imageUrl) {
  var characterImage = $("#characterImage");

  if (characterImage.length === 0) {
    console.error("Error: #characterImage not found in the HTML.");
    return;
  }

  if (imageUrl) {
    characterImage.attr("src", imageUrl);
    characterImage.attr("alt", `${character} Poster`);
  } else {
  }
}

// Function to handle the character selection
function selectCharacter(selectedCharacter) {
  // Call fetchSwapi with the selected character
  fetchSwapi(selectedCharacter);

  // Call fetchOmdb with the selected character
  fetchOmdb(selectedCharacter);
}

///------------------------------------Event listener that listens for click on movie selector--------------------------------

var selectContainer = document.getElementById("episodeChoice1");
var characterContainer = document.getElementById("characterChoice");
//when user clicks on a movie show them the character container with this code below- still in the works
selectContainer.addEventListener("click", function () {
  var options = selectContainer.querySelectorAll("option");
  var count = options.length;
  if (typeof count === "undefined" || count < 2) {
    console.log("This is working");
    characterContainer = this.setAttribute("style", "");
  }
});
