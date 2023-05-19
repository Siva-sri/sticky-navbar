const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");
//Add event listener to window element to listen to scroll

window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
});

//scrollY => gives the position of the scroll bar in vertical direction
//bottomContainerEl.offsetTop => it is the position of the element
//navbarEl.offsetHeight => it is the position of height of navbar
//50 is the margin width we specified for top-container
//When we scroll down, the if part is true whenever we go after the top element
//We activate it correctly by subtracting unnecessary values
//Add the class 'active' when it is true, else remove it