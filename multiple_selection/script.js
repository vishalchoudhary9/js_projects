var buttons = document.querySelectorAll("button");
var body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        body.style.backgroundColor = button.textContent;
    });
});
