var btn=document.querySelector("button")
var arr=['images/insect_png.png','images/green-fly-.webp'
]

btn.addEventListener('click',function(){
    var valueX=Math.random()*100;
    var valueY=Math.random()*100;
    var rotate=Math.random()*360;
    var num=Math.floor(Math.random()*arr.length)

    var img=document.createElement("img")
    img.setAttribute("src",arr[num]);
    document.body.appendChild(img)
    img.style.height="140px"
    img.style.position='absolute'
    img.style.left=valueX+'%'
    img.style.top=valueY+'%'
    img.style.rotate=rotate+'deg'
    
})