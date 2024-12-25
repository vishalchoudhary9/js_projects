const button = document.querySelector("button");
const h1 = document.querySelector("h1");
let flag = 0;

button.addEventListener("click", () => {
    if (flag == 0) {
        h1.style.color = "yellow";
        h1.textContent = "adding ...";

        setTimeout(function () {
            h1.style.color = "green";
            h1.textContent = "Friend";
            button.textContent = "Remove Friend";
        }, 3000)
        flag = 1;
    } else {
        h1.style.color = "yellow";
        h1.textContent = "removing ...";

        setTimeout(function () {
            h1.style.color = "red";
            h1.textContent = "Stranger";
            button.textContent = "add Friend";
        }, 3000)
        flag = 0;
    }
});