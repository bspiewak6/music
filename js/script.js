var artistContainerEl = document.querySelector("#artist-container");
var artistSearch = document.querySelector("#artist-search");
var userInput = document.querySelector("#icon_suffix");

function getArtist() {
  var artist = userInput.value.trim();

var apiKey = "385243-TuneOut-LTR11AIV";
fetch(
    'https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=' + artist + '&k=' + apiKey + '&limit=5'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      artistContainerEl.innerHTML= "";

      var artistName = response.Similar.Results.Name;
      var artistTag = document.createElement("p");
      artistTag.innerHTML = "Artist: " + artist;
      artistContainerEl.appendChild(artistTag);
    });
  };

  function formSubmitHandler(event) {
    event.preventDefault();
    getArtist();
  };

artistSearch.addEventListener("submit" , formSubmitHandler);

    // var newsApiKey = "3f86fcdf-510e-4f3c-a66e-87ed087781ce";
    // var url =
    // "https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/search?q=interviews&section=music&api-key=" + newsApiKey;
    // function getNews() {
    //   // var req = new Request(url);
    //   fetch (url)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(response) {
    //     console.log(response.response.results[1].webTitle);
    //   });
    // };
    // getNews();

