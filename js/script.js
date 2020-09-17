var apiKey = "385243-TuneOut-LTR11AIV";
fetch(
  'https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=kiss' + '&k=' + apiKey
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // Use 'querySelector' to get the ID of the container
    var responseContainerEl = document.querySelector('#response-container');
    // Create an '<p>' element
    var tunesP = document.createElement('p');
    // Set attribute to the 'webTitle' from API response
    tunesP.setAttribute(response.results[0].apiUrl);
    // Append the '<p>' element to the page
    responseContainerEl.appendChild(tunesP);
  });


var newsApiKey = "3f86fcdf-510e-4f3c-a66e-87ed087781ce";
var url =
  "https://cors-anywhere.herokuapp.com/https://content.guardianapis.com/search?q=interviews&section=music&api-key=" + newsApiKey;
function getNews() {
  // var req = new Request(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getNews();


