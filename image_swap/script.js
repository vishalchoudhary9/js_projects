var btn=document.querySelector('.btn');
var img1=document.querySelector('.img1')
var img2=document.querySelector('.img2')

btn.addEventListener('click',function(){
    var tempSrc = img1.getAttribute('src');
    img1.setAttribute('src', img2.getAttribute('src')); 
    img2.setAttribute('src', tempSrc);
})
