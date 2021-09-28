 var turn = true; //true means X turn
  var squares = [];


  function checkWinner(){
   for (var i=1; i<=9; i++) {
    squares[i] = document.getElementById('A'+i).innerHTML;
   }

   // check horizontal
   if (squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=""){
    alert('player ' + squares[1] +' Wins the game');
    
   }
   if (squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=""){
    alert('player ' + squares[4] +' Wins the game');
    
   }
   if (squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=""){
    alert('player ' + squares[7] +' Wins the game');
    
   }

   //check vertical
   if (squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=""){
    alert('player ' + squares[1] +' Wins the game');
    
   }
   if (squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=""){
    alert('player ' + squares[2] +' Wins the game');
   
   }
   if (squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=""){
    alert('player ' + squares[3] +' Wins the game');
   }

   //check diagonal
   if (squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=""){
    alert('player ' + squares[1] +' Wins the game');
   }
   if (squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=""){
    alert('player ' + squares[3] +' Wins the game');
   }

  }

  function insert(id){
   var S = document.getElementById(id);
   if(turn && S.innerHTML==""){
    S.innerHTML="X";
    turn = !turn;
   }else if(!turn && S.innerHTML==""){
    S.innerHTML="O";
    turn = !turn;
   }
   checkWinner();
}
  
  var Name="khaled";
  
  
     
    

 function insert2(){
     try{
         sAm;
    document.getElementById("name").value;
    if(document.getElementById("name").value ==Name){
        alert("WELCOME!! Khaled");
       
       
      } else{
          alert("Wrong name");
      }
    } catch(err){
        alert(err.message);
    }
  } 
