"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dirt = function (_Particle) {
  _inherits(Dirt, _Particle);

  function Dirt(position, speed) {
    _classCallCheck(this, Dirt);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dirt).call(this));

    _this.speed = speed;
    _this._sprite = new PIXI.Sprite(Textures.dirtTexture);
    _this._sprite.position.x = position.x;
    _this._sprite.position.y = position.y;
    _this._sprite.anchor.set(0.5);
    _this._sprite.scale.x = 0.25 * Constants.SCALE_X;
    _this._sprite.scale.y = 0.25 * Constants.SCALE_Y;
    return _this;
  }

  _createClass(Dirt, [{
    key: "getSprite",
    value: function getSprite() {
      return this._sprite;
    }
  }, {
    key: "readyToDelete",
    value: function readyToDelete() {
      return this._sprite.alpha <= 0;
    }
  }, {
    key: "animationFrame",
    value: function animationFrame(timeUnits) {
      this._sprite.position.x += this.speed.x * Constants.SCALE_X * timeUnits;
      this._sprite.position.y += this.speed.y * Constants.SCALE_Y * timeUnits;

      this.speed.x += Math.cos(State.getGravity()) * 0.025 * timeUnits;
      this.speed.y += Math.sin(State.getGravity()) * 0.025 * timeUnits;
      this._sprite.alpha -= 0.03;
    }
  }]);

  return Dirt;
}(Particle);