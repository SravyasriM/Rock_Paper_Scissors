for (var i = 0; i < 4; i++) {
document.querySelectorAll(".play")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


document.addEventListener("keypress", function(event) {

  makeSound(event.key);


});


function makeSound(key) {
  if(key=="rock"||key==paper||key=="scissors") {
    var kick = new Audio('sounds/clap.mp3');
      kick.play();
  
  }
}


