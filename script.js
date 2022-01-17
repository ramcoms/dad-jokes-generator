const joke = document.getElementById('joke');
const btn = document.getElementById('newJoke');

const generateJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com',
        config);

    const data = await res.json();

    joke.innerHTML = data.joke;
}

btn.addEventListener('click', generateJoke);
generateJoke();





