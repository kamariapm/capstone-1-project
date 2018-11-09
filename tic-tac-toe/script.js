let player1 = (prompt(`Hello Player 1, what is your name?`));
alert("Hello " + player1 + ", you are 'X' and you will have the first move");
let player2 = (prompt(`Hello Player 2, what is your name?`));
alert("Hello " + player2 + ", you are 'O'. May the best Player win! 😎");



// let player1 = "Player 1"
// let player2 = "Player 2"

let currentPlayer = player1
let reset = true

$(document).ready(function () {

    $(".squares").on("click", function(){
        let currentCell = $(this)
        if (currentCell.html()===" "){
            if(currentPlayer === player1){
                currentCell.html('x')
                checkForWinner()
                currentPlayer = player2
            }
            else {
                currentCell.html("o")
                checkForWinner()
                currentPlayer = player1
            }
        }
    })
    

        function checkForWinner (){            
            if ($("#row1Box1").html() === $("#row1Box2").html() && $("#row1Box1").html() === $("#row1Box3").html() && 
            $("#row1Box1").html()!=" ") {
                if($("#row1Box1").html()=== 'x')
                M.toast({html: 'Game over! ' + player1 + ' won!'})
                //    alert("Game over " + player1 + " won!")
                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                //    alert("Game over " + player2 + " won!")
                }
                         
            }    
            
            if ($("#row2Box1").html() === $("#row2Box2").html() && $("#row2Box1").html() === $("#row2Box3").html() &&
            $("#row2Box1").html()!=" ") {
                if($("#row2Box1").html()=== 'x')
                //    alert("Game over " + player1 + " won!")
                M.toast({html: 'Game over! ' + player1 + ' won!'})

                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                //    alert("Game over " + player2 + " won!")
                }
            }

            if ($("#row3Box1").html() === $("#row3Box2").html() && $("#row3Box1").html() === $("#row3Box3").html() &&
            $("#row3Box1").html()!=" ") {
                
                if($("#row3Box1").html()=== 'x')
                //    alert("Game over " + player1 + " won!")
                M.toast({html: 'Game over ' + player1 + ' won'})

                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                //    alert("Game over " + player2 + " won!")
                }
            }

            if ($("#row1Box1").html() === $("#row2Box2").html() && $("#row1Box1").html() === $("#row3Box3").html() &&
            $("#row1Box1").html()!=" ") {
                
                if($("#row1Box1").html()=== 'x')
                M.toast({html: 'Game over! ' + player1 + ' won!'})

                //    alert("Game over " + player1 + " won!")
                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                //    alert("Game over " + player2 + " won!")
                }
            }

            if ($("#row1Box3").html() === $("#row2Box2").html() && $("#row1Box3").html() === $("#row3Box1").html() &&
            $("#row1Box3").html()!=" ") {
                
                if($("#row1Box3").html()=== 'x')
                M.toast({html: 'Game over! ' + player1 + ' won!'})

                //    alert("Game over " + player1 + " won!")
                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                //    alert("Game over " + player2 + " won!")
                }
            }

            if ($("#row1Box2").html() === $("#row2Box2").html() && $("#row1Box2").html() === $("#row3Box2").html() &&
            $("#row1Box2").html()!=" ") {
                
                if($("#row1Box2").html()=== 'x')
                M.toast({html: 'Game over! ' + player1 + ' won!'})

                //    alert("Game over " + player1 + " won!")
                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                //    alert("Game over " + player2 + " won!")
                }
            }

            if ($("#row1Box1").html() === $("#row2Box1").html() && $("#row1Box1").html() === $("#row3Box1").html() &&
            $("#row1Box1").html()!=" ") {
                if($("#row1Box1").html()=== 'x')
                M.toast({html: 'Game over! ' + player1 + ' won!'})

                //    alert("Game over " + player1 + " won!")
                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                    //    alert("Game over " + player2 + " won!")
                }
            }

            if ($("#row1Box3").html() === $("#row2Box3").html() && $("#row1Box3").html() === $("#row3Box3").html() &&
            $("#row1Box3").html()!=" ") {
                
                if($("#row1Box3").html()=== 'x')
                M.toast({html: 'Game over! ' + player1 + ' won!'})

                //    alert("Game over " + player1 + " won!")
                else {
                    M.toast({html: 'Game over! ' + player2 + ' won!'})

                //    alert("Game over " + player2 + " won!")
                }
            }
          if( $("#row1Box1").html() != " " &&
                $("#row1Box2").html() != " " &&
                $("#row1Box3").html() != " "&&
                $("#row2Box1").html() != " " &&
                $("#row2Box2").html() != " " &&
                $("#row2Box3").html() != " " &&
                $("#row3Box1").html() != " " &&
                $("#row3Box2").html() != " " &&
                $("#row3Box3").html() != " "){
// alert("DRAW! Let's play again")
M.toast({html: 'Draw! Play Again'})

                } 
        } 
        $("#resetButton").click(function() {
            location.reload()
        })

    });