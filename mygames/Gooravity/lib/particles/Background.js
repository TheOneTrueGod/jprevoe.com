"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_PIXI$ParticleContain) {
  _inherits(Background, _PIXI$ParticleContain);

  function Background() {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Background).call(this));

    _this.acceleration = 0.1;
    _this.velocity = 3;
    _this.screenBounds = new PIXI.Rectangle(-300, -300, pixi.renderer.width + 600, pixi.renderer.height + 600);

    // add a bunch of stars randomly on the screenBounds
    for (var i = 0; i < 20; i++) {
      _this.addStar(true);
    }
    return _this;
  }

  _createClass(Background, [{
    key: "animationFrame",
    value: function animationFrame(timeUnits) {
      var _this2 = this;

      if (!LevelState.isLevelComplete()) {
        this.children.forEach(function (sprite) {
          // move towards the other velocity
          var gravX = State.getGravX() * _this2.velocity * sprite.scale.x;
          var gravY = State.getGravY() * _this2.velocity * sprite.scale.y;

          sprite.velocity.x = (gravX + sprite.velocity.x * 9) / 10;
          sprite.velocity.y = (gravY + sprite.velocity.y * 9) / 10;

          sprite.position.x += sprite.velocity.x * timeUnits;
          sprite.position.y += sprite.velocity.y * timeUnits;
          if (!_this2.screenBounds.contains(sprite.position.x, sprite.position.y)) {
            _this2.removeChild(sprite);
          }
        });
        if (Math.random() < 0.1) {
          this.addStar();
        }
      }
    }
  }, {
    key: "addStar",
    value: function addStar(onscreen) {
      var line = new PIXI.Sprite();
      line.texture = Textures.backgroundStarTexture;

      var gravX = State.getGravX() * this.velocity;
      var gravY = State.getGravY() * this.velocity;

      if (onscreen) {
        line.position = new PIXI.Point(Math.ceil(Math.random() * pixi.renderer.width), Math.ceil(Math.random() * pixi.renderer.height));
      } else {
        if (Math.abs(gravX) > Math.abs(gravY)) {
          if (gravY > 0) {
            line.position = new PIXI.Point(-100, Math.ceil(Math.random() * pixi.renderer.height));
          } else {
            line.position = new PIXI.Point(pixi.renderer.width + 100, Math.ceil(Math.random() * pixi.renderer.height));
          }
        } else {
          if (gravY > 0) {
            line.position = new PIXI.Point(Math.ceil(Math.random() * pixi.renderer.width), -100);
          } else {
            line.position = new PIXI.Point(Math.ceil(Math.random() * pixi.renderer.width), pixi.renderer.height + 100);
          }
        }
      }

      var minScale = 5;
      var maxScale = 10;
      var scale = Math.ceil(Math.random() * (maxScale - minScale)) + minScale;
      line.scale.set(scale / maxScale);

      line.velocity = new PIXI.Point(gravX, gravY);
      this.addChild(line);
    }
  }]);

  return Background;
}(PIXI.ParticleContainer);