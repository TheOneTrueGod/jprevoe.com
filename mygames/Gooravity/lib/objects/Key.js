"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Key = function (_Collectable) {
  _inherits(Key, _Collectable);

  function Key(position) {
    _classCallCheck(this, Key);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Key).call(this, position));

    _this._graphic = new PIXI.Sprite();
    _this._graphic.texture = Textures.keyTexture;
    _this._graphic.scale.x = Constants.SCALE_X;
    _this._graphic.scale.y = Constants.SCALE_Y;
    _this._graphic.anchor.set(0.5, 0.5);
    _this._graphic.position = position;
    return _this;
  }

  _createClass(Key, [{
    key: "getSprite",
    value: function getSprite() {
      return this._graphic;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return Constants.KEY_SIZE + Constants.CHARACTER_SIZE / 2;
    }
  }, {
    key: "doTouchEffects",
    value: function doTouchEffects(world) {
      this.removeSelf(world);

      LevelState.addKey();
      Events.dispatch(Events.KEY_HIT);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Key(this.position);
    }
  }]);

  return Key;
}(Collectable);