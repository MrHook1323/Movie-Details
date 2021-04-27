function getUrlParam(name) {
  //"?altceva=ceva&movieId=6018075fa1c19b0022112a01&test=8"
  const search = location.search.substr(1); // substr scoate semnul intrebarii din query string

  //"altceva=ceva&movieId=6018075fa1c19b0022112a01&test=8""
  const keyValuePairs = search.split("&");

  // array de stringuri cheie=valoare
  for (const pair of keyValuePairs) {
    // Array destructuring
    const [key, value] = pair.split("=");

    if (key === name) {
      return value;
    }
  }

  console.warn(
    'The query parameter you tried to get: "%s" is not available in the URL.',
    name
  );
  return undefined;
} //https://movies-app-siit.herokuapp.com/movies/6018075fa1c19b0022112a02
function movieDetail() {
  fetch(
    `https://movies-app-siit.herokuapp.com/movies/${getUrlParam("movieId")}`
  )
    .then((res) => res.json())
    .then((description) => createHtml(description));

  function createHtml(description) {
    const title = document.querySelector("h1");
    title.innerText = description.Title;

    const poster = document.querySelector("img");
    poster.src = description.Poster;

    const plot = document.querySelector("p");
    plot.innerText = description.Plot;

    const rating = document.querySelector("span");
    rating.innerText = description.imdbRating;
  }
}

movieDetail();
