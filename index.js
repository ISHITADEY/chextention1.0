const myLines = document.querySelector("#myLines");
const button = document.querySelector("#button")

const getJokes = async() =>{
try {
    // const res = await fetch("https://api.chucknorris.io/jokes/random");
    // const data = await res.json();
    const URI = "https://icanhazdadjoke.com/slack"
    const data = await (await fetch(URI)).json()
    const joke = await data.attachments[0].text
    
    myLines.innerText = joke;
} catch(error){}
};
getJokes();
button.addEventListener("click", getJokes, { passive: true });