let button = document.querySelector("button");
let winnerName = document.querySelector(".winner-name");
let container = document.querySelector(".container");

let arr = ["CSK", "RCB", "MI", "SRH", "RR", "DC", "KKR", "LSG", "PBKS"];
let img = [
    "https://i.cdn.newsbytesapp.com/images/l38020241111165014.jpeg", 
    "https://mir-s3-cdn-cf.behance.net/projects/404/7c6eed194930581.Y3JvcCw5NjksNzU4LDE1MTYsMA.jpg", 
    "https://static.vecteezy.com/system/resources/thumbnails/019/991/852/large/mumbai-indians-cricket-team-seamless-looping-flag-waving-background-indian-premier-league-looped-cloth-texture-slow-motion-3d-rendering-free-video.jpg", 
    "https://static.vecteezy.com/system/resources/thumbnails/019/991/856/original/sunrisers-hyderabad-cricket-team-seamless-looping-flag-waving-background-indian-premier-league-looped-cloth-texture-slow-motion-3d-rendering-free-video.jpg", 
    "https://i.pinimg.com/736x/a2/7d/3e/a27d3e66ef096a578c2843bf2f1d2621.jpg", 
    "https://i.pinimg.com/736x/33/1a/5a/331a5a63cf1b7f78f53433ae778e1ca3.jpg", 
    "https://mir-s3-cdn-cf.behance.net/projects/404/a9dc23157708395.Y3JvcCwxMDA0LDc4NSwyMjMsMA.png", 
    "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/lsg-1-1643635816.jpg", 
    "https://www.financialexpress.com/wp-content/uploads/2024/11/Punjab-Kings-PBSK-IPL-2025-full-Squad-Players-List.jpg"
];

button.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    winnerName.textContent = arr[randomIndex];
    container.style.backgroundImage = `url(${img[randomIndex]})`;
});
