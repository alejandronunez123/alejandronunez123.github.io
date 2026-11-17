var init = function (window) {
  "use strict";
  var draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz,
    app = window.opspark.makeApp(),
    canvas = app.canvas,
    view = app.view,
    fps = draw.fps("#000");

  window.opspark.makeGame = function () {
    window.opspark.game = {};
    var game = window.opspark.game;

    ///////////////////
    // PROGRAM SETUP //
    ///////////////////

    // TODO 1 : Declare and initialize our variables
    var circles = [];

    // TODO 2 : Create a function that draws a circle
    function drawCircle() {
      var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
      physikz.addRandomVelocity(circle, canvas, 5, 5);
      view.addChild(circle);
      circles.push(circle);
    }

    // TODO 3 : Call the drawCircle() function
    // (Old individual calls removed)

    // TODO 7 : Use a loop to create multiple circles
    for (var i = 0; i < 50; i++) {
      drawCircle();
    }

    ///////////////////
    // PROGRAM LOGIC //
    ///////////////////

    /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
    function update() {
      // TODO 4 : Update the position of each circle using physikz.updatePosition()
      // (Old individual calls removed)

      // TODO 5 : Call game.checkCirclePosition() on your circles
      // (Old individual calls removed)

      // TODO 8 / TODO 9 : Iterate over the array
      for (var i = 0; i < circles.length; i++) {
        physikz.updatePosition(circles[i]);
        game.checkCirclePosition(circles[i]);
      }
    }

    /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should bounce it.
        */
    game.checkCirclePosition = function (circle) {
      // Borde derecho: si toca la derecha, rebota invirtiendo la velocidad en X
      if (circle.x > canvas.width) {
        circle.x = canvas.width;
        circle.velocityX = -circle.velocityX;
      }

      // TODO 6 : YOUR CODE STARTS HERE //////////////////////

      // Borde izquierdo: si toca la izquierda, rebota invirtiendo la velocidad en X
      if (circle.x < 0) {
        circle.x = 0;
        circle.velocityX = -circle.velocityX;
      }

      // Borde superior: si toca arriba, rebota invirtiendo la velocidad en Y
      if (circle.y < 0) {
        circle.y = 0;
        circle.velocityY = -circle.velocityY;
      }

      // Borde inferior: si toca abajo, rebota invirtiendo la velocidad en Y
      if (circle.y > canvas.height) {
        circle.y = canvas.height;
        circle.velocityY = -circle.velocityY;
      }

      // YOUR TODO 6 CODE ENDS HERE //////////////////////////
    };

    /////////////////////////////////////////////////////////////
    // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
    /////////////////////////////////////////////////////////////

    view.addChild(fps);
    app.addUpdateable(fps);

    game.circles = circles;
    game.drawCircle = drawCircle;
    game.update = update;

    app.addUpdateable(window.opspark.game);
  };
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = init;
}
