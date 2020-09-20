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

      var artistCard = document.createElement("div");
      artistCard.classList = "card blue-grey darken-1";
      artistContainerEl.appendChild(artistCard);

      var cardContent = document.createElement("div");
      cardContent.classList = "card-content white-text";
      artistCard.appendChild(cardContent);
      
      var cardTitle = document.createElement("span");
      cardTitle.classList = "card-title";
      cardTitle.innerHTML = "Artist";
      cardContent.appendChild(cardTitle);

      var artistTag = document.createElement("p");
      artistTag.innerHTML = artist;
      artistTag.classList = "orange-text"
      cardContent.appendChild(artistTag);

      var recContainer = document.createElement("div");
      artistCard.appendChild(recContainer);

      var recTitle = document.createElement("span");
      recTitle.classList = "card-title white-text text-spacing"
      recTitle.innerHTML = "Other Artists:";
      recContainer.appendChild(recTitle);

      var recList = document.createElement("ul");
      recContainer.appendChild(recList);

      var itemName = response.Similar.Results[0].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "orange-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[1].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "orange-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[2].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "orange-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[3].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "orange-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[4].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "orange-text text-spacing"
      recList.appendChild(itemOne);
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

