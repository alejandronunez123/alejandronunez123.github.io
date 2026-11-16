$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 620, 200, 20, "cyan");
    createPlatform(500, 520, 200, 20, "lime");
    createPlatform(800, 420, 200, 20, "yellow");
    createPlatform(450, 320, 200, 20, "orange");
    createPlatform(150, 220, 200, 20, "hotpink");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 580, 470, 0.5, 0.7);
    createCollectable("steve", 880, 370, 0, 0);
    createCollectable("grace", 230, 170, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 450, 2000);
    createCannon("right", 450, 2500);
    createCannon("left", 250, 3000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
