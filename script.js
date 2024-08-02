let dayNight =  document.querySelector(".dayNight");
let banner = document.querySelector(".banner_main");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
    strings:["Developer","Coder","Artist"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})