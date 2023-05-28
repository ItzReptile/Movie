/// API KEY "https://www.omdbapi.com/?i=tt3896198&apikey=ec268e8e"

async function main() {
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=ec268e8e`
  );
  const moviedata = movies.json();
  const movieList = document.querySelector(".movie-list");

  movieList.innerHTML = moviedata.map(
    (movie) => `<div class="movie">
   <figure class="movie-explanation">
     <img
       class="movie-img"
       src=""
       alt=""
     />
     <div class="movie-background"></div>
     <p class="movie-details"></p>
   </figure>
   <div class="movie-description">
     <h1 class="movie-title"></h1>
     <h4 class="movie-rating yellow"></h4>
     <h3 class="movie-released">
       <span class="movie-release-date"></span>
     </h3>
   </div>
 </div>`
  );
}

main();
