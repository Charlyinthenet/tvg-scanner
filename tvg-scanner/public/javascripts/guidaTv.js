// $(document).ready(function() {
//   // $.getJSON("../../data.json", function(result){
//   //   console.log(result.results[i].title);
//   // })
//  // $.get('../../data.json',  // url
//  //      function () {  // success callback
//  //          console.log(result.results[i].title);
//  //    });

//   var genere = {
//       genre_ids: '28'
//   };

//   $.get({
//       url: "https://api.themoviedb.org/3/discover/movie?api_key=9ec9245d39c71e558afd18d3340dc979&language=it&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=28",
//       data: genere,
//       success: function (result) {
//         var myArray = [];
//         $.each(result.results, function (i) {
//           //$(".guida").append("<li>" + result.results[i].title + "</li>" );
//           if (i <= 12) {
//           myArray.push(result.results[i].title);
//           $(".guidaTv").append("<li>Ore " + (i*2) + ' .00 - ' + myArray[i] + "</li>" );
//           }
//           });
//       }
//   });
// });