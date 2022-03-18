"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collectable = function () {
  _createClass(Collectable, null, [{
    key: "getCollectable",


    // STATIC FUNCTIONS ===============
    value: function getCollectable(data) {
      switch (data.type) {
        case Constants.CollectableTypes.KEY:
          return new Key(Collectable.getPosition(data.x, data.y));
        case Constants.CollectableTypes.DOOR:
          return new ExitDoor(Collectable.getPosition(data.x, data.y), data.keys);
        case Constants.CollectableTypes.STAR:
          return new Star(Collectable.getPosition(data.x, data.y), data.keys);
        case Constants.TutorialTypes.ARROW:
          var triggerPoint = Collectable.getPosition(data.trigger[0], data.trigger[1]);
          var targetPoint = Collectable.getPosition(data.target[0], data.target[1]);
          return new Arrow(triggerPoint, targetPoint, data.isActive, data.rotation);
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(x, y) /*PIXI.Point*/{
      return new PIXI.Point(x * Constants.SCREEN_WIDTH, y * Constants.SCREEN_HEIGHT);
    }

    // NORMAL FUNCTIONS ===============

  }]);

  function Collectable(position) {
    _classCallCheck(this, Collectable);

    this.position = position;
  }

  _createClass(Collectable, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "removeSelf",
    value: function removeSelf(world) {
      world.stage.removeChild(this.getSprite());

      var index = world.level.collectables.indexOf(this);
      if (index > -1) {
        world.level.collectables.splice(index, 1);
      }
    }

    // should be implemented

  }, {
    key: "getSize",
    value: function getSize() {
      implement();
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      implement();
    }
  }, {
    key: "doTouchEffects",
    value: function doTouchEffects(world) {
      implement();
    }
  }, {
    key: "clone",
    value: function clone() {
      implement();
    }
  }, {
    key: "animationFrame",
    value: function animationFrame() {} // optional to implement

  }]);

  return Collectable;
}();