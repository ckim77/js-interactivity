let message = document.querySelector("#message");


const addMovie = event => {
    event.preventDefault();
    let inputField = document.querySelector('input').value;
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField;
    movie.appendChild(movieTitle);
    document.querySelector('ul').appendChild(movie);


    //step 3 (remove movies)
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);


    //step 4 (crossing out movies)
    movieTitle.addEventListener('click', crossOffMovie);

    document.querySelector('input').value = "";
}

let form = document.querySelector('form');

form.addEventListener('submit', addMovie);

const deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

// step 4
const crossOffMovie = event => {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!';
    } else {
        message.textContent = "Movie added back!"
    }
}



// let themeBtns = document.querySelectorAll('.theme-buttons')

// const selectTheme = (event) => {
//     let theme = event.target.textContent;
//     document.querySelector('body').className = theme;
//     document.querySelector('main').className = theme;
//     let btns = document.querySelectorAll('button');

//     for (let i = 0; i < btns.length; i++) {
//         btns[i].className = theme;
//     }
// }

// for  (let i = 0; i < themeBtns.length; i++) {
//     themeBtns[i].addEventListener('click', () => {
//         selectTheme(event);
//     })
// }






