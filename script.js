let button = document.querySelector(".button") ;
let result = document.querySelector(".result");
button.onclick = function() {
    let answer1 = Number(document.querySelector(".answer1").value);
    let answer2 = document.querySelector(".answer2").value;
    
    if (answer1 > 5 && answer2 === "nice") {
      result.innerHTML =" you're a pink rose";
    } else if (answer1 <= 5 && answer2 === "nice") { result.innerHTML = " you're a very nice tulip because you're nice thats all that matters!😜😜";                              }
    if ( answer1 < 5 && answer2 === "mean") {
        result.innerHTML = " You're a rotten rose and do not deserve any flowers";
    } else if (answer1 <=5 && answer2 === "mean") {
  result.innerHTML = " You're a rotten rose" ;
               
        
    }
    
};