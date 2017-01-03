$(document).ready(function() {
//"https://api.themoviedb.org/3/discover/movie?api_key=9ec9245d39c71e558afd18d3340dc979&language=it&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=28",

  var genere = {
      genre_ids: '28'
  };
  $.get({
      url: "https://api.themoviedb.org/3/discover/movie?api_key=9ec9245d39c71e558afd18d3340dc979&language=it&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=28",
      data: genere,
      success: function (result) {
          $.each(result.results, function (i) {
            $("#NewTitleFromTmdb").append("<tr><td ><a name=" + result.results[i].title + "\"></a> " + result.results[i].title + "</td>" 
              + "<td class=\"titoloFilm\" id=\"#" + result.results[i].title + "\">" + result.results[i].overview + "</td>" 
              + "<td> <img class=\"locandinaFilm\" src=\"https://image.tmdb.org/t/p/w300" + result.results[i].poster_path + "\"></td></tr>");
          
          });
      }
  });
});