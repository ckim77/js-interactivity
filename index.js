
const addMovie = event => {
    event.preventDefault();
    let inputField = document.querySelector('input').value;
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField;
    movie.appendChild(movieTitle);

    //step 3 (remove movies)
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    //back to step2
    document.querySelector('ul').appendChild(movie);
    inputField = "";

    //step 4 (crossing out movies)
    
}

let form = document.querySelector('form');

form.addEventListener('submit', addMovie);

const deleteMovie = event => {
    event.target.parentNode.remove();
}

// step 4
const crossOffMovie = event => {
    event.target.classList.toggle();
}



// console.log(document.createElement('list'));







