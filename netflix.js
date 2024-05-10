//api key
const api = "api_key=b31cef5572ffda899b359b64352d42d9";
//base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

//request for moving data

const requests = {

    fetchTrending : `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks= 213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres= 28`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres= 27`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres= 35`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres= 10749`,
};

//used to truncate the string

function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1)+"...":str;
}

//banner
fetch(requests.fetchNetflixOrignals).then((res) => res.json()).then((data) => {
    console.log(data.results);
    //every refresh the movie will be change

    const setMovie = data.results[Math.floor(Math.random()*data.results.length-1)];

var banner= document.getElementById("banner");
var banner_title= document.getElementById("banner_title");
var banner_disc= document.getElementById("banner_discription");

banner.style.backgroundImage = "url("+ banner_url + setMovie.backdrop_path + ")";
banner_disc.innerText = truncate(setMovie.overview, 150);
banner_title.innerText= setMovie.name;

});

//movies rows

fetch(requests.fetchNetflixOrignals).then((res) => res.json())

.then((data) =>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "NETFLIX ORIGINALS";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);


    data.results.forEach((movie) => {

        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s = movie.name.replace(/\s + /g, "");

        poster.id = s;
        poster.src = img_url+movie.poster_path;
        row_posters.appendChild(poster);
        
    });
});

//trending
/*fetch(requests.fetchPopular)
.then((res) => res.json())

.then((data) => {
const headrow = document.getElementById("headrow");
const row = document.createElement("div");

row.className = "row";
row.classList.add("popularrow");
headrow.appendChild(row);

const  title = document.createElement("h2");
title.className = "row__title";
title.innerText = "Trending Now";
row.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row_posters";
row.appendChild(row_posters);

data.results.forEach((movie) => {
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";

    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url+movie.poster_path;
    row_posters.appendChild(poster);
});
});*/

//top rated
fetch(requests.fetchTrending)
.then((res) => res.json())

.then((data) => {
const headrow = document.getElementById("headrow");
const row = document.createElement("div");

row.className = "row";
headrow.appendChild(row);

const  title = document.createElement("h2");
title.className = "row_title";
title.innerText = "Top Rated";
row.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row_posters";
row.appendChild(row_posters);

data.results.forEach((movie) => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_posterLarge";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url+movie.poster_path;
    row_posters.appendChild(poster);
});
});

//Action
fetch(requests.fetchActionMovies)
.then((res) => res.json())

.then((data) => {
const headrow = document.getElementById("headrow");
const row = document.createElement("div");

row.className = "row";
headrow.appendChild(row);

const  title = document.createElement("h2");
title.className = "row_title";
title.innerText = "Action Movies";
row.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row_posters";
row.appendChild(row_posters);

data.results.forEach((movie) => {

    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url+movie.backdrop_path;
    row_posters.appendChild(poster);
});
});

//Horror
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())

.then((data) => {
const headrow = document.getElementById("headrow");
const row = document.createElement("div");

row.className = "row";
headrow.appendChild(row);

const  title = document.createElement("h2");
title.className = "row_title";
title.innerText = "Horror Movies";
row.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row_posters";
row.appendChild(row_posters);

data.results.forEach((movie) => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url+ movie.backdrop_path;
    row_posters.appendChild(poster);
});
});

//Comdey
fetch(requests.fetchComedyMovies)
.then((res) => res.json())

.then((data) => {
const headrow = document.getElementById("headrow");
const row = document.createElement("div");

row.className = "row";
headrow.appendChild(row);

const  title = document.createElement("h2");
title.className = "row_title";
title.innerText = "Comedy Movies";
row.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row_posters";
row.appendChild(row_posters);

data.results.forEach((movie) => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url+movie.backdrop_path;
    row_posters.appendChild(poster);
});
});


//Romance
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())

.then((data) => {
const headrow = document.getElementById("headrow");
const row = document.createElement("div");

row.className = "row";
headrow.appendChild(row);

const  title = document.createElement("h2");
title.className = "row_title";
title.innerText = "Romance Movies";
row.appendChild(title);

const row_posters = document.createElement("div");
row_posters.className = "row_posters";
row.appendChild(row_posters);

data.results.forEach((movie) => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url+ movie.backdrop_path;
    row_posters.appendChild(poster);
});
});
