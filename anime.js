const base_url = "https://api.jikan.moe/v3/anime";

function searchAnime(event) {

  event.preventDefault();

  const form = new FormData(this);
  const query = form.get("search");

  fetch('${base_url}/search/anime?q=${query}&page=1')
  .then(res=>json())
  .then(updateDom)
  .catch(err=>console.warn(err.message));
}

function updateDom(data) {
  data.results.forEach(anime=>console.log(aniem));
}

function pageLoaded() {
  const form = document.getElementById('search_form');
  form.addEventListener("submit", searchAnime);

}

window.addEventListener("load", pageLoaded);
