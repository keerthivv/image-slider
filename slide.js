let left=document.querySelector(".fa-chevron-left");
let right=document.querySelector(".fa-chevron-right");
let slider=document.querySelector(".slider");
let image=document.querySelectorAll(".image")
let bottom=document.querySelector(".bottom")

let slideNo=1;
let length=image.length

for(let i=0;i<length;i++)
{
    let div=document.createElement("div");
    div.className="button";
    bottom.appendChild(div);
}
let btns=document.querySelectorAll(".button")

let resetBg=()=>{
    btns.forEach(button=>{
        button.style.backgroundColor="transparent"
    })
}

btns.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        resetBg();
        slider.style.transform=`translateX(-${i*800}px)`;
        slideNo=i+1;
        button.style.backgroundColor="white"
    })
})

const nextSlide=()=>{
    slider.style.transform=`translateX(-${slideNo*800}px)` ;
    slideNo=slideNo+1;
}
const getFirstSlide=()=>{
    slider.style.transform=`translateX(0px)` ;
    slideNo=1;
}
const getLastSlide=()=>{
    slider.style.transform=`translateX(-${(length-1)*800}px)` ;
    slideNo=length;
}
const prevSlide=()=>{
    slider.style.transform=`translateX(-${(slideNo-2)*800}px)` ;
    slideNo=slideNo-1;
}
right.addEventListener("click",()=>{
    (slideNo<length)?nextSlide():getFirstSlide();
    resetBg();
    btns[slideNo-1].style.backgroundColor="white"
})

left.addEventListener("click",()=>{
    (slideNo>1)?prevSlide():getLastSlide();
    resetBg();
    btns[slideNo-1].style.backgroundColor="white"
})

