let button = document.querySelector("button");
let progressBar = document.querySelector(".progress-bar");
let h1 = document.querySelector("h1");
let progress = 0;

button.addEventListener("click", () => {
    let interval = setInterval(() => {
        progress ++;
        progressBar.style.width = progress + "%";
        h1.textContent = progress + "%";
    }, 30);
    setTimeout(() => {
        clearInterval(interval);
        button.textContent = "Downloaded";
        button.style.backgroundColor = "green";
        button.style.opacity = 0.5;
        button.style.pointerEvents = "none";
    }, 3000);
});

