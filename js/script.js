var artistEl = document.querySelector("#artist-container");
function getArtist() {
var apiKey = "385243-TuneOut-LTR11AIV";
fetch(
    'https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=kanye west' + '&k=' + apiKey + '&limit=5'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.Similar.Results);
      var artistName = response.Similar.Results[0].Name;
      var artist = document.createElement("p");
      artist.textContent = "Artist: " + artistName;
      artistEl.appendChild(artist);
      var artistName = response.Similar.Results[1].Name;
      var artist = document.createElement("p");
      artist.textContent = "Artist: " + artistName;
      artistEl.appendChild(artist);
    });
  };
  getArtist();
    var newsApiKey = "3f86fcdf-510e-4f3c-a66e-87ed087781ce";
    var url =
    "https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/search?q=interviews&section=music&api-key=" + newsApiKey;
    function getNews() {
      // var req = new Request(url);
      fetch (url)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response.response.results[1].webTitle);
      });
    };
    // getNews();