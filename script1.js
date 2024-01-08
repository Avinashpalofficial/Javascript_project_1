  const cat=document.querySelector("#container")
 const dog =document.querySelector("i")
  

 cat.addEventListener("dblclick",function(){

     dog.style.transform='transform: translate(-50%,-50%)  scale(1)';
    dog.style.opacity=0.8
    setTimeout(function(){
        dog.style.opacity=0;
    },1000);
     setTimeout(function(){
        dog.style.transform= "translate(-50%,-50%)  scale"(0);
     },2000);


 })


