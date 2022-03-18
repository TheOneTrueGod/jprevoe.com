'use strict';

function World() {

  // ========  INITIALIZE VARS  ==============
  var States = {
    LOADING: 'loading',
    MOVING: 'moving',
    PLAYERTURN: 'playerturn'
  };
  var levels = new Levels();

  function WorldState(world) {
    var state = {
      playerX: world.mainChar.sprite.position.x,
      playerY: world.mainChar.sprite.position.y,
      playerAngle: world.mainChar.sprite.rotation,
      gravityAngle: State.getGravity(),
      collectables: [],
      keysCollected: LevelState.getKeys(),
      starsCollected: LevelState.getStars()
    };
    world.level.collectables.forEach(function (item) {
      return state.collectables.push(item);
    });
    return state;
  }

  var world = {
    mainChar: new Character(new PIXI.Point(pixi.renderer.width / 2, pixi.renderer.height / 2)),
    target: new Targeting(),
    gravityAngle: Math.PI / 2,
    state: States.LOADING,
    worldStates: [],
    walls: [],
    corpses: [],
    particles: [],
    addCorpse: function addCorpse(corpse) {
      this.corpses.push(corpse);
      this.stage.addChild(corpse);
      if (this.corpses.length > 200) {
        this.corpses.splice(0, 1);
      }
    },
    addParticle: function addParticle(particle) {
      this.particles.push(particle);
      this.stage.addChild(particle.getSprite());
      if (this.particles.length > 1000) {
        this.particles.splice(0, 1);
      }
    },
    stage: new PIXI.Container(),
    bg: new PIXI.Container()
  };
  var levelCompleteFilter = new PIXI.filters.ShockwaveFilter();
  levelCompleteFilter.time = 3;
  world.stage.filters = [levelCompleteFilter];

  // ========  FUNCTIONS  ==============

  world.rotateWorld = function () {
    world.renderBackground();

    /*world.stage.rotation = Math.PI/2 - State.getGravity();
    world.stage.pivot = new PIXI.Point(
      world.mainChar.sprite.position.x,
      world.mainChar.sprite.position.y
    );
    world.stage.x = pixi.renderer.width/2;
    world.stage.y = pixi.renderer.height/2;*/
  };

  world.levelComplete = function () {
    if (LevelState.isLevelComplete()) {
      levelCompleteFilter.time = 0;
    }
  };

  world.updateLevel = function () {
    levelCompleteFilter.time = 3;
    world.loadLevel(State.getLevel());
  };

  world.loadLevel = function (level_num) {
    world.stage.removeChildren();
    world.level = levels.loadLevel(level_num);
    LevelState.setKeysNeeded(world.level.keysNeeded);
    LevelState.resetKeys(0);
    LevelState.resetDeaths();
    LevelState.resetMoves();
    LevelState.resetStars(0);
    State.resetGravity();
    world.corpses = [];

    // render the other objects in this level
    world.renderLevel();

    //const button = new Geometry.Button(100, 10, 'Undo', () => world.popState());
    //world.stage.addChild(button);

    world.worldStates = [];
    world.renderBackground();
    world.stage.addChild(world.target);
    world.mainChar.addToStage(world.stage);
    world.mainChar.setPosition(world.level.playerStart);
    world.mainChar.setMoving(false);
    world.mainChar.setAngle(0);
    //world.mainChar.setTarget(world, world.level.playerStart);
  };

  world.playerDeath = function () {
    LevelState.addDeath();
    world.popState();
  };

  world.loadState = function (worldState) {
    world.state = States.LOADING;
    LevelState.resetKeys(worldState.keysCollected);
    LevelState.resetStars(worldState.starsCollected);
    State.setGravity(worldState.gravityAngle);
    world.level.collectables = [];
    worldState.collectables.forEach(function (item) {
      return world.level.collectables.push(item);
    });
    world.renderLevel();
    world.mainChar.resetPosition(worldState.playerX, worldState.playerY, worldState.playerAngle);
    world.state = States.PLAYERTURN;
  };

  world.popState = function () {
    var state = world.worldStates.pop();
    if (state !== undefined) {
      world.loadState(state);
    }
  };

  world.saveNewState = function () {
    world.worldStates.push(new WorldState(world));
  };

  world.animationFrame = function (timeUnits) {
    if (LevelState.isLevelComplete() || State.isUIOpen()) {
      levelCompleteFilter.center = new PIXI.Point(world.mainChar.sprite.position.x / pixi.renderer.width, world.mainChar.sprite.position.y / pixi.renderer.height);
      levelCompleteFilter.time = levelCompleteFilter.time >= 3 ? 3 : levelCompleteFilter.time += 0.01 * timeUnits;
      // stop moving after the level is done
    } else {
      world.mainChar.animationFrame(world, world.playerDeath, timeUnits);
      world.target.animationFrame(world.mainChar);
      if (world.state == States.MOVING && !world.mainChar.isMoving()) {
        world.state = States.PLAYERTURN;
      }
      for (var i = 0; i < world.particles.length;) {
        world.particles[i].animationFrame(timeUnits);
        if (world.particles[i].readyToDelete()) {
          world.particles.splice(i, 1);
        } else {
          i++;
        }
      }
      for (var i = 0; i < world.corpses.length; i++) {
        var corpse = world.corpses[i];
        if (corpse.moveSpeed > 0.01) {
          corpse.position.x += Math.cos(corpse.moveAng) * corpse.moveSpeed * Constants.SCALE_X;
          corpse.position.y += Math.sin(corpse.moveAng) * corpse.moveSpeed * Constants.SCALE_Y;
          corpse.rotation += corpse.moveSpeed * corpse.spinMultiplier * Constants.LINEARSCALE;
          corpse.moveSpeed *= 0.96;
        }
      }
      world.level.collectables.forEach(function (collectable) {
        collectable.animationFrame(timeUnits);
      });
    }
  };

  world.renderBackground = function () {
    // world.bg.removeChildren();
    // arrowsSprite.height = pixi.renderer.height/4;
    // arrowsSprite.width = pixi.renderer.width/4;
    // arrowsSprite.rotation = State.getGravity() + Math.PI/2;
    // arrowsSprite.pivot = new PIXI.Point(
    //   arrowsSprite.width/2,
    //   arrowsSprite.height/2
    // );
    // arrowsSprite.x = pixi.renderer.width/2;
    // arrowsSprite.y = pixi.renderer.height/2;
    // world.bg.addChild(arrowsSprite);
  };

  world.renderLevel = function () {
    //world.stage.removeChildren();
    world.level.walls.forEach(function (wallData) {
      var sprite = wallData.getSprite();
      if (sprite.parent !== world.stage) {
        world.stage.addChild(wallData.getSprite());
      }
    });

    world.level.collectables.forEach(function (collData) {
      var sprite = collData.getSprite();
      if (sprite.parent !== world.stage) {
        world.stage.addChild(sprite);
      }
    });
    world.corpses.forEach(function (corpse) {
      if (corpse.parent !== world.stage) {
        world.stage.addChild(corpse);
      }
    });
  };

  world.getMouseTarget = function (event) {
    if (event.layerX && event.layerY) {
      return new PIXI.Point(event.layerX, event.layerY);
    } else if (event.changedTouches && event.changedTouches[0]) {
      event = event.changedTouches[0];
      return new PIXI.Point(event.clientX - pixi.renderer.view.offsetLeft, event.clientY - pixi.renderer.view.offsetTop);
    }
    return new PIXI.Point(0, 0);
  };

  world.onTouchStart = function (event) {
    var buttonPressed = false;
    if (!buttonPressed && world.state == States.PLAYERTURN) {
      var target = world.getMouseTarget(event);
      world.target.start(world.mainChar, target);
      world.mainChar.onTouchStart(target);
    }
  };

  world.onTouchDrag = function (event) {
    var buttonPressed = false;
    var target = world.getMouseTarget(event);
    world.target.drag(world.mainChar, target);
    if (!buttonPressed) {
      world.mainChar.onTouchDrag(target);
    }
  };

  world.onTouchEnd = function (event) {
    var buttonPressed = false;
    if (!buttonPressed && world.state == States.PLAYERTURN) {
      var target = world.getMouseTarget(event);
      world.mainChar.onTouchEnd(target);
      if (world.target.getTarget()) {
        world.mainChar.setTarget(world, world.target.getTarget());
        if (world.mainChar.shouldJump()) {
          Events.dispatch(Events.JUMP_START);
          world.saveNewState();
          world.state = States.MOVING;
          world.mainChar.setMoving(true);
          LevelState.addMove();
        }
      }
    }
    world.target.reset();
  };

  world.getHighestLevel = function() {
    return levels.getHighestLevel();
  }

  // ========  LISTENERS  ==============

  // listen to level changes and update accordingly
  Events.on(Events.LEVEL_COMPLETE, world.levelComplete);
  Events.on(Events.LEVEL_CHANGED, world.updateLevel);
  Events.on(Events.GRAVITY_CHANGED, world.rotateWorld);

  // ========  INITIALIZE  ==============

  world.state = States.MOVING;
  world.loadLevel(0);

  return world;
}