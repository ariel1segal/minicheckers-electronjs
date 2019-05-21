// Simplefied Checkesrs Game
// By: Ariel Segal
// version: 0.04
// version info: In file version-info.txt

var turn = 'RED'; // values: 'RED', 'BLACK'
var prevTurn = 'BLACK'; // previous turn

// define constructor for Spot object
// A gameboard contains spots, where the pieces can be or moved to.
function Spot(s, u, d, r, l, p, pr, i, sp)
{
   this.state = s;  // values: 'RED', 'BLACK', 'BLANK'
   this.up = u;     // value: Position after up move.
   this.down = d;   // value: Position after down move.
   this.right = r;  // value: Position after right move.
   this.left = l;   // value: Position after left move.
   this.pair = p;   // value: Position of the spot's Domino Pair for black pieces.
   this.pairRed = pr;   // value: Position of the spot's Domino Pair for red pieces.
   this.picid = i;  // value: Board's image id of this spot.
   this.dspot = sp; // value: Spot's data (<td>) id.
}

// Define the playing board as an array of Spots.
const boardSize = 25;
let Board = new Array(boardSize);
// first row
Board[ 0] = new Spot('BLACK',null,5,1,null,5,1,"spotId0","tdid0");
Board[ 1] = new Spot('RED',null,6,2,0,6,0,"spotId1","tdid1");
Board[ 2] = new Spot('BLACK',null,7,3,1,7,7,"spotId2","tdid2");
Board[ 3] = new Spot('RED',null,8,4,2,8,4,"spotId3","tdid3");
Board[ 4] = new Spot('BLACK',null,9,null,3,9,3,"spotId4","tdid4");

// second row
Board[ 5] = new Spot('RED',0,10,6,null,0,10,"spotId5","tdid5");
Board[ 6] = new Spot('BLACK',1,11,7,5,1,11,"spotId6","tdid6");
Board[ 7] = new Spot('RED',2,12,8,6,2,2,"spotId7","tdid7");
Board[ 8] = new Spot('BLACK',3,13,9,7,3,9,"spotId8","tdid8");
Board[ 9] = new Spot('RED',4,14,null,8,4,8,"spotId9","tdid9");

// third row
Board[10] = new Spot('BLACK',5,15,11,null,11,5,"spotId10","tdid10");
Board[11] = new Spot('RED',6,16,12,10,10,6,"spotId11","tdid11");
Board[12] = new Spot('BLANK',7,17,13,11,null,13,"spotId12","tdid12");
Board[13] = new Spot('RED',8,18,14,12,14,12,"spotId13","tdid13");
Board[14] = new Spot('BLACK',9,19,null,13,13,19,"spotId14","tdid14");

// fourth row
Board[15] = new Spot('RED',10,20,16,null,20,20,"spotId15","tdid15");
Board[16] = new Spot('BLACK',11,21,17,15,21,null,"spotId16","tdid16");
Board[17] = new Spot('RED',12,22,18,16,22,18,"spotId17","tdid17");
Board[18] = new Spot('BLACK',13,23,19,17,23,17,"spotId18","tdid18");
Board[19] = new Spot('RED',14,24,null,18,24,14,"spotId19","tdid19");

// fifth row
Board[20] = new Spot('BLACK',15,null,21,null,15,15,"spotId20","tdid20");
Board[21] = new Spot('RED',16,null,22,20,16,22,"spotId21","tdid21");
Board[22] = new Spot('BLACK',17,null,23,21,17,21,"spotId22","tdid22");
Board[23] = new Spot('RED',18,null,24,22,18,24,"spotId23","tdid23");
Board[24] = new Spot('BLACK',19,null,null,23,19,23,"spotId24","tdid24");

function initBoard()
{
   let i;
   for(i = 0; i < boardSize; i++)
   {
      let cell = document.getElementById(Board[i])
      cell.getElementById("spotId" + i.toString()).src = (i%2==0? "black-piece50.gif": "red-piece50.gif");
   }
}

// Keep track of the blank spot
let blankSpot = Board[12];

// init game
function initGame()
{
   initBoard()
   blankSpot = Board[12];
}

// find number of spot from spotId
function getSpotNumber(s) // paramwret is a string
{
   var number = new String('');
   
   for(var i = 0; i < s.length; i++)
   {
      if( (s.charAt(i) >= '0') && (s.charAt(i) <= '9') )
         number += s.charAt(i);
   }
   return number;  // return a string
}

function updateBlankSpot(cspot) // parameter is the mew blank spot
{
   blankSpot = cspot;
}

function graphicMove(moveTo, picId) // moveTo: spot index to move, picId: image id of spot
{
   document.getElementById(Board[moveTo].picid).src = document.getElementById(picId).src;
   document.getElementById(picId).src = "blank50.gif";
}

function goUp(cspot) // parameter is the spot of the piece that moves
{
   if(cspot.up != null)
   {
      if(Board[cspot.up].state == 'BLANK')
      {
         Board[cspot.up].state = cspot.state;
         cspot.state = 'BLANK';
         graphicMove(cspot.up, cspot.picid);
         updateBlankSpot(cspot); // keep track of the blank spot
      }
      else
         alert("UP Spot Not Empty");
   }
   else
      alert("No UP Move");
}

function goDown(cspot) // parameter is the spot of the piece that moves
{
   if(cspot.down != null)
   {
      if(Board[cspot.down].state == 'BLANK')
      {
         Board[cspot.down].state = cspot.state;
         cspot.state = 'BLANK';
         graphicMove(cspot.down, cspot.picid);
         updateBlankSpot(cspot); // keep track of the blank spot
      }
      else
         alert('DOWN Spot Not Empty');
   }
   else
      alert("No DOWN Move");
}

function goRight(cspot) // parameter is the spot of the piece that moves
{
   if(cspot.right != null)
   {
      if(Board[cspot.right].state == 'BLANK')
      {
         Board[cspot.right].state = cspot.state;
         cspot.state = 'BLANK';
         graphicMove(cspot.right, cspot.picid);
         updateBlankSpot(cspot); // keep track of the blank spot
      }
      else
         alert('RIGHT Spot Not Empty');
   }
   else
      alert("No RIGHT Move");
}

function goLeft(cspot) // parameter is the spot of the piece that moves
{
   if(cspot.left != null)
   {
      if(Board[cspot.left].state == 'BLANK')
      {
         Board[cspot.left].state = cspot.state;
         cspot.state = 'BLANK';
         graphicMove(cspot.left, cspot.picid);
         updateBlankSpot(cspot); // keep track of the blank spot
      }
      else
         alert('LEFT Spot Not Empty');
   }
   else
      alert("No LEFT Move");
}

// Turn Functions -------------------------------------------------------------
// keep track of the turns

function changeTurns()
{
   if(turn == prevTurn)
   {
      alert("BUG!\nFAILED TO SWITCH TURNS!");
      return;
   }
   prevTurn = turn;
   if(turn == 'RED')
   {
      turn = 'BLACK';
      // alert("BLACK TURN"); // Debug Code
      return;
   }
   if(turn == 'BLACK')
   {
      turn = 'RED';
      // alert("RED TURN"); // Debug Code
      return;
   }
}

function isMyTurn(color)
{
   if(color == turn)
      return true;
   return false;
}

function notTurn()
{
   if(turn == 'RED')
      return 'BLACK';
   if(turn == 'BLACK')
      return 'RED';
}
// End of Turn Functions ------------------------------------------------------

// Find index in Board by <td> id (cell). Returns the index.
function getIndexByTdId(cell) // cell: Spot <td> id
{
   for(var i = 0; i < boardSize; i++)
   {
      if(cell == Board[i].dspot)
      {
         return i;
      }
   }
   alert("BUG! Invalid Cell\n"+"Object: "+cell);
   return null;
}

// Human performs his turn
function humanTurn(cell) // cell: Spot <td> id
{
   var found = false;

   var spotObj = Board[getIndexByTdId(cell)];

   // check turn
   // Debug: Need Spot object - find index in Board by cell.
   if(turn != spotObj.state)
   {
      // Debug Code
      alert("IT'S NOT YOUR PIECE!");

      return false;
   }

   // check if move up available
   if(blankSpot.down != null)
      if( cell == Board[blankSpot.down].dspot )
      {
         goUp(spotObj);
         found = true;
      }

   // check if move down available
   if(blankSpot.up != null)
      if( cell == Board[blankSpot.up].dspot )
      {
         goDown(spotObj);
         found = true;
      }

   // check if move right available
   if(blankSpot.left != null)
      if( cell == Board[blankSpot.left].dspot )
      {
         goRight(spotObj);
         found = true;
      }

   // check if move Left available
   if(blankSpot.right != null)
      if( cell == Board[blankSpot.right].dspot )
      {
         goLeft(spotObj);
         found = true;
      }

   if(found)
      changeTurns();
   else
      alert("No Available Move");
   return found;
}


// computer performs it's turn
function findCompMove(index) // index of a neighbor of blankSpot
{
   var found = false;

   if(index == null)
      return false;
   var spotObj = Board[index];

   // check turn
   if(turn != spotObj.state) // neighbor is not computer's
   {
      return false;
   }

   // check if move up available
   if(blankSpot.down != null)
      if( spotObj.dspot == Board[blankSpot.down].dspot )
      {
         if(Board[spotObj.pair].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goUp(spotObj);
            found = true;
         }
      }

   // check if move down available
   if(blankSpot.up != null)
      if( spotObj.dspot == Board[blankSpot.up].dspot )
      {
         if(Board[spotObj.pair].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goDown(spotObj);
            found = true;
         }
      }

   // check if move right available
   if(blankSpot.left != null)
      if( spotObj.dspot == Board[blankSpot.left].dspot )
      {
         if(Board[spotObj.pair].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goRight(spotObj);
            found = true;
         }
      }

   // check if move Left available
   if(blankSpot.right != null)
      if( spotObj.dspot == Board[blankSpot.right].dspot )
      {
         if(Board[spotObj.pair].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goLeft(spotObj);
            found = true;
         }
      }

//   if(!found)
//      alert("No Available Move");
   return found;
}

function findRedDomino(index) // index of a neighbor of blankSpot
{
   var found = false;

   if(index == null)
      return false;
   var spotObj = Board[index];

   // check turn
   if(turn != spotObj.state) // neighbor is not computer's
   {
      return false;
   }

   // check if move up available
   if(blankSpot.down != null)
      if( spotObj.dspot == Board[blankSpot.down].dspot )
      {
         if(Board[spotObj.pairRed].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goUp(spotObj);
            found = true;
         }
      }

   // check if move down available
   if(blankSpot.up != null)
      if( spotObj.dspot == Board[blankSpot.up].dspot )
      {
         if(Board[spotObj.pairRed].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goDown(spotObj);
            found = true;
         }
      }

   // check if move right available
   if(blankSpot.left != null)
      if( spotObj.dspot == Board[blankSpot.left].dspot )
      {
         if(Board[spotObj.pairRed].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goRight(spotObj);
            found = true;
         }
      }

   // check if move Left available
   if(blankSpot.right != null)
      if( spotObj.dspot == Board[blankSpot.right].dspot )
      {
         if(Board[spotObj.pairRed].dspot == blankSpot.dspot) // check if the move is the Domino Pair
         {
            goLeft(spotObj);
            found = true;
         }
      }

//   if(!found)
//      alert("No Available Move");
   return found;
}

function findFirstMove(index) // index of a neighbor of blankSpot
{
   var found = false;

   if(index == null)
      return false;
   var spotObj = Board[index];

   // check turn
   if(turn != spotObj.state) // neighbor is not computer's
   {
      return false;
   }

   // check if move up available
   if(blankSpot.down != null)
      if( spotObj.dspot == Board[blankSpot.down].dspot )
      {
         goUp(spotObj);
         found = true;
      }

   // check if move down available
   if(blankSpot.up != null)
      if( spotObj.dspot == Board[blankSpot.up].dspot )
      {
         goDown(spotObj);
         found = true;
      }

   // check if move right available
   if(blankSpot.left != null)
      if( spotObj.dspot == Board[blankSpot.left].dspot )
      {
         goRight(spotObj);
         found = true;
      }

   // check if move Left available
   if(blankSpot.right != null)
      if( spotObj.dspot == Board[blankSpot.right].dspot )
      {
         goLeft(spotObj);
         found = true;
      }

//   if(!found)
//      alert("No Available Move");
   return found;
}

function findRandomMove(index, bet) // index of a neighbor of blankSpot
{
   var found = false;

   if(index == null)
      return false;
   var spotObj = Board[index];

   // check turn
   if(turn != spotObj.state) // neighbor is not computer's
   {
      return false;
   }

   // check if move up available
   if(blankSpot.down != null)
      if( spotObj.dspot == Board[blankSpot.down].dspot )
      {
         if(bet > 3) 
         {
            goUp(spotObj);
            found = true;
            return found;
         }
      }

   // check if move down available
   if(blankSpot.up != null)
      if( spotObj.dspot == Board[blankSpot.up].dspot )
      {
         if( (bet > 2) && (bet < 3) ) 
         {
            goDown(spotObj);
            found = true;
            return found;
         }
      }

   // check if move right available
   if(blankSpot.left != null)
      if( spotObj.dspot == Board[blankSpot.left].dspot )
      {
         if( (bet > 1) && (bet < 2) ) 
         {
            goRight(spotObj);
            found = true;
            return found;
         }
      }

   // check if move Left available
   if(blankSpot.right != null)
      if( spotObj.dspot == Board[blankSpot.right].dspot )
      {
         if( (bet > 0) && (bet < 1) ) 
         {
            goLeft(spotObj);
            found = true;
            return found;
         }
      }

      return found;
}

function computerTurn()
{
   var found = false;

   if(level == 'HARD')
   {
      if(turn == 'BLACK')
      {
         if(findCompMove(blankSpot.up))
         found = true;
         if(!found && findCompMove(blankSpot.down))
         found = true;
         if(!found && findCompMove(blankSpot.right))
         found = true;
         if(!found && findCompMove(blankSpot.left))
            found = true;
      }
      if(turn == 'RED')
      {
         if(findRedDomino(blankSpot.up))
         found = true;
         if(!found && findRedDomino(blankSpot.down))
         found = true;
         if(!found && findRedDomino(blankSpot.right))
         found = true;
         if(!found && findRedDomino(blankSpot.left))
            found = true;
         if(!found)
         {
            if(findFirstMove(blankSpot.up))
               found = true;
            if(!found && findFirstMove(blankSpot.down))
               found = true;
            if(!found && findFirstMove(blankSpot.right))
               found = true;
            if(!found && findFirstMove(blankSpot.left))
               found = true;
         }
      }
   } // end if(level == 'HARD')
   if(level == 'EASY')
   {
      var bet = 4*Math.random();   

      if(findRandomMove(blankSpot.up, bet))
      found = true;
      if(!found && findRandomMove(blankSpot.down, bet))
      found = true;
      if(!found && findRandomMove(blankSpot.right, bet))
      found = true;
      if(!found && findRandomMove(blankSpot.left, bet))
         found = true;
      if(!found)
      {
         if(findFirstMove(blankSpot.up))
            found = true;
         if(!found && findFirstMove(blankSpot.down))
            found = true;
         if(!found && findFirstMove(blankSpot.right))
            found = true;
         if(!found && findFirstMove(blankSpot.left))
            found = true;
      }
   }
   changeTurns();
   return found;
}

// Count spots next to blankSpot with same color or null, to determine who wins.
function checkWhoWins()
{
   var winCount = 0;

   if(blankSpot.up == null)
      winCount++;
   else
   {
      if(!isMyTurn(Board[blankSpot.up].state) )
         winCount++;
   }

   if(blankSpot.down == null)
      winCount++;
   else
   {
      if(!isMyTurn(Board[blankSpot.down].state) )
         winCount++;
   }

   if(blankSpot.right == null)
      winCount++;
   else
   {
      if(!isMyTurn(Board[blankSpot.right].state) )
         winCount++;
   }

   if(blankSpot.left == null)
      winCount++;
   else
   {
      if(!isMyTurn(Board[blankSpot.left].state) )
         winCount++;
   }
   if(winCount == 4)
   {
      setTimeout(function(){
         alert(notTurn()+" WINS!");
     }, 100);
      return true;
   }
   return false;
}

// To be invoked when user selects a color to play with.
function playerSelectsColor(selectObj)
{
   if(selectObj.selectedIndex == 1)
   {
      turn = 'RED';
      computerTurn();
   }
   if(selectObj.selectedIndex == 0)
   {
      turn = 'BLACK';
   }
   // alert(turn); // Debug Code
}

// Define program's level of play.
var level="HARD"; // level values: "HARD", "EASY"

// To be invoked when user selects a level.
function playerSelectsLevel(selectObj)
{
   if(selectObj.selectedIndex == 0)
   {
      level = 'HARD';
   }
   if(selectObj.selectedIndex == 1)
   {
      level = 'EASY';
   }
   // alert(turn); // Debug Code
}

// play the game, to be envoked only from user's click on the game board
function playGame(cell) // cell: Spot <td> id)
{
   var humanWins;
   var validTurn;

   validTurn = humanTurn(cell);
   if(validTurn)
   {
      humanWins = checkWhoWins();
      if(!humanWins)
      {
         computerTurn();
         checkWhoWins();
      }
   }
}

