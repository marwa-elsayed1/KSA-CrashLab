let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}



// First Part of Slider
var secondShrinked = document.getElementById("second-shrinked");
var firstShrinked = document.getElementById("first-shrinked");
var thirdShrinked = document.getElementById("third-shrinked");

var firstShrinkedDiv = document.getElementById("inner-first");
var secondShrinkedDiv = document.getElementById("inner-second");
var thirdShrinkedDiv = document.getElementById("inner-third");





secondShrinked.addEventListener("mouseover", HoveringSlider);
secondShrinked.addEventListener("mouseout", EndHoveringSlider);
thirdShrinked.addEventListener("mouseover", HoveringFirstFromThird);
thirdShrinked.addEventListener("mouseout", EndingHoveringFirstFromThird);


function HoveringSlider(){

  firstShrinked.style.backgroundImage = 'url("./images/un-colored1.png")';
  firstShrinked.style.width = "19%";
  thirdShrinked.style.width = "19%";

  firstShrinkedDiv.style.display = "none";
  thirdShrinkedDiv.style.display = "none";
  secondShrinkedDiv.style.display = "block";
}

function EndHoveringSlider(){
  firstShrinked.style.backgroundImage = 'url("./images/back-shrinked1.png")';
  firstShrinked.style.width = "26%";
  secondShrinked.style.width = "22%";
  thirdShrinked.style.width = "22%";
 
  secondShrinkedDiv.style.display = "none";
  firstShrinkedDiv.style.display = "block";



}

function HoveringFirstFromThird(){
  firstShrinked.style.backgroundImage = 'url("./images/un-colored1.png")';
  firstShrinked.style.width = "22%";
  secondShrinked.style.width = "22%";

  firstShrinkedDiv.style.display = "none";
  secondShrinkedDiv.style.display = "none";
  thirdShrinkedDiv.style.display = "block";

}

function EndingHoveringFirstFromThird(){
  firstShrinked.style.backgroundImage = 'url("./images/back-shrinked1.png")';
  firstShrinked.style.width = "26%";
  thirdShrinked.style.width = "20%";
  
  firstShrinkedDiv.style.display = "block";
  secondShrinkedDiv.style.display = "none";
  thirdShrinkedDiv.style.display = "none";
}


// Second Part of Slider

var SecondNewService = document.getElementById("new-second-shrinked");
var FirstNewService = document.getElementById("new-first-shrinked");
var ThirdNewService = document.getElementById("new-third-shrinked");

var newFirstShrinkedDiv = document.getElementById("new-inner-first");
var newSecondShrinkedDiv = document.getElementById("new-inner-second");
var newThirdShrinkedDiv = document.getElementById("new-inner-third");


SecondNewService.addEventListener("mouseover", NewServiceHoveringSlider);
SecondNewService.addEventListener("mouseout", EndNewServiceHoveringSlider);
ThirdNewService.addEventListener("mouseover", NewServiceHoveringFirstFromThird);
ThirdNewService.addEventListener("mouseout", EndingNewServiceHoveringFirstFromThird);


function NewServiceHoveringSlider(){

  FirstNewService.style.backgroundImage = 'url("./images/un-colored4.png")';
  FirstNewService.style.width = "19%";
  ThirdNewService.style.width = "19%";
  SecondNewService.style.width = "26%";
  SecondNewService.style.backgroundImage = 'url("./images/new-colored2.png")';


  newFirstShrinkedDiv.style.display = "none";
  // ThirdNewService.style.display = "none";
  newSecondShrinkedDiv.style.display = "block";

}

function EndNewServiceHoveringSlider(){
  FirstNewService.style.backgroundImage = 'url("./images/new-colored1.png")';
  newFirstShrinkedDiv.style.display = "block";

  SecondNewService.style.backgroundImage = 'url("./images/un-colored5.png")';

  SecondNewService.style.width = "19%";
  newSecondShrinkedDiv.style.display = "none";

  FirstNewService.style.width = "26%";

}

function NewServiceHoveringFirstFromThird(){
  // FirstNewService.style.backgroundImage = 'url("./images/un-colored4.png")';
  // FirstNewService.style.width = "23%";
  FirstNewService.style.backgroundImage = 'url("./images/un-colored1.png")';
  ThirdNewService.style.backgroundImage = 'url("./images/new-colored3.png")';

  FirstNewService.style.width = "20%";
  ThirdNewService.style.width = "26%";

  newFirstShrinkedDiv.style.display = "none";
  newThirdShrinkedDiv.style.display = "block";
  newSecondShrinkedDiv.style.display = "none";
  

}

function EndingNewServiceHoveringFirstFromThird(){
  ThirdNewService.style.backgroundImage = 'url("./images/un-colored6.png")';
  newThirdShrinkedDiv.style.display = "none";

  FirstNewService.style.width = "26%";
  FirstNewService.style.backgroundImage = 'url("./images/new-colored1.png")';

  newFirstShrinkedDiv.style.display = "block";
}


// Third Part of Slider


var SecondNewerService = document.getElementById("newer-second-shrinked");
var FirstNewerService = document.getElementById("newer-first-shrinked");
var ThirdNewerService = document.getElementById("newer-third-shrinked");

var newerFirstShrinkedDiv = document.getElementById("newer-inner-first");
var newerSecondShrinkedDiv = document.getElementById("newer-inner-second");
var newerThirdShrinkedDiv = document.getElementById("newer-inner-third");

SecondNewerService.addEventListener("mouseover", NewerServiceHoveringSlider);
SecondNewerService.addEventListener("mouseout", EndNewerServiceHoveringSlider);
ThirdNewerService.addEventListener("mouseover", NewerServiceHoveringFirstFromThird);
ThirdNewerService.addEventListener("mouseout", EndingNewerServiceHoveringFirstFromThird);


function NewerServiceHoveringSlider(){

  SecondNewerService.style.backgroundImage = 'url("./images/newer-colored2.png")';
  SecondNewerService.style.width = "26%";
  FirstNewerService.style.width = "19%";
  FirstNewerService.style.backgroundImage = 'url("./images/un-colored7.png")';
  newerSecondShrinkedDiv.style.display = "block";
  newerFirstShrinkedDiv.style.display = "none";



}

function EndNewerServiceHoveringSlider(){
  FirstNewerService.style.backgroundImage = 'url("./images/colored7.png")';
  FirstNewerService.style.width = "26%";

  SecondNewerService.style.width = "19%";
  SecondNewerService.style.backgroundImage = 'url("./images/un-colored8.png")';
  newerSecondShrinkedDiv.style.display = "none";
  FirstNewerService.style.backgroundImage = 'url("./images/newer-colored1.png")'
  newerFirstShrinkedDiv.style.display = "block";




}

function NewerServiceHoveringFirstFromThird(){
  FirstNewerService.style.backgroundImage = 'url("./images/un-colored7.png")';
  FirstNewerService.style.width = "19%";
  ThirdNewerService.style.width = "26%";
  ThirdNewerService.style.backgroundImage = 'url("./images/newer-colored3.png")'
  newerThirdShrinkedDiv.style.display = "block";
  newerFirstShrinkedDiv.style.display = "none";


}

function EndingNewerServiceHoveringFirstFromThird(){
  FirstNewerService.style.backgroundImage = 'url("./images/newer-colored1.png")';
  FirstNewerService.style.width = "26%";
  ThirdNewerService.style.width = "19%";
  newerThirdShrinkedDiv.style.display = "none";
  newerFirstShrinkedDiv.style.display = "block";

  ThirdNewerService.style.backgroundImage = 'url("./images/un-colored9.png")';

}