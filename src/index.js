import generateJoke from "./generateJoke";
import "./styles/main.scss"
import dadJoke from "./assets/dad_joke.svg";


const laughImg = document.getElementById('laughImg');
laughImg.src = dadJoke;

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke);

generateJoke();