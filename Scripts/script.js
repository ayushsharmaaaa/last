console.log("hello world");
const a=document.querySelector('.new');


setInterval(() => {
    a.innerHTML="Happy birthday to you!";
}, 2000);

setInterval(()=>{
    a.innerHTML=""
},4000)