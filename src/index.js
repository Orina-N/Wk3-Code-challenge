// Your code here
document.addEventListener("DOMContentLoaded", async(event) => {
  const films = await movieList()
  const poster = await movieList()
 displayMovies(films)
 viewMovie(poster)
 displayMovieDetails(films)
 deleteButton(films)
})


// frotend logic
function displayMovies (films) {
const film = films.map(movie => {
      return `
      <li class="li">
        <div class="movie" id="${movie.id}">
          ${movie.title}
        </div>
        <button id="${movie.id}1" class="moviedelete">Delete</button>
      </li>
      `
  })

  const ul = document.getElementById("films")
  ul.innerHTML = film
}

function deleteButton (films) {
  const details = document.querySelector("#showing")
  const imageCarrier = document.querySelector("#image-carrier")
  const listCarrier = document.querySelector(".li")
  console.log(listCarrier);

  const deleteBtn = document.querySelectorAll(".moviedelete")
  deleteBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
       const deleteMovie = films.find((element)=> element.id === event.target.id)
       details.innerHTML = ""
       imageCarrier.innerHTML = ""
       listCarrier.innerHTML = ""
    })
  })
}

function viewMovie (poster) {
  const imageCarrier = document.querySelector("#image-carrier")
  const div = document.createElement("div")
  //console.log(imageCarrier);


  const view = document.querySelectorAll(".movie")
  view.forEach(show => {
      show.addEventListener("click", (event) => {
          // console.log(event.target.id)
          const viewPoster = poster.find((element)=> element.id === event.target.id)
          div.innerHTML = `
           <img class="posters" src="${viewPoster.poster}" alt="Movie poster"/>
          `
          imageCarrier.appendChild(div)
      })
  
  })

}


function displayMovieDetails (films) {
  const details = document.querySelector("#showing")
  const carrier = document.createElement("div")


  const view = document.querySelectorAll(".movie")
  view.forEach(show => {
  show.addEventListener("click", (event)=> {
     // console.log(event.target.id);
     const viewDetails = films.find((element) => element.id === event.target.id)
     carrier.innerHTML = `
     <div class="card">
     <div id="title" class="title">${viewDetails.title}</div>
     <div id="runtime" class="meta">${viewDetails.runtime} minutes</div>
     <div class="content" id="details">
       <div class="description">
         <div id="film-info">${viewDetails.description}</div>
         <span id="showtime" class="ui label">${viewDetails.showtime}</span>
         <span id="ticket-num">[X]</span> 
       </div>
     </div>
     <div class="extra content">
       <button id="buy-ticket" class="ui orange button">
         Buy Ticket
       </button>
     </div>
   </div>       
     
     `
     details.appendChild(carrier)
  })
 })
}

function buyTicket () {

}




  //backend logic 
function movieList () {
  return fetch("https://moviedatabase-g11e.onrender.com/films",{
      method:"GET",
      headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
      }
  })
  .then(resp => resp.json())
  .then(data => data)
}