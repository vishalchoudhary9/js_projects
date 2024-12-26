const arr=[
    {
        dp: "https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Rohan FitLife"
      },
      {
        dp: "https://images.unsplash.com/photo-1529092419721-e78fb7bddfb2?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        username: "Bookish Priya"
      },
      {
        dp: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "LensCraft Kabir"
      },
      {
        dp: "https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Gizmo Guru Ishita"
      },
      {
        dp: "https://images.unsplash.com/photo-1660680299120-c7c132df1b1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1729505622656-6da75375c3a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Explorer Aarav"
      },
      {
        dp: "https://images.unsplash.com/photo-1647684379896-b342fa47bc40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1734077457229-8017ee15c7c7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "Creative Ananya"
      }
];

var storiyan =document.querySelector('.storiyan')
var full =document.querySelector('.full')
var fullUser=document.querySelector('.full h2')
var growth = document.querySelector('.growth')
var sum=''


arr.forEach(function(elem,idx){
sum = sum + `<div class="story">
<img id=${idx} src=${elem.dp} alt="">
</div>`
})

storiyan.innerHTML=sum


storiyan.addEventListener('click',function(dets){
   var grow=0
   var value = arr[dets.target.id]

 var growthInterval=  setInterval(function(){
        grow++
        growth.style.width= grow +"%"
   },30)

   full.style.display='block'
   full.style.backgroundImage=`url(${value.story})`
   fullUser.innerHTML=value.username

   setTimeout(function(){
    clearInterval(growthInterval)
    full.style.display='none'
   },3000)

})
