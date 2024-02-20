
var guess = 1;
playername = document.getElementById("playername").value;

var y = Math.floor(Math.random() * 10 + 1);
    
  
function submit() {
   
    var x = document.getElementById("guessField").value;
    if (x == y) {
        alert("PARABÉNS"+playername+", você acertou em"
        + guess + " tentativa(s)!");
        guess = guess + 1;
    } else if(x > y)
    {
        guess++;
        alert("Opaaaa, resposta errada! Tente um número menor");

    } else {
        guess++;
        alert("Opa, resposta errada! Tente um número maior")
    }

   
}

function playAgain() {
    x = Math.floor(Math.random() * 10 + 1);
}


