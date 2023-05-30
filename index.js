// api `https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&`

const movie = document.querySelector(".movie-list");
const searchresults = document.querySelector(".search-results-title");
const headerEl = document.querySelector("#Movies");

async function rendermovies(filter, search) {
  movie.classList += " movie__loading";
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=c5a8f649&s=${search}`
  );
  movie.classList.remove("movie__loading");
  const moviesData = await movies.json();
  console.log(moviesData);
  console.log(movie)
  console.log(searchresults)
  

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
  }
}

function onSearchChange(event) {
  const search = event.target.value;
  searchresults.innerHTML = search;
  rendermovies("", search);
}

function filtermovies(event) {
  const filter = event.target.value;
  const search = searchresults.innerHTML;
  rendermovies(filter, search);
}

function moviesHTML(HOPE) {
  return `<div class="movie">
  <figure class="movie-explanation">
    <img
      class="movie-img"
      src="${HOPE.Poster}"
      alt="Not Avaiable"
    />
    <div class="movie-background"></div>
    <p class="movie-details">${HOPE.Plot}</p>
  </figure>
  <div class="movie-description">
    <h1 class="movie-title">${HOPE.Title}</h1>
    <h4 class="movie-rating yellow">${HOPE.imdbRatin}</h4>
    <h3 class="movie-released">
      <span class="movie-release-date">${HOPE.Released}</span>
    </h3>
  </div>
</div>`;
}
setTimeout(() => {
  rendermovies("", "");
});

