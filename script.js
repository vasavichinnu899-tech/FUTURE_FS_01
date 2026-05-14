window.addEventListener("load", () => {

   document.body.style.opacity = "1";

});

const typingText = [

   "Aspiring Full Stack Developer",
   "Creating Modern Digital Experiences",
   "Learning • Building • Growing"

];

let textIndex = 0;
let charIndex = 0;

const glowText = document.querySelector(".glow-text");

function typeEffect(){

   if(charIndex < typingText[textIndex].length){

      glowText.innerHTML += typingText[textIndex].charAt(charIndex);

      charIndex++;

      setTimeout(typeEffect, 80);

   }

   else{

      setTimeout(eraseEffect, 1500);

   }

}

function eraseEffect(){

   if(charIndex > 0){

      glowText.innerHTML =
      typingText[textIndex].substring(0, charIndex - 1);

      charIndex--;

      setTimeout(eraseEffect, 40);

   }

   else{

      textIndex++;

      if(textIndex >= typingText.length){

         textIndex = 0;

      }

      setTimeout(typeEffect, 300);

   }

}

typeEffect();

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", () => {

   heroBtn.innerHTML = "Welcome To My Portfolio";

   heroBtn.style.background = "white";
   heroBtn.style.color = "black";

});

const revealElements = document.querySelectorAll("section");

function revealOnScroll(){

   revealElements.forEach(element => {

      const windowHeight = window.innerHeight;

      const revealTop = element.getBoundingClientRect().top;

      if(revealTop < windowHeight - 120){

         element.classList.add("active");

      }

   });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const navItems = document.querySelectorAll("nav a");

navItems.forEach(item => {

   item.addEventListener("mouseenter", () => {

      item.style.color = "#00d9ff";
      item.style.textShadow = "0px 0px 15px #00d9ff";

   });

   item.addEventListener("mouseleave", () => {

      item.style.color = "white";
      item.style.textShadow = "none";

   });

});

const progressBar = document.createElement("div");

document.body.appendChild(progressBar);

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#00d9ff";
progressBar.style.zIndex = "9999";

window.addEventListener("scroll", () => {

   let scrollTop = document.documentElement.scrollTop;

   let scrollHeight =

   document.documentElement.scrollHeight -

   document.documentElement.clientHeight;

   let progress = (scrollTop / scrollHeight) * 100;

   progressBar.style.width = progress + "%";

});

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.padding = "14px 18px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00d9ff";
topBtn.style.color = "black";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.boxShadow =
"0px 0px 15px rgba(0,217,255,0.7)";
topBtn.style.display = "none";
topBtn.style.transition = "0.3s";

window.addEventListener("scroll", () => {

   if(window.scrollY > 400){

      topBtn.style.display = "block";

   }

   else{

      topBtn.style.display = "none";

   }

});

topBtn.addEventListener("mouseenter", () => {

   topBtn.style.transform = "scale(1.1)";

});

topBtn.addEventListener("mouseleave", () => {

   topBtn.style.transform = "scale(1)";

});

topBtn.addEventListener("click", () => {

   window.scrollTo({

      top: 0,
      behavior: "smooth"

   });

});