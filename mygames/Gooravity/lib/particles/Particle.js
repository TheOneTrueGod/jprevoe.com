"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle() {
    _classCallCheck(this, Particle);
  }

  _createClass(Particle, [{
    key: "getSprite",

    // should be implemented
    value: function getSprite() {
      implement();
    }
  }, {
    key: "animationFrame",
    value: function animationFrame() {
      implement();
    }
  }, {
    key: "readyToDelete",
    value: function readyToDelete() {
      implement();
    }
  }], [{
    key: "createLandEffect",
    value: function createLandEffect(world, position, angle) {
      var IMPACT_DEPTH = 6;
      var DIRT_ANGLE = Math.PI / 3.0;
      var PARTICLES_PER_SIDE = 2;
      var DIRT_FORCE = 1.1;
      for (var i = -PARTICLES_PER_SIDE; i <= PARTICLES_PER_SIDE; i++) {
        if (i !== 0) {
          var moveAng = angle + Math.PI + DIRT_ANGLE / PARTICLES_PER_SIDE * i;
          world.addParticle(new Dirt(new PIXI.Point(position.x + Math.cos(angle) * IMPACT_DEPTH, position.y + Math.sin(angle) * IMPACT_DEPTH), new PIXI.Point(Math.cos(moveAng) * DIRT_FORCE, Math.sin(moveAng) * DIRT_FORCE)));
        }
      }
    }
  }, {
    key: "createJumpStar",
    value: function createJumpStar(world, position, angle) {
      world.addParticle(new JumpStar(position, angle));
    }
  }]);

  return Particle;
}();