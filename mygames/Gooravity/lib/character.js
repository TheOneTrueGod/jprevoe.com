"use strict";

function Character(position) {
  var sprite = new PIXI.Sprite(Textures.bunnyTexture);
  sprite.scale.x = Constants.SCALE_X;
  sprite.scale.y = Constants.SCALE_Y;

  var maxSpeed = 10;

  var maxDistance = pixi.renderer.height / 2;
  var parabolicMinVXBounding = 2;
  var maxParabolicMoveDistance = 999; //13;
  var minDistance = 5;

  // the amount that will be skewed towards overtime
  var targetSquish = 0;
  var targetSkew = 0;
  // the rate at which we can squish/skew
  var squishRate = 0.2;
  var skewRate = 0.2;
  var JUMP_STAR_RATE = 2;
  var MAX_NUM_BOUNCES = 10;

  // Set the anchor in the center of our sprite
  sprite.anchor.set(0.5);

  // Position our bunny in the center of the renderer
  sprite.position.x = position.x;
  sprite.position.y = position.y;

  sprite.interactive = true;

  var moving = false;
  var vx = 0;
  var vy = 0;
  var gravAccelX = 0;
  var gravAccelY = 0;
  var jumpStarTimer = 0;
  var dirtBounces = 0;
  var bouncyBounces = 0;

  function createCorpse(world, angle) {
    Events.dispatch(Events.DIED);
    for (var i = 0; i < Textures.corpseTextures.length; i++) {
      var corpse = new PIXI.Sprite(Textures.corpseTextures[i]);
      corpse.position.x = sprite.position.x + (Math.random() - 0.5) * 20;
      corpse.position.y = sprite.position.y + (Math.random() - 0.5) * 20;
      corpse.scale.x = Constants.SCALE_X;
      corpse.scale.y = Constants.SCALE_Y;
      corpse.rotation = sprite.rotation;
      corpse.tint = 0xAAAAAA;

      corpse.anchor.set(0.5);

      var randSpeed = Math.random() * 1 + 1;
      corpse.moveSpeed = randSpeed;

      var offsetAng = (Math.random() - 0.5) * Math.PI / 8;
      corpse.moveAng = offsetAng + angle;
      corpse.spinMultiplier = Math.random() * 0.2 + 0.2 - 0.2;

      world.addCorpse(corpse);
    }
  };

  var character = {
    addToStage: function addToStage(stage) {
      stage.addChild(sprite);
    },
    setPosition: function setPosition(position) {
      sprite.position.x = position.x;
      sprite.position.y = position.y;
    },
    calculateAngle: function calculateAngle(target) {
      return Math.atan2(target.y - sprite.position.y, target.x - sprite.position.x);
    },
    setAngle: function setAngle(angle) {
      sprite.rotation = angle;
    },
    calculateMoveVector: function calculateMoveVector(target) {
      var targetAng = character.calculateAngle(target);
      var dx = target.x - sprite.position.x;
      var dy = target.y - sprite.position.y;
      var moveDistance = Math.max(minDistance, Math.min(maxDistance, Math.sqrt(dx * dx + dy * dy)));
      var moveSpeed = moveDistance / maxDistance * Constants.CHAR_JUMP_STRENGTH;
      return new PIXI.Point(Math.cos(targetAng) * moveSpeed, Math.sin(targetAng) * moveSpeed);
    },
    calculateMoveVector2: function calculateMoveVector2(target) {
      // Rotate world so calculations are doable in regular gravity.
      var dist = Math.sqrt(Math.pow(target.x - sprite.position.x, 2) + Math.pow(sprite.position.y - target.y, 2));

      var targAng = Math.atan2(target.y - sprite.position.y, target.x - sprite.position.x);
      var gravAng = Math.atan2(State.getGravY(), State.getGravX()) - Math.PI / 2;

      var ang = targAng - gravAng;

      var dx = Math.cos(ang) * dist / Constants.SCALE_X;
      var dy = Math.sin(ang) * -dist / Constants.SCALE_Y; // y is flipped in programmer land
      var a = -Constants.GRAVITY_STRENGTH;

      var vy = Math.sqrt(-2 * a * dy);

      var time_to_apex = -vy / a;

      var vx = 0;
      if (time_to_apex > 0) {
        vx = dx / time_to_apex;
      }

      /*
      Experiment with bounding the controls
      if (
        vx > 0 && vx < Math.max(Math.abs(vy) / 2, parabolicMinVXBounding) ||
        vx < 0 && vx > Math.min(-Math.abs(vy) / 2, -parabolicMinVXBounding)
      ) {
        console.log(vy);
        vy = Math.min(-Math.abs(vx / 2), vy);
        console.log(vy);
      }*/

      var moveDist = Math.min(Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2)), maxParabolicMoveDistance);

      var moveAng = Math.atan2(vy, vx);
      moveAng -= gravAng;

      return new PIXI.Point(Math.cos(moveAng) * moveDist, -Math.sin(moveAng) * moveDist);
    },
    setTarget: function setTarget(world, target) {
      if (target) {
        var v = character.calculateMoveVector(target);
        // add a minimum plus to compensate for gravity
        vx = v.x * Constants.SCALE_X;
        vy = v.y * Constants.SCALE_Y;
        gravAccelX = State.getGravX() * Constants.GRAVITY_STRENGTH * Constants.SCALE_X;
        gravAccelY = State.getGravY() * Constants.GRAVITY_STRENGTH * Constants.SCALE_Y;
        //sprite.rotation = Math.atan2(vy, vx) + Math.PI / 2;
      }
    },
    resetPosition: function resetPosition(x, y, angle) {
      sprite.rotation = angle;
      sprite.position.x = x;
      sprite.position.y = y;
      moving = false;
    },
    animationFrame: function animationFrame(world, deathCallback, timeUnits) {
      if (moving) {
        var currPos = sprite.position;
        if (jumpStarTimer++ >= JUMP_STAR_RATE) {
          Particle.createJumpStar(world, currPos, Math.atan2(vy, vx));
          jumpStarTimer = 0;
        }

        // adjust to the top of the bunny
        var nextPos = new PIXI.Point(currPos.x + vx * timeUnits, currPos.y + vy * timeUnits);
        vx += gravAccelX * timeUnits;
        vy += gravAccelY * timeUnits;
        var targetAng = Math.atan2(vy, vx);
        sprite.rotation = targetAng + Math.PI / 2;

        var wallCollision = checkForWallCollisions(currPos, nextPos, world.level.walls);
        if (wallCollision !== null) {
          var wallType = getWallType(wallCollision[0]);
          var wallAngle = Math.atan2(wallCollision[0].y - wallCollision[1].y, wallCollision[0].x - wallCollision[1].x);
          var intercept = wallCollision[2];
          // float a little above the ground to prevent next jump from missing intersection
          intercept.x -= Math.sin(wallAngle) * 10 * Constants.SCALE_X;
          intercept.y += Math.cos(wallAngle) * 10 * Constants.SCALE_Y;
          if (wallType === Constants.WallTypes.STICKY) {
            Events.dispatch(Events.HIT_STICKY);
            this.setMoving(false);

            var gravAngle = wallAngle - Math.PI / 2;
            if (Constants.POSSIBLE_GRAV_ANGLES !== 0) {
              // force it to only take one of N values
              gravAngle = Math.round(gravAngle / (Math.PI * 2) * Constants.POSSIBLE_GRAV_ANGLES);
              gravAngle *= Math.PI * 2 / Constants.POSSIBLE_GRAV_ANGLES;
            }
            State.setGravity(gravAngle);
            sprite.rotation = gravAngle - Math.PI / 2;
            if (intercept) {
              sprite.position = intercept;
            }

            Particle.createLandEffect(world, sprite.position, gravAngle);
          } else if (wallType === Constants.WallTypes.SPIKE) {
            Events.dispatch(Events.HIT_SPIKES);
            if (intercept) {
              sprite.position = intercept;
            }
            createCorpse(world, Math.atan2(vy, vx));
            this.onCharacterDeath(deathCallback);
          } else if (wallType === Constants.WallTypes.BOUNCY) {
            if (bouncyBounces >= MAX_NUM_BOUNCES) {
              createCorpse(world, Math.atan2(vy, vx));
              this.onCharacterDeath(deathCallback);
              return;
            }
            Events.dispatch(Events.HIT_BOUNCY);
            var incAngle = Math.atan2(vy, vx);
            var platformNormal = wallAngle - Math.PI / 2;
            var newAngle = 2 * platformNormal - Math.PI - incAngle;
            var mag = 0.95 * Math.hypot(vx, vy);
            vx = Math.cos(newAngle) * mag;
            vy = Math.sin(newAngle) * mag;
            bouncyBounces++;
          } else if (wallType === Constants.WallTypes.SOLID) {
            if (dirtBounces >= MAX_NUM_BOUNCES) {
              createCorpse(world, Math.atan2(vy, vx));
              this.onCharacterDeath(deathCallback);
              return;
            }
            var _incAngle = Math.atan2(vy, vx);
            var _platformNormal = wallAngle - Math.PI / 2;
            var _newAngle = 2 * _platformNormal - Math.PI - _incAngle;
            var _mag = 0.1 * Math.hypot(vx, vy);
            vx = Math.cos(_newAngle) * _mag;
            vy = Math.sin(_newAngle) * _mag;
            dirtBounces++;
          }
          if (wallType !== Constants.WallTypes.SOLID) {
            dirtBounces = 0;
          }
          if (wallType !== Constants.WallTypes.BOUNCY) {
            bouncyBounces = 0;
          }
        } else {
          sprite.position = nextPos;
        }

        var touchedCollectable = checkForCollectableCollisions(world.level.collectables);
        if (touchedCollectable) {
          touchedCollectable.doTouchEffects(world);
        }

        if (sprite.position.x <= 0 || sprite.position.y <= 0 || sprite.position.x >= pixi.renderer.width || sprite.position.y >= pixi.renderer.height) {
          createCorpse(world, Math.atan2(-vy, -vx));
          this.onCharacterDeath(deathCallback);
        }
      }
    },
    onCharacterDeath: function onCharacterDeath(deathCallback) {
      dirtBounces = 0;
      bouncyBounces = 0;
      deathCallback();
    },
    onTouchStart: function onTouchStart(event) {
      Events.dispatch(Events.JUMP_AIM);
      // squish character
      sprite.anchor = new PIXI.Point(0.5, 0);
      sprite.scale = new PIXI.Point(1 * Constants.SCALE_X, 0.5 * Constants.SCALE_Y);
      sprite.anchor = new PIXI.Point(0.5, 0.5);
      // eyes look
    },
    onTouchDrag: function onTouchDrag(event) {
      // skew towards the line
    },
    onTouchEnd: function onTouchEnd(target) {
      sprite.scale = new PIXI.Point(1 * Constants.SCALE_X, 1 * Constants.SCALE_Y);
      // unsquish character
    },
    shouldJump: function shouldJump() {
      return vx !== 0 || vy !== 0;
    },
    setMoving: function setMoving(val) {
      moving = val;
    },
    isMoving: function isMoving() {
      return moving;
    }
  };
  character.sprite = sprite;

  function checkForWallCollisions(currPos, nextPos, walls) {
    var collided = null;
    var closestDistance = null;
    walls.forEach(function (wall) {
      var poly = wall.getPoly();
      for (var i = 0; i < poly.length; i++) {
        var nextVertex = poly[(i + 1) % poly.length];
        if (isIntersect(currPos, nextPos, poly[i], nextVertex)) {
          var intercept = get2DLineIntercept(currPos, nextPos, poly[i], nextVertex) || currPos;
          var distance2 = dist2(currPos, intercept);
          if (!closestDistance || distance2 < closestDistance) {
            closestDistance = distance2;
            collided = [poly[i], nextVertex, intercept];
          }
        }
      }
    });
    return collided;
  }

  function checkForCollectableCollisions(collectables) {
    var collided = null;
    collectables.forEach(function (collectable) {
      if (dist2(collectable.getPosition(), character.sprite.position) <= sqr(collectable.getSize())) {
        collided = collectable;
        return;
      }
    });
    return collided;
  }

  return character;
}