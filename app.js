// OOP Tic Tac Toe boilerplate code
$(document).ready(function() { 

var turns = ["X","O","X","O","X","O","X","O","X"];
var lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[6,4,2],[2,5,8]];
var square;
$('.reset').fadeOut();


  function Game() {
    this.player1 = new Player("X");
    this.player2 = new Player("O");
    this.board = new Board();
  }

  // Remember: prototypes are shared functions between all game instances
  Game.prototype.nextPlayer = function() {
        this.currentFigure = turns.pop();  
  };

  // `Game.prototype.init` kicks off a new game with a board and two players
  Game.prototype.init = function() {
    _this = this;
    $('.row-ca').on('click',function(){
      square = this;
      if (turns.length === 0) {
          alert("Game Over");
        }else{
          if (_this.board.marked() === false) {
            _this.nextTurn();
            _this.checkForWinner();
          } else {
              alert("Try different spot");
          }
      }
    });
  };

  Game.prototype.nextTurn = function(){
      this.nextPlayer();  
        this.message();
        this.board.markSquare(this.currentFigure);       
  };

  Game.prototype.message = function (){
      $('.turn').text('Next turn: ' + turns[turns.length -1] );
  };


  Game.prototype.checkForWinner = function(){
    var cell = this.board.$cells;
    for (var i = 0; i < lines.length; i++) {
      line = lines[i];
      cell1 = cell[line[0]].innerHTML;
      cell2 = cell[line[1]].innerHTML;
      cell3 = cell[line[2]].innerHTML;
      if (cell1 !== "" && cell1 === cell2 && cell1 === cell3) {
          $('.turn').text("Game Over");
          $('.reset').fadeIn();
          alert(cell2 + " Wins");
          turns = [];
      }
    }
  };


  Game.prototype.reset = function(){
    for (var i = 0; i < this.board.$cells.length; i++) {
      console.log( this.board.$cells[i]);
    }
  };
  
  function Player(team) {
    this.team = team;
  }

  
  function Board() {
    this.$cells = $('.row-ca');   
  }

  Board.prototype.markSquare = function(team){
    for(var i=0; i< this.$cells.length; i++){
        if (this.$cells[i] === square) {
              square.innerHTML = team;           
        }
    }
  };

  Board.prototype.marked = function() {
      if (square.innerHTML === "") {
        return false;
      }
  };

  


  // Start the game!
  var game = new Game();
  game.init();





 });