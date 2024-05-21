var colors = generateRandomColors(6)

var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("displayColor");
var messageDisplay = document.querySelector("#message");
var h3 = document.querySelector("h3");
var resetbutton = document.getElementById("reset")
var Easybttn = document.getElementById("Easy");
var Hardbttn = document.querySelector("#Hard");
var pickedColor = pickColor();

Easybttn.addEventListener("click", function(){
    alert("clicked");
})

resetbutton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change displayColor to match picked
    displayColor.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.background = colors[i];
    }
    resetbutton.textContent = "New Color"
    h3.style.background = "#232323";

})



displayColor.textContent =  pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add clicked listeners to squares
    squares[i].addEventListener("click", function(){
        //grap color of clicked  square
        var clickedColor = this.style.background;
        //compare color to pickedcolor
        if(clickedColor === pickedColor){
          messageDisplay.textContent = "correct";
          changeColors(clickedColor);
          h3.style.background = clickedColor;
          resetbutton.textContent = "Play Again"
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;

    }
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array 
    var arr = []

    //report num times 
     for(var i = 0; i < num; i++){

        //get random color and push into arr
        arr.push(randomColor())   
     }
     //return that array 
     return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);

    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);

    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}