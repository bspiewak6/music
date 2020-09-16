var apiKey = "385243-TuneOut-LTR11AIV";
fetch(
    'https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=kiss' + '&k=' + apiKey
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });