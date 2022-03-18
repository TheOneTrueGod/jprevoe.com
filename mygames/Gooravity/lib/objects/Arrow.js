"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ARROW_DEACTIVATED = false;
var ARROW_ACTIVATED = true;

var Arrow = function (_Collectable) {
  _inherits(Arrow, _Collectable);

  function Arrow(triggerPoint /*PIXI.Point*/
  , targetPoint /*PIXI.Point*/
  ) /*number*/
  {
    var isActive = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var rotation = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

    _classCallCheck(this, Arrow);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Arrow).call(this, triggerPoint));

    _this.state = ARROW_DEACTIVATED;
    _this.triggerPoint = triggerPoint;
    _this.targetPoint = targetPoint;
    _this.isActive = isActive;
    _this.rotation = rotation;

    _this.position = _this.triggerPoint;

    _this._graphic = new PIXI.Sprite();
    _this._graphic.texture = Textures.arrowTexture;
    _this._graphic.anchor.set(0.5, 2);
    _this._graphic.rotation = _this.rotation;
    _this._graphic.visible = _this.state;

    _this._graphic.scale.x = Constants.SCALE_X;
    _this._graphic.scale.y = Constants.SCALE_Y;

    // movement controls
    _this.moveMagnitude = 10 * Constants.LINEARSCALE;
    _this.moveMagnitudeX = Math.sin(_this.rotation) * _this.moveMagnitude;
    _this.moveMagnitudeY = Math.cos(_this.rotation) * _this.moveMagnitude;
    _this.moveSpeed = 20;
    _this.currTime = 0;

    if (isActive) {
      _this.activateArrow();
    }
    return _this;
  }

  _createClass(Arrow, [{
    key: "activateArrow",
    value: function activateArrow() {
      this.state = ARROW_ACTIVATED;
      this.position = this.targetPoint;
      this.getSprite();
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      this._graphic.position = new PIXI.Point(this.position.x, this.position.y);
      this._graphic.visible = this.state;
      return this._graphic;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return 3 * Constants.ARROW_SIZE + Constants.CHARACTER_SIZE / 2;
    }
  }, {
    key: "animationFrame",
    value: function animationFrame(timeUnits) {
      if (this.state === ARROW_ACTIVATED) {
        // do some animations
        this.currTime = (this.currTime + timeUnits / this.moveSpeed) % (2 * Math.PI);
        var movement = -Math.abs(Math.sin(this.currTime));
        this._graphic.position.x = this.position.x - movement * this.moveMagnitudeX;
        this._graphic.position.y = this.position.y + movement * this.moveMagnitudeY;
      }
    }
  }, {
    key: "doTouchEffects",
    value: function doTouchEffects(world) {
      if (this.state === ARROW_DEACTIVATED) {
        this.activateArrow();
      } else {
        this.removeSelf(world);
      }
      // Events.dispatch(Events.ARROW);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Arrow(this.triggerPoint, this.targetPoint, this.isActive);
    }
  }]);

  return Arrow;
}(Collectable);