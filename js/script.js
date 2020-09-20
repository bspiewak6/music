var artistContainerEl = document.querySelector("#artist-container");
var artistSearch = document.querySelector("#artist-search");
var userInput = document.querySelector("#icon_suffix");

function getArtist() {
  var artist = userInput.value.trim();

var apiKey = "385243-TuneOut-LTR11AIV";
fetch(
    'https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?info=1&q=' + artist + '&k=' + apiKey + '&limit=5'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      artistContainerEl.innerHTML= "";

      console.log(response);

      var artistInfoTeaser = response.Similar.Info[0].wTeaser;
      var yUrl = response.Similar.Info[0].yUrl;

      var artistCard = document.createElement("div");
      artistCard.classList = "card grey lighten-1";
      artistContainerEl.appendChild(artistCard);

      var cardContent = document.createElement("div");
      cardContent.classList = "card-content white-text";
      artistCard.appendChild(cardContent);
      
      var cardTitle = document.createElement("span");
      cardTitle.classList = "card-title";
      cardTitle.innerHTML = "Artist:";
      cardContent.appendChild(cardTitle);

      
      var artistTag = document.createElement("p");
      artistTag.classList = "red-text"
      artistTag.setAttribute("href", yUrl);
      artistTag.innerHTML = artist;
      cardContent.appendChild(artistTag);
      
      var artistDescription = document.createElement("p");
      artistDescription.innerHTML = artistInfoTeaser;
      artistDescription.classList = "black-text";
      cardContent.appendChild(artistDescription);

      // var artistVideo = document.createElement("link");
      // artistVideo.setAttribute("href", yUrl);
      // cardContent.appendChild(artistVideo);


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
      itemOne.classList = "red-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[1].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "red-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[2].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "red-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[3].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "red-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[4].Name;
      var itemOne = document.createElement("li");
      itemOne.innerHTML = itemName;
      itemOne.classList = "red-text text-spacing"
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

