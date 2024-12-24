let bulb = document.querySelector(".bulb");
let toggle = document.querySelector("#toggle");
let isOn = false;

toggle.addEventListener("click", () => {
    if (isOn) {
        bulb.style.backgroundColor = "yellow";
        toggle.textContent = "Off";
        isOn = false;
    } else {
        bulb.style.backgroundColor = "white";
        toggle.textContent = "On";
        isOn = true;
    }
});