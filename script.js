var numSquares=6;
var colors= [];
var pickedColor;
var squares =document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 =document.querySelector("h1");
var btnReset=document.querySelector("#reset");
var modeBtn =document.querySelectorAll(".mode");


init();
function init(){
    setupModeButtons();
    setupSquares();
    reset();
 }


function setupModeButtons(){
     for (var i=0;i<modeBtn.length;i++){
        modeBtn[i].addEventListener("click",function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent==="Easy"){
            numSquares=3;
        }else{
            numSquares=6;
            }
        reset();
            });
        }
    }
function setupSquares(){
    for (var i=0;i<squares.length;i++){
    
            squares[i].addEventListener("click",function(){
            var clickedColor= this.style.backgroundColor;
            if(clickedColor===pickedColor){
                messageDisplay.textContent="correct";
                btnReset.textContent="play again";
                changeColors(clickedColor);
                h1.style.background= clickedColor;
            }else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again";
                
            }

        });
    }
}






function reset(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    h1.style.background="steelblue";
    messageDisplay.textContent="";
    btnReset.textContent="New Colors";
    for (var i=0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.display="block";    
        squares[i].style.backgroundColor =colors[i];
        }else{
            squares[i].style.display ="none";
        }
    }
}

/*
easyBtn.addEventListener("click",function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    h1.style.background="steelblue";

    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor =colors[i];
        if (colors[i])  {
            squares[i].style.background =colors[i];

        }  else {
            squares[i].style.display="none";
        }
    }
    

})

hardBtn.addEventListener("click",function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    h1.style.background="steelblue";

    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor =colors[i];
        squares[i].style.display="block";
    }    
})
*/
btnReset.addEventListener("click",function(){
    reset();
})



for (var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor =colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor= this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent="correct";
            btnReset.textContent="play again";
            changeColors(clickedColor);
            h1.style.background= clickedColor;
        }else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
            
        }

    })
}

function changeColors(color){
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
   var random =Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for (var i=0; i<num; i++){
        arr.push(randomColor());
    }
    
    return arr;
}

function randomColor(){
    var red =Math.floor(Math.random()*256);
    var green= Math.floor(Math.random()*256);
    var blue= Math.floor(Math.random()*256);
    return "rgb(" + red +", " + green+", "+blue+")";
}



