// api `https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&`

const movie = document.querySelector(".movie-list");
const searchresults = document.querySelector(".search-results-title");
const headerEl = document.querySelector("#Movies");

async function renderMovies(filter, search) {
  movie.classList += " movie__loading";
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=${search}`
  );
  movie.classList.remove("movie__loading");
  const moviesData = await movies.json();

  if (moviesData.search) {
    if (filter === "NEWEST-OLDEST") {
      moviesData.search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (filter === "OLDEST-NEWEST") {
      moviesData.search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }
    movie.innerHTML = moviesData.search
      .map((movie) => moviesHTML(movie))
      .join("");
    headerEl.scrollIntoView({ behavior: "smooth" });
  } else {
  }

}

function onSearchChange(event) {
  const search = event.target.value; 
    searchresults.innerHTML = search;
  renderMovies("", search);
}

function filterMovies(event) {
  const filter = event.target.value;
  const search = searchresults.innerHTML;
  renderMovies(filter, search);
}
1;

function moviesHTML(movies) {
  return `<div class="movie">
  <figure class="movie-explanation">
    <img
      class="movie-img"
      src="${movies.Poster}"
      alt="Not Avaiable"
    />
    <div class="movie-background"></div>
    <p class="movie-details">${movies.Plot}</p>
  </figure>
  <div class="movie-description">
    <h1 class="movie-title">${movies.Title}</h1>
    <h4 class="movie-rating yellow">${movies.imdbRating}</h4>
    <h3 class="movie-released">
      <span class="movie-release-date">${movies.Released}</span>
    </h3>
  </div>
</div>`;

}
setTimeout(() => {
  renderMovies("", "");
});


