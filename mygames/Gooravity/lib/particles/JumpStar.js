"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JumpStar = function (_Particle) {
  _inherits(JumpStar, _Particle);

  function JumpStar(position, angle) {
    _classCallCheck(this, JumpStar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JumpStar).call(this));

    _this._sprite = new PIXI.Sprite();
    _this._sprite.texture = Textures.jumpStarTexture;
    _this._sprite.position.x = position.x;
    _this._sprite.position.y = position.y;
    _this._sprite.anchor.set(0.5);

    var scale = Math.random() * 0.4 + 0.3;
    _this._sprite.scale.x = scale * Constants.SCALE_X;
    _this._sprite.scale.y = scale * Constants.SCALE_Y;
    _this._sprite.rotation = Math.random() * Math.PI * 2;

    _this._sprite.alpha = 0.8;

    var moveAng = angle;
    if (Math.random() > 0.5) {
      moveAng += Math.PI / 2 + Math.random() * Math.PI / 8;
    } else {
      moveAng -= Math.PI / 2 + Math.random() * Math.PI / 8;
    }

    var speedMult = Math.random() * 0.4 + 0.2;
    _this.speed = {};
    _this.speed.x = Math.cos(moveAng) * speedMult;
    _this.speed.y = Math.sin(moveAng) * speedMult;
    return _this;
  }

  _createClass(JumpStar, [{
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
    value: function animationFrame() {
      this._sprite.position.x += this.speed.x * Constants.SCALE_X;
      this._sprite.position.y += this.speed.y * Constants.SCALE_Y;

      //this.speed.x += Math.cos(State.getGravity()) * 0.025;
      //this.speed.y += Math.sin(State.getGravity()) * 0.025;
      this._sprite.rotation += 0.2;
      this._sprite.alpha -= 0.02;
    }
  }]);

  return JumpStar;
}(Particle);