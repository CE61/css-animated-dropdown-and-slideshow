"use strict";
const menuButton = document.querySelectorAll(".navbar")[0];
const slideShow = document.querySelectorAll(".slideshow")[0];
const slideDescription = document.querySelectorAll(".slide-description")[0];
const slideFromLeft = document.querySelectorAll(".slide-from-left")[0];
const slideFromRight = document.querySelectorAll(".slide-from-right")[0];
let currentSlide = 1;

menuButton.addEventListener("click",()=>{
    menuButton.classList.toggle("clicked");
});
const slideButtons = document.querySelectorAll(".slide-buttons")[0].children;
for(let i = 0; i < slideButtons.length; i++){
    slideButtons[i].addEventListener("click", ()=>{
        changeSlide(i+1);
        console.log("Button " + (i+1) + " clicked!");
    });
}
const leftArrowButton = document.querySelectorAll("#left-arrow")[0];
const rightArrowButton = document.querySelectorAll("#right-arrow")[0];

leftArrowButton.addEventListener("click",()=>{
    slideShow.classList.add("left");
    slideFromLeft.classList.add("move");
    changeSlideFromLeft();
    window.setTimeout(()=>{
        slideShow.classList.remove("left");
        slideFromLeft.classList.remove("move");
        if(currentSlide==1){
            changeSlide(3);
        }else{
            changeSlide(currentSlide-1);
        }
    }, 500);
});
rightArrowButton.addEventListener("click",()=>{
    slideShow.classList.add("right");
    slideFromRight.classList.add("move");
    changeSlideFromRight();
    window.setTimeout(()=>{
        slideShow.classList.remove("right");
        slideFromRight.classList.remove("move");
        if(currentSlide==3){
            changeSlide(1);
        }else{
            changeSlide(currentSlide+1);
        }
    }, 500);
});
window.setInterval(()=>{rightArrowButton.click()}, 8000); // Automatic Slideshow for 8000ms(8 seconds)

function changeSlide(slideNumber){
    if(slideNumber==1){
        slideShow.style.backgroundImage = "url(images/greenfrog.png)";
        slideDescription.innerHTML = `<p>This is a green frog.</p>`;
        currentSlide = 1;
    }
    if(slideNumber==2){
        slideShow.style.backgroundImage = "url(images/pickerelfrog.png)";
        slideDescription.innerHTML = `<p>This is a pickerel frog.</p>`;
        currentSlide = 2;
    }
    if(slideNumber==3){
        slideShow.style.backgroundImage = "url(images/woodfrog.png)";
        slideDescription.innerHTML = `<p>This is a wood frog.</p>`;
        currentSlide = 3;
    }
    for(let i = 0; i < slideButtons.length; i++){
        slideButtons[i].style.opacity = 0.5;
    }
    slideButtons[slideNumber-1].style.opacity = 1;
}
function changeSlideFromRight(){
    if(currentSlide==3){
        slideFromRight.style.backgroundImage = "url(images/greenfrog.png)";
    }else{
        if(currentSlide==1){
            slideFromRight.style.backgroundImage = "url(images/pickerelfrog.png)";
        }
        if(currentSlide==2){
            slideFromRight.style.backgroundImage = "url(images/woodfrog.png)";
        }
    }
}
function changeSlideFromLeft(){
    if(currentSlide==1){
        slideFromLeft.style.backgroundImage = "url(images/woodfrog.png)";
    }else{
        if(currentSlide==3){
            slideFromLeft.style.backgroundImage = "url(images/pickerelfrog.png)";
        }
        if(currentSlide==2){
            slideFromLeft.style.backgroundImage = "url(images/greenfrog.png)";
        }
    }
}