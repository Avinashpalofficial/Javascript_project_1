const list=  document.querySelector('h2')
const mylist=document.querySelector('#add')
// const playlist=document.querySelector('#Remove')
 
   var check=1;


mylist.addEventListener("click",function(){
    if(check==1){
        list.innerHTML ="Friend"
        list.style.color="green"
        mylist.innerHTML="Remove friend"
        check=0
    }

    else{

        list.innerHTML ="Stranger"
        list.style.color="red"
        mylist.innerHTML="Add friend"
       // mylist.style.color="green"
        check=1

    }
   
})


