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
};
