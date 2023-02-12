// var buttons = document.querySelectorAll("button.piano");
// buttons.forEach(button =>{
//   button.addEventListener("click", function() {
//     console.log(this);
//     var buttonInnerHtml = this.innerHTML;
//     //buttonAnimation(buttonInnerHtml);
//   });
// })

var numberOfPianoButtons = document.querySelectorAll("button.piano");
for (var i = 0; i < numberOfPianoButtons.length; i++){
  document.querySelectorAll(".piano")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

  });
}


document.addEventListener("keydown", function(event){
  makesound(event.key);
  buttonAnimation(event.key);
    //console.log(event);
});


function makesound(key){
  switch (key) {
    case "C":
      var do1 = new Audio('sounds/do.wav');
      do1.play();
      break;

    case "D":
      var re = new Audio('sounds/re.wav');
      re.play();
      break;

    case "E":
      var mi = new Audio('sounds/mi.wav');
      mi.play();
      break;

    case "F":
      var fa = new Audio('sounds/fa.wav');
      fa.play();
      break;

    case "G":
      var sol = new Audio('sounds/sol.wav');
      sol.play();
      break;

    case "A":
      var la = new Audio('sounds/la.wav');
      la.play();
      break;

    case "B":
      var si = new Audio('sounds/si.wav');
      si.play();
      break;
    default: console.log(buttonInnerHtml);
  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
