$(document).ready(function(){
    var goal, current, redNumber, blueNumber, yellowNumber, greenNumber;

    var redNumber = Math.floor(Math.random()*12);
    var yellowNumber = Math.floor(Math.random()*12);
    var greenNumber = Math.floor(Math.random()*12);
    var blueNumber = Math.floor(Math.random()*12);

    $("#red").attr("value", redNumber);
    $("#yellow").attr("value", yellowNumber);
    $("#green").attr("value", greenNumber);
    $("#blue").attr("value", blueNumber);
    
    var resetGame = function(){
        goal = Math.floor(Math.random()*101 + 19);
        current = 0; 
        var redNumber = Math.floor(Math.random()*12);
        var yellowNumber = Math.floor(Math.random()*12);
        var greenNumber = Math.floor(Math.random()*12);
        var blueNumber = Math.floor(Math.random()*12);
    }
    
    resetGame();
    
        $(".button").click(function(){
            current +=parseInt($(this).attr("value"));
            console.log(current);
        });
    
    console.log(redNumber);
    console.log(yellowNumber);
    console.log(greenNumber);
    console.log(blueNumber);

    console.log(goal);



});