let pocentage=document.querySelector('.porcentage')
let progresse=document.querySelector('.progress')


var b=0;
let anim=function animation(){
  setInterval(() =>{
    b+=1;
    progresse.style.width =`${b}%`;
    pocentage.innerHTML=`${b}%`;
    if(b === 100){
      b=0;
    }
  },500)
 
}
setTimeout(anim, 500);

