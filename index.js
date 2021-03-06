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
    message.textContent = `${event.target.parentNode.textContent.slice(0,-1)} deleted!`;
    revealMessage();
}
// step 4
const crossOffMovie = event => {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains('checked')) {
        message.textContent =  `${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}

// Intermediate 1

const revealMessage = () => {
    message.classList.remove('hide');
    setTimeout(() => {
    message.classList.add('hide');
    }, 1000);
}

// some extra stuff

// const colorChange = event => {
//     event.target.style.color = "black";
//     event.target.style.backgroundColor = 'yellow';
// }


// const changeBack = event => {
//     event.target.style.color = 'white';
//     event.target.style.backgroundColor = 'teal';
// }

// let addButton = document.getElementById("add-button");
// addButton.addEventListener('mouseover', colorChange);
// addButton.addEventListener('mouseout', changeBack);


