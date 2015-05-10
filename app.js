// OOP Tic Tac Toe boilerplate code
$(document).ready(function() { 

var turns = ["X","O","X","O","X","O","X","O","X"];
var square;


  function Game() {
    this.player1 = new Player("X");
    this.player2 = new Player("O");
    this.board = new Board();
  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
      if (turns.length === 0) {
        return false;
      } else {
        this.nextFigure = turns.pop();  
      }  
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    _this = this;
    $('.row-ca').on('click',function(){
      square = this;
      _this.nextTurn();
      _this.checkForWinner();
    });
  };

  Game.prototype.nextTurn = function(){
      if (this.nextPlayer() === false) {
        alert("Pailas");
      } else {
        $('.turn').text('Turn: ' + this.nextFigure);
        this.board.markSquare(this.nextFigure);       
      }
  };

  Game.prototype.checkForWinner = function(){
    console.log("Yes");
  };


  // A starter Player constructor.
  function Player(team) {
    this.team = team;
    this.marks = [];
  }

  // A starter Board constructor.
  function Board() {
    this.$cells = $('.row-ca');   
    //Store any other properties that board may have below, such as a reset option
  }

  Board.prototype.markSquare = function(team){
    for(var i=0; i< this.$cells.length; i++){
        if (this.$cells[i] === square) {
            square.innerHTML = team;           
        }
    }
  };

  


  // Start the game!
  var game = new Game();
  game.init();





 });