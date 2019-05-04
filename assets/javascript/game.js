$(document).ready(function(){
    var goal, current, redNumber, blueNumber, yellowNumber, greenNumber, wins;
    wins = 1;
    losses = 1;

    var redNumber = Math.floor(Math.random()*12 + 1);
    var yellowNumber = Math.floor(Math.random()*12 +1);
    var greenNumber = Math.floor(Math.random()*12 +1);
    var blueNumber = Math.floor(Math.random()*12 + 1);

    $("#red").attr("value", redNumber);
    $("#yellow").attr("value", yellowNumber);
    $("#green").attr("value", greenNumber);
    $("#blue").attr("value", blueNumber);
    $("winsdiv").attr("value", wins);
    $("lossdiv").attr("value", losses);
    
    var resetGame = function(){
        goal = Math.floor(Math.random()*101 + 19);
        current = 0; 
        var redNumber = Math.floor(Math.random()*12 + 1);
        var yellowNumber = Math.floor(Math.random()*12 + 1);
        var greenNumber = Math.floor(Math.random()*12 + 1);
        var blueNumber = Math.floor(Math.random()*12 + 1);
        $('#rand_num').text(goal);
        
        $('#points_total').text(current);
    }
    
    resetGame();         

        $(".button").click(function(){
            
            current +=parseInt($(this).attr("value"));// makes "current value a number
            console.log(current);
            
            $('#points_total').text(current);

            
            
            if(current === goal){
                alert("you win");
                $('#winsdiv').text(wins ++, "wins");
                resetGame();
            }
            else if(current >= goal){
                alert("you lose");
                $('#lossdiv').text(losses ++, "loosses");
                resetGame();
            }
        });
        
    
      
    
    console.log(redNumber);
    console.log(yellowNumber);
    console.log(greenNumber);
    console.log(blueNumber);

    console.log(goal);



});