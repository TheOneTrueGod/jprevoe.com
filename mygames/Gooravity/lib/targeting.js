'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_DISTANCE = 6000;

var Targeting = function (_PIXI$Container) {
  _inherits(Targeting, _PIXI$Container);

  function Targeting() {
    _classCallCheck(this, Targeting);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Targeting).call(this));

    _this._line = new PIXI.Graphics();
    _this._line.beginFill(0xFF3300);
    _this._line.lineStyle(10, 0xffd900, 1);
    _this._source = null;
    _this._circle = new PIXI.Graphics();
    _this.addChild(_this._line);

    _this._trace = new GravityTrace();
    _this.addChild(_this._trace);
    return _this;
  }

  _createClass(Targeting, [{
    key: 'animationFrame',
    value: function animationFrame(source) {
      // this._line.clear();
      // if (this._end && this._source) {
      //   this._line.beginFill(0xFF3300);
      //   this._line.lineStyle(3, 0xffd900, 1);
      //   this._line.moveTo(this._source.x , this._source.y);
      //   this._line.lineTo(this._end.x, this._end.y);
      //   this._line.endFill();
      // }

      if (this._end) {
        this._trace.animationFrame(source.position, this._end);
      }
    }
  }, {
    key: 'start',
    value: function start(source) {
      this._trace.visible = true;
    }
  }, {
    key: 'drag',
    value: function drag(end) {
      this._trace.visible = true;
      this._end = new PIXI.Point(end.x, end.y);;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._trace.visible = false;
      this._end = null;
    }
  }]);

  return Targeting;
}(PIXI.Container);

var GravityTrace = function (_PIXI$Container2) {
  _inherits(GravityTrace, _PIXI$Container2);

  function GravityTrace() {
    _classCallCheck(this, GravityTrace);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(GravityTrace).call(this));

    var NUM_DOTS = 15;
    _this2.screenBounds = new PIXI.Rectangle(-300, -300, pixi.renderer.width + 600, pixi.renderer.height + 600);

    for (var i = 0; i < NUM_DOTS; i++) {
      _this2.addChild(new GravityParticle((NUM_DOTS - i) / NUM_DOTS));
    }
    _this2.offset = 0;
    return _this2;
  }

  _createClass(GravityTrace, [{
    key: 'animationFrame',
    value: function animationFrame(position, target) {
      this.visible = true;

      // calculate the positions for each particle
      var TIME_INTERVAL = 3;
      this.children.forEach(function (particle, index) {
        particle.updatePosition(position, target, TIME_INTERVAL * index);
        // if (!this.screenBounds.contains(particle.position.x, particle.position.y)) {
        //   this.removeChild(particle);
        // }
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.visible = false;
    }
  }]);

  return GravityTrace;
}(PIXI.Container);

var GravityParticle = function (_PIXI$Sprite) {
  _inherits(GravityParticle, _PIXI$Sprite);

  function GravityParticle(alpha) {
    _classCallCheck(this, GravityParticle);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(GravityParticle).call(this));

    _this3.texture = new PIXI.Texture.fromImage(window.assetPath + '/textures/circle.png');
    _this3.position = new PIXI.Point(50, 50);
    _this3.alpha = alpha / 2;
    return _this3;
  }

  _createClass(GravityParticle, [{
    key: 'updatePosition',
    value: function updatePosition(position, target, time) {
      this.position = new PIXI.Point(position.x, position.y);
      this.velocity = pixi.world.mainChar.calculateMoveVector(target);
      this.tickForward(time);
    }
  }, {
    key: 'tickForward',
    value: function tickForward(time) {
      for (var i = 0; i < time; i++) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // move towards the other velocity
        var gravX = State.getGravX() * Constants.GRAVITY_STRENGTH / Constants.SCALE_X;
        var gravY = State.getGravY() * Constants.GRAVITY_STRENGTH / Constants.SCALE_Y;
        this.velocity.x += gravX;
        this.velocity.y += gravY;
      }
    }
  }]);

  return GravityParticle;
}(PIXI.Sprite);
