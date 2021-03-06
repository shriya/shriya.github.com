window.addEventListener("load", function() {

  function clear(ctx, width, heigt) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawRandomShape(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
    // make random one of the 4 shapes appear at random index within canvas
    var randomNum = Math.floor(Math.random() * 4);
    var randomX = (Math.floor(Math.random() * (width - 50)));
    var randomY = (Math.floor(Math.random() * (height - 50)));
    function draw(randomNum, randomX, randomY) {
      if (randomNum === 0) {
        redTri(randomX, randomY);
        expectedKey = expectedKeysMap.red0;
      } else if (randomNum === 1) {
        whiteSq(randomX, randomY);
        expectedKey = expectedKeysMap.white1;
      } else if (randomNum === 2) {
        whiteTri(randomX, randomY);
        expectedKey = expectedKeysMap.white0;
      } else {
        redSq(randomX, randomY);
        expectedKey = expectedKeysMap.red1;
      }
    }
    draw(randomNum, randomX, randomY);
  }

  function drawGameStartText(ctx, width, height, score) {
    clear(ctx, width, height);
    // press spacebar to start a new game
    ctx.font = "24px Arial";
    ctx.fillStyle = "#28464B;";
    ctx.textAlign = "center";

    // score: ## (displayed underneath *if* they have a prev score))
    if (score) { // if score is not undefined
      ctx.fillText("Your score was: " + score, canvas.width / 2, (canvas.height / 2) - 90);
    }

    ctx.fillText("Click the arrow keys that match the shapes", canvas.width / 2, (canvas.height / 2) - 30);
    ctx.fillText("If you get it right, you earn a point; wrong, you lose one.", canvas.width / 2, (canvas.height / 2));

    ctx.fillText("Press spacebar to start a new game!", canvas.width / 2, (canvas.height / 2) + 60);
  }

  function restartGame(ctx, width, height) {
    clear(ctx, width, height);
    gameOn = true;

    drawRandomShape(ctx, width, height);

    // timer counts down from 30 to 0 seconds, every 1 second
    var countdown = setInterval(function() { 
      timerSpan.innerHTML = timerSpan.innerHTML - 1;
    }, 1000);

    // game ends and takes you back to start text after 30 seconds
    setTimeout(function() {
      clearInterval(countdown);
      drawGameStartText(ctx, width, height, scoreSpan.innerHTML); 
    }, 30*1000);
  }

  var canvas = document.getElementById("shapes-game"),
      height = canvas.scrollHeight,
      width = canvas.scrollWidth,
      gameOn = false,
      expectedKey = undefined,
      ctx = canvas.getContext('2d'),
      // white triangle = up, red square = down,
      // red triangle = left, white square = right
      expectedKeysMap = {white0: 38, red1: 40, red0: 37, white1: 39},
      timerSpan = document.getElementById("time-remaining"),
      scoreSpan = document.getElementById("score-val"),
      seconds = 3,
      intervalId;

  canvas.width = width;
  canvas.height = height;

  function redTri(x, y) { // left
    ctx.fillStyle = "#825E80";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y+50);
    ctx.lineTo(x, y+50);
    ctx.fill();
    ctx.closePath();
  }
  function whiteSq(x, y) { // right
    ctx.fillStyle = "#28464B";
    ctx.fillRect(x, y, 50, 50);
  }
  function whiteTri(x, y) { // up
    ctx.fillStyle = "#28464B";
    ctx.beginPath();
    
    // // triangle
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y+50);
    ctx.lineTo(x, y+50);

    // DDR Arrow
    // ctx.moveTo(25, 0);
    // ctx.lineTo(50, 25);
    // ctx.quadraticCurveTo(50, 35, 40, 35);
    // ctx.lineTo(35, 30);
    // ctx.lineTo(35, 40);
    // ctx.quadraticCurveTo(35, 50, 25, 50);
    // ctx.quadraticCurveTo(15, 50, 15, 30);
    // ctx.lineTo(15, 30);
    // ctx.lineTo(10, 35);
    // ctx.quadraticCurveTo(0, 35, 0, 25);

    ctx.fill();
    ctx.closePath();
  }
  function redSq(x, y) { // down
    ctx.fillStyle = "#825E80";
    ctx.fillRect(x, y, 50, 50);
  }

  drawGameStartText(ctx, width, height); 

  document.addEventListener("keyup", function(key) {
    if(key.keyCode === 32 && !gameOn) {
      restartGame(ctx, width, height);
    } else if(key.keyCode === 38 && gameOn) {
      // if matching shape, score += 1
      // if not matching shape, score -= 1
      if (expectedKey === key.keyCode) {
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
      } else {
        scoreSpan.innerHTML = scoreSpan.innerHTML - 1;
      } 
      // after either, draw another shape
      drawRandomShape(ctx, width, height);
    } else if(key.keyCode === 40 && gameOn) {
      // if matching shape, score += 1
      // if not matching shape, score -= 1
      if (expectedKey === key.keyCode) {
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
      } else {
        scoreSpan.innerHTML = scoreSpan.innerHTML - 1;
      }
      // after either, draw another shape
      drawRandomShape(ctx, width, height);
    } else if(key.keyCode === 37 && gameOn) {
      // if matching shape, score += 1
      // if not matching shape, score -= 1
      if (expectedKey === key.keyCode) {
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
      } else {
        scoreSpan.innerHTML = scoreSpan.innerHTML - 1;
      }
      // after either, draw another shape
      drawRandomShape(ctx, width, height);
    } else if(key.keyCode === 39 && gameOn) {
      // if matching shape, score += 1
      // if not matching shape, score -= 1
      if (expectedKey === key.keyCode) {
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
      } else {
        scoreSpan.innerHTML = scoreSpan.innerHTML - 1;
      }
      // after either, draw another shape
      drawRandomShape(ctx, width, height);
    }
  });
});







































