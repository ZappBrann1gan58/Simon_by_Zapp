var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userColors = [];
var level = 0;

$("body").keypress(function(){
    if(level === 0){
        randomChosenColor();
    }
})

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    level++;
    $("h1").text("Level " + level);
    return randomNumber;
} 

//Generates computer generated pattern and plays a sound associated with it

function randomChosenColor(){
    var results = nextSequence();
    if (results === 0){
        gamePattern.push("red");
        redAction();
        playSound(red.toString());
    } if (results === 1){
        gamePattern.push("blue");
        blueAction();
        playSound(blue.toString());
    }
    if (results === 2){
        gamePattern.push("green");
        greenAction();
        playSound(green.toString());
    }
    if (results === 3){
        gamePattern.push("yellow");
        yellowAction();
        playSound(yellow.toString());
    }
    console.log(gamePattern);
}

$(".pad").click(function(){
    var userChosenColor = $(this).attr("id");
    userColors.push(userChosenColor);
    playSound(userChosenColor);
    checkAnswer();
    return userChosenColor;
})

function playSound(name){
    if(name.toLowerCase() === "blue"){
        blueAction();
    } if(name.toLowerCase() === "yellow"){
        yellowAction();
    } if(name.toLowerCase() === "red"){
        redAction();
    } if(name.toLowerCase() === "green"){
        greenAction();
    }
}

function blueAction(){
    $(".blue").addClass("pressed");
    setTimeout(function(){
        $(".blue").removeClass("pressed")
    }, 200);
    /*"
    $(".blue").fadeOut([50], [0.5]);
    $(".blue").fadeIn([50], [0.5]);*/
    var zap = new Audio("./assets/sounds/zapp.mp3");
    zap.play();
}

function redAction(){
    $(".red").addClass("pressed");
    setTimeout(function(){
        $(".red").removeClass("pressed")
    }, 200);
    var katie = new Audio("./assets/sounds/katie.mp3");
    katie.play();
}

function greenAction(){
    $(".green").addClass("pressed");
    setTimeout(function(){
        $(".green").removeClass("pressed")
    }, 200);
    var blip = new Audio("./assets/sounds/blip.mp3");
    blip.play();
}

function yellowAction(){
    $(".yellow").addClass("pressed");
    setTimeout(function(){
        $(".yellow").removeClass("pressed")
    }, 200);
        var boom= new Audio("./assets/sounds/boom.mp3");
        boom.play();
}


function checkAnswer(){
    var currentLevel = level;
    console.log(currentLevel);
    var currentLength = userColors.length -1;
    if(userColors[currentLength] === gamePattern[currentLength]){
        console.log("Success!");
    } if(userColors.length > currentLevel){
        console.log("Slow down!");
    }
        else if (userColors[currentLength] != gamePattern[currentLength]){
            wrong();
        console.log("Wrong");
    }

    if(userColors.length === gamePattern.length  && userColors.toString === gamePattern.toString){
        setTimeout(function(){
            randomChosenColor();
            userColors.length = 0;
        }, 1000 );
    }
}


function wrong(){
    $("body").addClass("wrong");
    $("h1").css("fontsize", "6rem");
    $("h1").css("color", "#ffea00");
    $("h1").text("SORRY TRY AGAIN!");
}