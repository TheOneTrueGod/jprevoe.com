"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExitDoor = function (_Collectable) {
  _inherits(ExitDoor, _Collectable);

  function ExitDoor(position, numKeys) {
    _classCallCheck(this, ExitDoor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExitDoor).call(this, position));

    _this.OPEN_COLOR = 0xFF00F0;
    _this.CLOSED_COLOR = 0xFFFFF0;

    _this._numKeys = numKeys;

    _this._openSprite = new PIXI.Sprite(Textures.doorOpenTexture);
    _this._closedSprite = new PIXI.Sprite(Textures.doorClosedTexture);
    _this._closedSprite.visible = false;

    _this._openSprite.anchor.set(0.5);
    _this._closedSprite.anchor.set(0.5);

    _this._openSprite.scale.x = Constants.SCALE_X;
    _this._openSprite.scale.y = Constants.SCALE_Y;

    _this._closedSprite.scale.x = Constants.SCALE_X;
    _this._closedSprite.scale.y = Constants.SCALE_Y;

    _this._graphic = new PIXI.Graphics();
    _this._graphic.addChild(_this._openSprite);
    _this._graphic.addChild(_this._closedSprite);
    _this._light = new PIXI.Graphics();
    _this.update(_this._isOpen());

    // add a glow effect
    var BLUR_AMOUNT = 70;
    _this._filter = new PIXI.filters.BlurFilter();
    _this._filter.blur = BLUR_AMOUNT;
    _this._light.beginFill(0xFFFFFF);
    _this._light.drawCircle(_this._graphic.position.x, _this._graphic.position.y, 20);
    _this._light.filters = [_this._filter];
    _this._light.filterArea = new PIXI.Rectangle(_this._graphic.position.x - BLUR_AMOUNT, _this._graphic.position.y - BLUR_AMOUNT, BLUR_AMOUNT * 2, BLUR_AMOUNT * 2);
    _this._light.visible = false;

    _this._container = new PIXI.Container();
    _this._container.addChild(_this._graphic);
    _this._container.addChild(_this._light);

    // listen to the number of keys
    Events.on(Events.KEY_COLLECT, function () {
      _this.update(_this._isOpen());
    });
    return _this;
  }

  _createClass(ExitDoor, [{
    key: "_isOpen",
    value: function _isOpen() {
      return this._numKeys <= LevelState.getKeys();
    }
  }, {
    key: "update",
    value: function update(isOpen) {
      var position = this.getPosition();

      this._openSprite.visible = isOpen;
      this._closedSprite.visible = !isOpen;

      this._graphic.position.x = position.x;
      this._graphic.position.y = position.y;

      this._light.visible = isOpen;
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      return this._container;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return Constants.DOOR_SIZE + Constants.CHARACTER_SIZE / 2;
    }
  }, {
    key: "doTouchEffects",
    value: function doTouchEffects(world) {
      if (this._isOpen()) {
        LevelState.setLevelComplete();
        Events.dispatch(Events.DOOR_HIT);
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      return new ExitDoor(this.position, this._numKeys);
    }
  }]);

  return ExitDoor;
}(Collectable);