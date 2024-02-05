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

var charImgtext = document.getElementById("characterImageContainer");
var charLight = document.getElementById("lightcharChoice");
var charDark = document.getElementById("darkcharChoice");
let charNames = [];
const names = ["birth_year", "films", "homeworld", "starships", "vehicles"];
// const sides = [charLight, charDark];

// ------------------------------------------------------------Function to fetch data from SWAPI---------------------------------------------
var nameofCharacter;
var charDetails;
var characterSide;
var charImage;
async function fetchSwapi(character, side) {
  try {
    const swapiUrl = `https://swapi.dev/api/people/?search=${encodeURIComponent(
      character
    )}`;
    const response = await fetch(swapiUrl);
    const data = await response.json();
    console.log(`${side.toUpperCase()} SWAPI Data:`, data);

    // Extract film URLs from SWAPI response
    const filmUrls = data.results[0]?.films || [];

    // Fetch film data using the film URLs
    const films = await Promise.all(
      filmUrls.map((filmUrl) =>
        fetch(filmUrl).then((response) => response.json())
      )
    );

    // Extract character details
    const characterDetails = {
      birth_year: data.results[0]?.birth_year,
      // homeworld: data.results[0]?.homeworld,
      // starships: data.results[0]?.starships,
      // vehicles: data.results[0]?.vehicles,
      films: films.map((film) => film.title),
    };

    console.log("Character Details:", characterDetails);

    nameofCharacter = data.results[0]?.name;
    charDetails = characterDetails;
    characterSide = side;
    charImage = `https://starwars-visualguide.com/assets/img/characters/${data.results[0]?.url.match(
      /\d+/
    )}.jpg`;

    // Display character image based on side
    // displayCharacterImage(
    //   data.results[0]?.name,
    //   `https://starwars-visualguide.com/assets/img/characters/${data.results[0]?.url.match(
    //     /\d+/
    //   )}.jpg`,
    //   side
    // );

    // // Display character details
    // displayCharacterDetails(data.results[0]?.name, characterDetails, side);
  } catch (error) {
    console.error(`Error fetching ${side} side character data:`, error);
  }
}

// ---------------------------------------------------------Function to fetch data from OMDB API
async function fetchOmdb(character, side) {
  try {
    const omdbApiKey = "24f8ea01";
    const omdbUrl = `https://www.omdbapi.com/?s=${character}&apikey=${omdbApiKey}`;
    const response = await fetch(omdbUrl);
    const data = await response.json();
    console.log(`${side.toUpperCase()} OMDB Data:`, data);

    // Display character image based on side
    // displayCharacterImage(character, data.Search[0]?.Poster, side);

    // Display character details
    // displayCharacterDetails(character, names, side ? side.toString() : "");
  } catch (error) {
    console.error(
      `Error fetching ${side} side character data from OMDB:`,
      error
    );
  }
}
/////--------------------------------------------Display Character Image-----------------------------------------------
// Function to display character image
function displayCharacterImage(selectedCharacter, charImage, side) {
  var characterImage;
  if (movieId == "movie1") {
    characterImage = document.getElementById(`${side}CharacterImage1`);
  } else if (movieId == "movie2") {
    characterImage = document.getElementById(`${side}CharacterImage2`);
  } else if (movieId == "movie3") {
    characterImage = document.getElementById(`${side}CharacterImage3`);
  } else if (movieId == "movie4") {
    characterImage = document.getElementById(`${side}CharacterImage4`);
  } else if (movieId == "movie5") {
    characterImage = document.getElementById(`${side}CharacterImage5`);
  } else if (movieId == "movie6") {
    characterImage = document.getElementById(`${side}CharacterImage6`);
  }

  if (!characterImage) {
    console.error(`Error: #${side}CharacterImage not found in the HTML.`);
    return;
  }

  if (charImage) {
    characterImage.src = charImage;
    characterImage.alt = `${selectedCharacter} Poster`;
  } else {
  }
}
/////--------------------------------------------Display Character Details -----------------------------------------------
function displayCharacterDetails(selectedCharacter, details, side) {
  var detailsContainer;
  console.log(movieId);
  if (movieId == "movie1") {
    console.log("Movie 1");
    detailsContainer = document.getElementById(`${side}FactsContainer1`);
  } else if (movieId == "movie2") {
    console.log("Movie 2");
    detailsContainer = document.getElementById(`${side}FactsContainer2`);
  } else if (movieId == "movie3") {
    console.log("Movie 3");
    detailsContainer = document.getElementById(`${side}FactsContainer3`);
  } else if (movieId == "movie4") {
    console.log("Movie 4");
    detailsContainer = document.getElementById(`${side}FactsContainer4`);
  } else if (movieId == "movie5") {
    console.log("Movie 5");
    detailsContainer = document.getElementById(`${side}FactsContainer5`);
  } else if (movieId == "movie6") {
    console.log("Movie 6");
    detailsContainer = document.getElementById(`${side}FactsContainer6`);
  } else {
    console.log("Break");
  }

  if (!detailsContainer) {
    console.error(`Error: #${side}FactsContainer not found in the HTML.`);
    return;
  }

  // Created a details container
  const detailsElement = document.createElement("div");
  detailsElement.classList.add("content");

  // For the character name
  const nameParagraph = document.createElement("p");
  nameParagraph.innerHTML = `<strong>Name:</strong> ${selectedCharacter}`;
  detailsElement.appendChild(nameParagraph);

  for (const key in details) {
    if (Array.isArray(details[key])) {
      const listParagraph = document.createElement("p");
      listParagraph.innerHTML = `<strong>${
        key.charAt(0).toUpperCase() + key.slice(1)
      }:</strong> ${details[key].join(", ")}`;
      detailsElement.appendChild(listParagraph);
    } else if (key === "birth_year") {
      var birthYear = "birth_year";
      var formattedBirthYear = birthYear.replace("_", " ");
      formattedBirthYear =
        formattedBirthYear.charAt(0).toUpperCase() +
        formattedBirthYear.slice(1);

      const birthYearParagraph = document.createElement("p");
      birthYearParagraph.innerHTML = `<strong>${formattedBirthYear}:</strong> ${details[key]}`;
      detailsElement.appendChild(birthYearParagraph);
    } else {
      // For other details
      const detailParagraph = document.createElement("p");
      detailParagraph.innerHTML = `<strong>${
        key.charAt(0).toUpperCase() + key.slice(1)
      }:</strong> ${details[key]}`;
      detailsElement.appendChild(detailParagraph);
    }
  }
  var birthYear = "birth_year";
  var formattedBirthYear = birthYear.replace("_", " ");
  formattedBirthYear =
    formattedBirthYear.charAt(0).toUpperCase() + formattedBirthYear.slice(1);
  $(".content p:nth-child(2)").text(formattedBirthYear);

  detailsContainer.innerHTML = "";

  // Append the details to the container
  detailsContainer.appendChild(detailsElement);
}

// Function to handle the character selection
async function selectCharacter(selectedCharacter, side) {
  try {
    // Call back fetchSwapi
    await fetchSwapi(selectedCharacter, side);

    // Call back fetchOmdb
    await fetchOmdb(selectedCharacter, side);

    // Display character details
    displayCharacterDetails(nameofCharacter, charDetails, characterSide);
    //display character image
    displayCharacterImage(nameofCharacter, charImage, characterSide);
  } catch (error) {
    console.error("Error selecting character:", error);
  }
}

///------------------------------------Event listener that listens for click on movie selector--------------------------------
var movieId;
$(".column ").on("click", "img", function () {
  var posterClicked = this.parentNode.id;
  console.log(posterClicked);

  // Hide all movies
  $("#characterChoice .columns").addClass("is-hidden");

  // Show the movie that corresponds to the clicked poster
  movieId = "movie" + posterClicked.replace("Ep", "");
  console.log(movieId);
  $("#" + movieId).removeClass("is-hidden");

  // Show character choice
  $("#characterChoice").removeClass("is-hidden");
});
