// Your code here
document.addEventListener("DOMContentLoaded", async(event) => {
    const films = await movieList()
   displayMovies(films)
   viewMovie(films)
})


// frotend logic
function displayMovies (films) {
 const film = films.map(movie => {
        return `
        <li>
          <div class="movie" id="${movie.id}">
            ${movie.title}
          </div>
        </li>
        `
    })

    const ul = document.getElementById("films")
    ul.innerHTML = film
}


 function viewMovie (films) {
    const view = document.querySelectorAll(".movie")
    view.forEach(show => {
        show.addEventListener("click", () => {
            //   console.log(event.target.id)
            
        })
    })
 }




    //backend logic 
function movieList () {
    return fetch("http://localhost:3000/films",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => data)
}