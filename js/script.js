// global variables
var artistContainerEl = document.querySelector("#artist-container");
var artistSearch = document.querySelector("#artist-search");
var userInput = document.querySelector("#icon_suffix");

// function to get artist from user search
// fetch call using tastedive API
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

      // variable that pulls in user searched artist description 
      var artistInfoTeaser = response.Similar.Info[0].wTeaser;
      
      // variable that pulls in youtube link for user searched artist 
      var yUrl = response.Similar.Info[0].yUrl;

      // dynamically created artist container 
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

      var artistTag = document.createElement("a");
      artistTag.classList = "red-text"
      artistTag.setAttribute("href", yUrl);
      artistTag.innerHTML = artist;
      cardContent.appendChild(artistTag);
      
      var artistDescription = document.createElement("p");
      artistDescription.innerHTML = artistInfoTeaser;
      artistDescription.classList = "black-text";
      cardContent.appendChild(artistDescription);
      
      // dynamically created artist recommendation container
      var recContainer = document.createElement("div");
      recContainer.classList = "rec-container";
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
      var itemTwo = document.createElement("li");
      itemTwo.innerHTML = itemName;
      itemTwo.classList = "red-text text-spacing"
      recList.appendChild(itemTwo); 

      var itemName = response.Similar.Results[2].Name;
      var itemThree = document.createElement("li");
      itemThree.innerHTML = itemName;
      itemThree.classList = "red-text text-spacing"
      recList.appendChild(itemThree);

      var itemName = response.Similar.Results[3].Name;
      var itemFour = document.createElement("li");
      itemFour.innerHTML = itemName;
      itemFour.classList = "red-text text-spacing"
      recList.appendChild(itemFour);

      var itemName = response.Similar.Results[4].Name;
      var itemFive = document.createElement("li");
      itemFive.innerHTML = itemName;
      itemFive.classList = "red-text text-spacing"
      recList.appendChild(itemFive);
    });
  };

  // function to get artist from user search
  function formSubmitHandler(event) {
    event.preventDefault();
    getArtist();
  };

  // event listener added for user search button
  artistSearch.addEventListener("submit", formSubmitHandler);




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

