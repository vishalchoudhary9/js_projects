var img = document.querySelector("img");
var body = document.querySelector("body");
var y = 0;
var x = 0;

body.addEventListener('keydown', function (dets) {
    if (dets.code == 'ArrowUp' && y>0) {
        y -= 10;
        img.style.top = y + "%";
    } else if (dets.code == 'ArrowDown' && y<50) {
        y += 10;
        img.style.top = y + "%";
    } else if (dets.code == 'ArrowLeft' && x>0) {
        x -= 10;
        img.style.left = x + "%";
    } else if (dets.code == 'ArrowRight' && x<80) {
        x += 10;
        img.style.left = x + "%";
    }
})
