var game = {
  count: 0,
  possibleColors: ["#blue", "#green", "#yellow", "#red"],
  currentGame: [],
  player: [],
  sound: {
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
  },
  strict: false,

};

var startButton = document.querySelector('#start');

startButton.onclick = function() {
  start();
};

function start() {
  game.currentGame = [];
  game.count = 0;
  makeAMove();
  
}

function clearGame() {
  game.currentGame = [];
  game.count = 0;
}

function newGame() {
  game.count = 0;
  $('#numberCounter').addClass('animated fadeOutDown');

  setTimeout(function() {
    $('#numberCounter').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 300);
  clearGame();
}

function strict() {
  if (game.strict == false) {
    game.strict = true;
    $("#strict").html("Strict ON").css("color", "green");
  }
  else {
    game.strict = false;
    $("#strict").html("Strict OFF").css("color", "white");
  }

  newGame();
}


function allowMoves() {
  var i = 0;
  var moves = setInterval(function() {
    playGame(game.currentGame[i]);
    i++;
    if (i >= game.currentGame.length) {
      clearInterval(moves);
    }
  }, 700);

  clearPlayer();
}

function sound(name) {
  switch (name) {
    case "#blue":
      game.sound.blue.play();
      break;
    case "#green":
      game.sound.green.play();
      break;
    case "#yellow":
      game.sound.yellow.play();
      break;
    case "#red":
      game.sound.red.play();
      break;
  }
}

function playGame(field) {
  $(field).addClass("hover");
  sound(field);
  setTimeout(function() {
    $(field).removeClass("hover");
  }, 300);
}

function clearPlayer() {
  game.player = [];
}

function addToPlayer(id) {
  var field = "#" + id;
  console.log(field);
  game.player.push(field);
  playerTurn(field);
}

function playerTurn(x) {
  if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
    if (game.strict) {
      swal({
        title: "Better Luck Next Time!!!!!",
        text: "Try Again!",
        icon: "error",
        button: "Ok",
      });
      newGame();
    }
    else {
     swal({
        title: "Ah Sure, Better Luck Next Time Partner",
        text: "Try Again!",
        icon: "error",
        button: "Ok",
        timer: 400,
      });
      allowMoves();
    }
  }
  else {
    console.log("You Can Do It! Tap The Circles!!!!!!");
    sound(x);
    var check = game.player.length === game.currentGame.length;
    if (check) {
      if (game.count == 20) {
        alert("You Are A True BrainGame Master, We Bow Down To You");
        newGame();
      }
      else {
        swal({
          title: "Well Done!",
          text: "Next Round",
          icon: "success",
          button: false,
          timer: 600,
        });
        nextRound();
      }
    }
  }
}

function nextRound() {
  addCount();
}

function makeAMove() {
  game.currentGame.push(game.possibleColors[(Math.floor(Math.random() * 4))]);
  allowMoves();
}

function addCount() {
  game.count++;
  $('#numberCounter').addClass('animated fadeOutDown');

  setTimeout(function() {
    $('#numberCounter').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 300);

  makeAMove();
}

newGame();
