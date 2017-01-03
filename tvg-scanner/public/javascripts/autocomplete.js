$(function() {
  //just array of strings
    var availableTags = [];
    var genere = {
        genre_ids: '28'
        };
  
  $.get({
      url: "https://api.themoviedb.org/3/discover/movie?api_key=9ec9245d39c71e558afd18d3340dc979&language=it&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=28",
      data: genere,
      success: function (result) {
          $.each(result.results, function (i) {
            availableTags[i]=result.results[i].title;
      })
      }
  });

    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });