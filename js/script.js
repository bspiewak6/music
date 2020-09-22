// global variables
var artistContainerEl = document.querySelector("#artist-container");
var artistSearch = document.querySelector("#artist-search");
var userInput = document.querySelector("#icon_suffix");

// variables for news section
var newsContainer = document.querySelector("#news-container");
var articleSearch = document.querySelector("#article-search");
var articleInput = document.querySelector("#article-input");

// initialize the dropdown select menu for article searches
$(document).ready(function(){
  $('select').formSelect();
});

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

      // variables that pull in youtube links for recommendation list
      var yUrlOne = response.Similar.Results[0].yUrl;
      var yUrlTwo = response.Similar.Results[1].yUrl;
      var yUrlThree = response.Similar.Results[2].yUrl;
      var yUrlFour = response.Similar.Results[3].yUrl;
      var yUrlFive = response.Similar.Results[4].yUrl;

      // dynamically created artist container 
      var artistCard = document.createElement("div");
      artistCard.classList = "card grey lighten-1";
      artistContainerEl.appendChild(artistCard);

      var cardContent = document.createElement("div");
      cardContent.classList = "card-content white-text";
      artistCard.appendChild(cardContent);

      var artistTag = document.createElement("a");
      artistTag.classList = "card-title red-text"
      artistTag.setAttribute("href", yUrl);
      artistTag.setAttribute("target", "_blank");
      artistTag.innerHTML = artist;
      cardContent.appendChild(artistTag);
      
      var artistDescription = document.createElement("p");
      artistDescription.innerHTML = artistInfoTeaser;
      artistDescription.classList = "black-text";
      cardContent.appendChild(artistDescription);
      
      // dynamically created artist recommendation container
      var recContainer = document.createElement("div");
      recContainer.classList = "card-action rec-container";
      artistCard.appendChild(recContainer);

      var recTitle = document.createElement("span");
      recTitle.classList = "card-title white-text text-spacing"
      recTitle.innerHTML = "Our Recommendations:";
      recContainer.appendChild(recTitle);

      var recList = document.createElement("ul");
      recContainer.appendChild(recList);

      var itemName = response.Similar.Results[0].Name;
      var itemOne = document.createElement("a");
      itemOne.setAttribute("href", yUrlOne);
      itemOne.setAttribute("target", "_blank");
      itemOne.innerHTML = itemName;
      itemOne.classList = "red-text text-spacing"
      recList.appendChild(itemOne);

      var itemName = response.Similar.Results[1].Name;
      var itemTwo = document.createElement("a");
      itemTwo.setAttribute("href", yUrlTwo);
      itemTwo.setAttribute("target","_blank");
      itemTwo.innerHTML = itemName;
      itemTwo.classList = "red-text text-spacing"
      recList.appendChild(itemTwo); 

      var itemName = response.Similar.Results[2].Name;
      var itemThree = document.createElement("a");
      itemThree.setAttribute("href", yUrlThree);
      itemThree.setAttribute("target", "_blank");
      itemThree.innerHTML = itemName;
      itemThree.classList = "red-text text-spacing"
      recList.appendChild(itemThree);

      var itemName = response.Similar.Results[3].Name;
      var itemFour = document.createElement("a");
      itemFour.setAttribute("href", yUrlFour);
      itemFour.setAttribute("target", "_blank");
      itemFour.innerHTML = itemName;
      itemFour.classList = "red-text text-spacing"
      recList.appendChild(itemFour);

      var itemName = response.Similar.Results[4].Name;
      var itemFive = document.createElement("a");
      itemFive.setAttribute("href", yUrlFive);
      itemFive.setAttribute("target", "_blank");
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

  
  // function that gets News Articles from the NYT api
  function getNews() {

    // variables to hold the New York Times apiKey and url
    var newsApiKey = "y9hgElnn7nwF3TNGuAv89poiSSqIlw4X";
    var articleType = articleInput.value.trim();
    
    fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + articleType + "&api-key=" + newsApiKey)
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      console.log(response);
    
    // variable that pulls in user searched article headline 
    var articleHeadline = response.response.docs[0].headline.main;
      console.log(articleHeadline);
    // variable that pulls in user searched article NYT url
    var articleUrl = response.response.docs[0].web_url;
      console.log(articleUrl);
    })
  };
  
  function articleSubmitHandler(event) {
    event.preventDefault();
    getNews();
  };

  // event listener added for user search button
  artistSearch.addEventListener("submit", formSubmitHandler);
  // event listener added for user search button in the article section
  articleSearch.addEventListener("submit", articleSubmitHandler);