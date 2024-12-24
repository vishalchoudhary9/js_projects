let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let container = document.querySelector(".container");

button.addEventListener("click", () => {
    let randomColor1 = Math.floor(Math.random()*256);
    let randomColor2 = Math.floor(Math.random()*256);
    let randomColor3 = Math.floor(Math.random()*256);
    container.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    h1.innerText = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
});