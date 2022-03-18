"use strict";

var pixi = {};
var world = {};

function initializePixi() {
  var container = document.createElement('div');
  const gameContainer = document.getElementById('gooravityContainer');
  gameContainer.appendChild(container);

  Constants.AdjustScreenWidth(gameContainer);
  // Autodetect and create the renderer
  pixi.renderer = PIXI.autoDetectRenderer(Constants.SCREEN_WIDTH, Constants.SCREEN_HEIGHT);
  pixi.renderer.view.style.position = "absolute";
  pixi.renderer.autoResize = true;

  // Set the background color of the renderer to a baby-blue'ish color
  pixi.renderer.backgroundColor = 0x21263f;
  // pixi.renderer.backgroundColor = 0x000022;

  // Append the renderer to the body of the page
  container.appendChild(pixi.renderer.view);

  document.addEventListener("touchstart", onTouchStart, true);
  document.addEventListener("mousedown", onTouchStart, true);

  document.addEventListener("mousemove", onTouchDrag, true);
  document.addEventListener("touchmove", onTouchDrag, true);

  document.addEventListener("mouseup", onTouchEnd, true);
  document.addEventListener("touchend", onTouchEnd, true);

  document.addEventListener("keyup", onKeyUp, true);

  pixi.world = World();
}

// ========  EVENT FUNCTIONS  ==============

var prevKey = '';
var output = '';
function onKeyUp(event) {
  if (event.key === 'p') {
    console.log(output);
    output = '';
  } else if (event.key === ']') {
    State.nextLevel();
  } else if (event.key === '[') {
    if (State.getLevel() > 0) {
      State.setLevel(State.getLevel() - 1);
    }
  } else {
    prevKey = event.key;
  }
}

function onTouchStart(event) {
  if (pixi.world && pixi.world.onTouchStart) {
    pixi.world.onTouchStart(event);
  }
}

function onTouchDrag(event) {
  if (pixi.world && pixi.world.onTouchDrag) {
    pixi.world.onTouchDrag(event);
  }
}

function onTouchEnd(event) {
  if (pixi.world && pixi.world.onTouchEnd) {
    pixi.world.onTouchEnd(event);
  }
  var w = pixi.renderer.width;
  var h = pixi.renderer.height;

  var x = Math.round(100 * event.x / w) / 100;
  var y = Math.round(100 * event.y / h) / 100;
  if (prevKey === '1') {
    output += "\n         {\n           \"x\" : " + x + ", \"y\" : " + y + ",\n           \"type\" :  Constants.CollectableTypes.KEY,\n         },\n         ";
  } else if (prevKey === '2') {
    output += "\n         { \"x\": " + x + ", \"y\": " + y + ", type: Constants.CollectableTypes.STAR },";
  } else if (prevKey === '3') {
    output += "\n             {\"x\" : " + x + ", \"y\" : " + y + ", \"edgeProps\" : [Constants.WallTypes.]},";
  } else if (prevKey === '4') {
    output += "\n             {\"x\" : " + x + ", \"y\" : " + y + "},";
  } else if (prevKey === '5') {
    output += "\n             {\"x\" : " + x + ", \"y\" : " + y + ", \"edgeProps\" : [Constants.WallTypes.SOLID]},";
  } else if (prevKey === '6') {
    output += "\n             {\"x\" : " + x + ", \"y\" : " + y + ", \"edgeProps\" : [Constants.WallTypes.SPIKE]},";
  } else if (prevKey === '7') {
    output += "\n             {\"x\" : " + x + ", \"y\" : " + y + ", \"edgeProps\" : [Constants.WallTypes.BOUNCY]},";
  }
}

// ========== ACTUAL CODE ==================

// for some reason the viewport width isn't detected until a little later

function initializeGame() {
  // only start the game when the page has loaded
  window.addEventListener("load", function () {
    initializeGameWithViewport();
  });
}

function initializeGameWithViewport() {
  initializePixi();

  // Start animating
  requestAnimationFrame(animate);

  var container = new PIXI.Container();
  var background = new Background();
  container.addChild(background);
  container.addChild(pixi.world.bg);
  container.addChild(pixi.world.stage);
  var ui = container.addChild(new UI());
  var prevTime = 0;

  function animate(time) {
    var timeUnits = (time - prevTime) / Constants.TIME_UNIT;
    pixi.world.animationFrame(timeUnits);
    background.animationFrame(timeUnits);
    ui.animationFrame(timeUnits);

    // Render our container
    pixi.renderer.render(container);
    prevTime = time;

    // for testing lag
    // setTimeout(() => requestAnimationFrame(animate), Math.ceil(Math.random() * 100))
    requestAnimationFrame(animate);
  }
}

initializeGame();