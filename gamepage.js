// random value generated
  var y = Math.floor(Math.random()* 10+1);
  var x = document.getElementById("guessField").value;

  if (x==y){
    alert(player_name + "YOU GUESSED IT RIGHT IN" + guess + "guesses" );
    guess=1;
  }else if(x>y){
    guess++;
    alert("SORRY|TRY A SMALLER NO.");
  }else{
     guess++;
    alert("SORRY|TRY A BIGGER NO.");
  }
   
  function playAgain(){
    y = Math.floor(Math.random()* 10+1);
  }
   
