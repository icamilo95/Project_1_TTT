// OOP Tic Tac Toe boilerplate code
$(document).ready(function() { 

var turns = ["X","O","X","O","X","O","X","O","X"];
var square;
var lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[6,4,2],[2,5,8]];
$('.reset').fadeOut();


  function Game() {
    this.player1 = new Player("X");
    this.player2 = new Player("O");
    this.board = new Board();
  }

  
  Game.prototype.nextPlayer = function() {
        this.currentFigure = turns.pop();  
  };

  Game.prototype.play = function() {
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
          $('.turn').text(cell2 + " Wins");
          $('.reset').fadeIn();
          alert(cell2 + " Wins");
          turns = [];
          this.addCounter(cell2);
          this.resetGame();
      }
    }
  };

  Game.prototype.addCounter = function(team){
      if (team === "X") {
        this.player1.record += 1;
        $('#recordX').text("Player X wins: " + this.player1.record);
      }else{
        this.player2.record += 1;
        $('#recordO').text("Player O wins: " + this.player2.record);
      }
      
  };


  Game.prototype.resetGame = function(){
    _this = this;
    $('.reset').on('click',function(){
        for (var i = 0; i < _this.board.$cells.length; i++) {
           _this.board.$cells[i].innerHTML = "";
        }      
        turns = ["X","O","X","O","X","O","X","O","X"];
    });
  };
  
  function Player(team) {
    this.record = 0;
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
      console.log(square.innerHTML);
      if (square.innerHTML === "") {
        return false;
      }
  };

  


  // Start the game!
  var game = new Game();
  game.play();





 });