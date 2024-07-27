// initial references
let movieNameFef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
console.log(searchBtn);
let result = document.getElementById("result");


//function to fetch data from api

let getMovie = () => {
  let movieName = movieNameFef.value;
  let url = (`http://www.omdbapi.com/?t=${movieName}&apikey=${key}`);


  //if the input field is empty

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">please Enter a Movie Name</h3>`;
  }


  // if the input fuild is a not empty
  else {
    fetch(url).then(resp => resp.json()).then((data) => {
      console.log(data);
      console.log(data.Poster);
      console.log(data.Title);
      console.log(data.imdbRating);
      console.log(data.Rated);
      console.log(data.Year);
      console.log(data.Runtime);
      console.log(data.Genre);
      console.log(data.Plot);
      console.log(data.Actors);


      //show result in a html formet


      result.innerHTML = (`

            <div class="info">
               <img src=${data.Poster} class="poster div1"
                 <div clsaa="div2">
                      <h2 id="h2">${data.Title}</h2>
                      <div class="rating">
                        <img src="star.svg">
                        <h4>${data.imdbRating}</h4>
                      </div>

                 </div>
                  <div class="details div3">
                    <span> ${data.Rated}</span>
                    <span> ${data.Year}</span>
                    <span> ${data.Runtime}</span>
                  </div>
                   <div class="genre div4">
                         <div>${data.Genre.split(",").join("<div></div>")}
                  
                 
         
                          <h3>Plot:</h3>
                           <p>${data.Plot}</p>
                               <h3>Cast:</h3>
                          <p>${data.Actors}</p>
                         </div">
              </div>
            `);
    })
  }
}


window.addEventListener("load", () => {
  console.log("ok")
  getMovie();
});