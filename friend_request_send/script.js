let button = document.querySelector("button");
let h3 = document.querySelector("h3");
let toggle = false;

button.addEventListener("click", () => {
    if(toggle){
        h3.textContent = "Stranger";
        h3.style.color = "red";
        button.innerHTML = "<i class='ri-add-line'></i> Add friend";
        alert("Friend request removed");
    }else{
        h3.textContent = "Friend";
        h3.style.color = "green";
        button.innerHTML = "<i class='ri-subtract-line'></i> Remove friend";
        alert("Friend request accepted");
    }
    toggle = !toggle;
});
