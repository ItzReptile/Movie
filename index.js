// api `https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&`
const movie = document.querySelector(".movie-flex");
const Searchresults = document.querySelector(".search-results-title");

async function rendermovies(filter, Search) {
  movie.classList += " movie__loading";
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=${Search}`
  );
  movie.classList.remove("movie__loading");
  const moviesData = await movies.json();
  console.log(moviesData);
  console.log(movie);
  console.log(Searchresults);
  
  if (moviesData.Search) {
    if (filter === "NEWEST-OLDEST") {
      moviesData.Search.sort((a,b) => parseInt(b.Year) - parseInt(a.Year)
      )
    } else if (filter === "OLDEST-NEWEST") {
      moviesData.Search.sort((a,b) => parseInt(a.Year) - parseInt(b.Year)
      );
    }
    movie.innerHTML = moviesData.Search.map((moviess) => moviesHTML(moviess))
  }
  
}



function onSearchChange(event) {
  const Search = event.target.value;
  Searchresults.innerHTML = Search;
  rendermovies("", Search);

}

function filtermovies(event) {
  const filter = event.target.value;
  const Search = Searchresults.innerHTML;
  rendermovies(filter, Search);
  if(arr.length >= 5){
    arr.slice(0,5)
  }
  
}




function moviesHTML(moviess) {
  return `<div class="movie-list">
  <div class="movie" >
    <figure class="movie-explanation">
      <img
        class="movie-img"
        src="${moviess.Poster}"
        alt="image not found"
      />
      <div class="movie-background"></div>
      <p class="movie-details">MORE INFO</p>
    </figure>
    <div class="movie-description">
      <h1 class="movie-title">${moviess.Title}</h1>
      <h3 class="movie-released">
        <span class="movie-release-date">${moviess.Year}</span>
      </h3>
    </div>
  </div>
</div>`;
}



setTimeout(() => {
  rendermovies("", "");
});
