var apiurl =
  "http://www.omdbapi.com/?t=star+wars+episode+V?plot=short&apikey=7da1d0ba";

fetch(apiurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
