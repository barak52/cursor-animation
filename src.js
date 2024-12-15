var main= document.querySelector(".main")
var cursor= document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    easing:"ease-backout"
   }) 

})


var image = document.querySelector(".image")
image.addEventListener("mouseenter",function(){
    cursor.innerHTML="viewmore"
    gsap.to(cursor,{
      scale:2,
      backgroundColor:" #717171aA"
     
      
    })

})
 


image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
      scale:1,
      backgroundColor:" #FFFFFF"
    })

})
 