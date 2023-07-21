const jokeArray = [
    "What do you call a pile of cats? A meowtain!",
    "What's a cat's favorite TV show? Claw and Order!",
    "What's a cat's favorite cereal? Mice Krispies!",
    "What does a cat say after telling a bad joke? Just kitten!",
    "Why did the cat file for bankrupcy? They got caught up in a purr-amid scheme!",
    "Why can't cats play poker in the wild? Too many Cheetas!",
    "Why did the cat go to medical school? To become a purr-amedic!",
    "Why do cats make such bad storytellers? They only have one tail!",
    "Why was the cat so small? Becuase it only drank condensed milk!",
    "Why was the cat sitting on the computer? To keep an eye on the mouse!",
    ];

let previousJokeIndex = -1;

function generateRandomJoke(){
    let randomJokeIndex;
    do {
        randomJokeIndex = Math.floor(Math.random() * jokeArray.length);
    } while (randomJokeIndex === previousJokeIndex);

    previousJokeIndex = randomJokeIndex;
    return jokeArray[randomJokeIndex];
};

let jokeButton = document.getElementById('joke-button');
    let jokeBox = document.getElementById('joke-box');

function showJoke() {
    jokeBox.innerHTML = generateRandomJoke();
};

jokeButton.addEventListener('click', showJoke);

