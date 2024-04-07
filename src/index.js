// Your code here
document.addEventListener("DOMContentLoaded", async(event) => {
    const films = await movieList()
    const poster = await movieList()
   displayMovies(films)
   viewMovie(poster)
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
             <img src="${viewPoster.poster}"/>
            `
            imageCarrier.appendChild(div)
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