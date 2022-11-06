const getJokes = async() =>{
try {
    // const res = await fetch("https://api.chucknorris.io/jokes/random");
    const res = await fetch("https://api.jcwyt.com/pickup",{ mode: 'no-cors'});
    const data  = await res.json();
    const myLines = document.querySelector("#myLines");
    myLines.innerHTML  = data.value;
     console.log("data",data);
} catch(error){}
};
window.addEventListener("load",()=> {
    getJokes();
});