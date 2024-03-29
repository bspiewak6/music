// global variables
var artistContainerEl = document.querySelector("#artist-container");
var artistSearch = document.querySelector("#artist-search");
var userInput = document.querySelector("#icon_suffix");
var lsOutput = document.querySelector("#lsOutput");
var articleOutput = document.querySelector("#articleOutput");
var pastBtn = document.querySelector("#searchBtn");
var modal = document.querySelector("#modal1");

// variables for news section
var newsContainer = document.querySelector("#news-container");
var articleSearch = document.querySelector("#article-search");
var articleInput = document.querySelector("#article-input");

// when user clicks outside of the modal it will close
window.onclick = function (event) {
  if (event.target.closest(".modal-content")) {
    return;
  }
  else {
    modal.style.display = 'none';
  }
};

// function to get artist from user search
function getArtist(artist) {
  var apiKey = "385243-TuneOut-LTR11AIV";

  // fetch call using tastedive API
  fetch(
    'https://shielded-sea-51175.herokuapp.com/https://tastedive.com/api/similar?info=1&q=' + artist + '&k=' + apiKey + '&limit=5'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      artistContainerEl.innerHTML = "";

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
      itemTwo.setAttribute("target", "_blank");
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

// function to get artist from user search persist on page
function formSubmitHandler(event) {
  event.preventDefault();
  var artist = userInput.value.trim();
  //if statement for error
  if (artist === "") {
    M.toast({ html: "Invalid Input!" });
    return false;
  }
  getArtist(artist)
  pastArtistSearch();
  pastBtnSearch();
};

// function that gets News Articles from the NYT api
function getNews(article) {
  // variable to hold the New York Times apiKey
  var newsApiKey = "y9hgElnn7nwF3TNGuAv89poiSSqIlw4X";

  fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + "&api-key=" + newsApiKey)
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {

      newsContainer.innerHTML = "";
      // variable that pulls in user searched article headline
      var articleHeadline = response.response.docs[0].headline.main;

      // variable that pulls in user searched article NYT url
      var articleUrl = response.response.docs[0].web_url;

      // varialble that pulls in user searchd article date
      var articleDate = response.response.docs[0].pub_date;
      var formatDate = moment(articleDate).format("ll");

      // variable that pulls in user searched article snippet
      var articleSnippet = response.response.docs[0].snippet;

      // dynamically created news container
      var newsCard = document.createElement("div");
      newsCard.classList = "card grey lighten-1";
      newsContainer.appendChild(newsCard);

      var newsContent = document.createElement("div");
      newsContent.classList = "card-content white-text";
      newsCard.appendChild(newsContent);

      var newsTag = document.createElement("a");
      newsTag.classList = "card-title red-text"
      newsTag.innerHTML = articleHeadline;
      newsContent.appendChild(newsTag);

      var newsDate = document.createElement("p");
      newsDate.classList = "black-text";
      newsDate.innerHTML = formatDate;
      newsContent.appendChild(newsDate);

      var newsSnippet = document.createElement("p");
      newsSnippet.classList = "black-text";
      newsSnippet.innerHTML = articleSnippet;
      newsContent.appendChild(newsSnippet);

      var newsLink = document.createElement("a");
      newsLink.setAttribute("href", articleUrl);
      newsLink.setAttribute("target", "_blank");
      newsLink.innerHTML = "Click here to read full article";
      newsLink.classList = "red-text text-spacing"
      newsContent.appendChild(newsLink);
    })
};

// function for article search
function articleSubmitHandler(event) {
  event.preventDefault();
  var articles = articleInput.value.trim();
  //if statement for error
  if (articles === "") {
    M.toast({ html: "Invalid Input!" });
    return false;
  }
  getNews(articles);
  pastArticleSearch();
  pastArticleBtn();
};

// get searched artist
var searchedArtists = JSON.parse(localStorage.getItem('artists')) || [];

// function to push search artist and append to page below search bar
function pastArtistSearch() {
  var pastInput = userInput.value.trim();
  searchedArtists.push(pastInput);
  localStorage.setItem('artists', JSON.stringify(searchedArtists));
  lsOutput.textContent = '';
};

function pastBtnSearch() {
  for (var i = 0; i < searchedArtists.length; i++) {
    var storage = searchedArtists[i];
    var searchedEl = document.createElement("button");
    searchedEl.classList = "btn disabled grey black-text lighten-2 searchBtn";
    searchedEl.textContent = storage;
    lsOutput.appendChild(searchedEl);
  }
};
if (searchedArtists.length > 0) {
  var artists = searchedArtists[searchedArtists.length - 1]
  getArtist(artists)
  pastBtnSearch();
};

// get searched articles
var searchedArticles = JSON.parse(localStorage.getItem('articles')) || [];

// function to push search article and append to page below search bar
function pastArticleSearch() {
  var pastArticleInput = articleInput.value.trim();
  searchedArticles.push(pastArticleInput);
  localStorage.setItem('articles', JSON.stringify(searchedArticles));
  articleOutput.textContent = '';
};

function pastArticleBtn() {
  for (var i = 0; i < searchedArticles.length; i++) {
    var articleStorage = searchedArticles[i];
    var articleSearchEl = document.createElement("button");
    articleSearchEl.classList = "btn disabled grey black-text lighten-2 searchBtn";
    articleSearchEl.textContent = articleStorage;
    articleOutput.appendChild(articleSearchEl);
  }
};
if (searchedArticles.length > 0) {
  var articles = searchedArticles[searchedArticles.length - 1]
  getNews(articles);
  pastArticleBtn();
};

// initialize the about us button
$(document).ready(function () {
  $('.tooltipped').tooltip();
});

// event listener added for user search button
artistSearch.addEventListener("submit", formSubmitHandler);

// event listener added for user search button in the article section
articleSearch.addEventListener("submit", articleSubmitHandler);

// modal event listener and function to open on page load and close when user clicks
document.querySelector('.instructions').style.display = 'flex';
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.instructions').style.display = 'none';
});
