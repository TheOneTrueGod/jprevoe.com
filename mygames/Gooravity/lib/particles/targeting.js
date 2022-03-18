"use strict";

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
    _this._dragSource = null;
    _this._dragEnd = null;
    _this._circle = new PIXI.Graphics();
    _this.addChild(_this._line);

    _this._trace = new GravityTrace();
    _this._targeting = new TargetingTrace();
    _this.addChild(_this._trace);
    _this.addChild(_this._targeting);
    return _this;
  }

  _createClass(Targeting, [{
    key: "animationFrame",
    value: function animationFrame(source) {
      // this._line.clear();
      // if (this._end && this._source) {
      //   this._line.beginFill(0xFF3300);
      //   this._line.lineStyle(3, 0xffd900, 1);
      //   this._line.moveTo(this._source.x , this._source.y);
      //   this._line.lineTo(this._end.x, this._end.y);
      //   this._line.endFill();
      // }
      if (this._end && this._dragEnd && pixi.world.state == States.PLAYERTURN) {
        this._trace.visible = true;
        this._trace.animationFrame(source.sprite.position, this._end);
      } else {
        this._trace.visible = false;
      }

      if (this._dragSource && pixi.world.state == States.PLAYERTURN) {
        this._targeting.visible = true;
        this._targeting.animationFrame(this._dragSource, this._dragEnd);
      } else {
        this._targeting.visible = false;
      }
    }
  }, {
    key: "getTarget",
    value: function getTarget() {
      return this._end;
    }
  }, {
    key: "start",
    value: function start(source, target) {
      this._dragSource = target;
      this._end = null;
    }
  }, {
    key: "drag",
    value: function drag(source, target) {
      if (this._dragSource && source && target) {
        var dsx = this._dragSource.x;
        var dsy = this._dragSource.y;
        var x = target.x;
        var y = target.y;
        var sx = source.sprite.x;
        var sy = source.sprite.y;
        var a = x - dsx;
        var b = y - dsy;
        var maxX = Math.abs(a) / pixi.renderer.width;
        var maxY = Math.abs(b) / pixi.renderer.height;
        if (Math.sqrt(a * a + b * b) < Constants.POINTER_RADIUS) {
          this._dragEnd = null;
          this._end = null;
        } else {
          this._end = new PIXI.Point(sx + 30 * Math.pow(maxX, 1.2) * (dsx - x), sy + 30 * Math.pow(maxY, 1.2) * (dsy - y));
          this._dragEnd = target;
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this._dragSource = null;
      this._dragEnd = null;
      this._end = null;
    }
  }]);

  return Targeting;
}(PIXI.Container);

var TargetingTrace = function (_PIXI$Container2) {
  _inherits(TargetingTrace, _PIXI$Container2);

  function TargetingTrace() {
    _classCallCheck(this, TargetingTrace);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TargetingTrace).call(this));

    _this2.screenBounds = new PIXI.Rectangle(-300, -300, pixi.renderer.width + 600, pixi.renderer.height + 600);
    _this2.targeter = new PIXI.Graphics();
    _this2.addChild(_this2.targeter);
    return _this2;
  }

  _createClass(TargetingTrace, [{
    key: "animationFrame",
    value: function animationFrame(start, end) {
      this.visible = true;
      this.targeter.clear();
      if (end) {
        this.targeter.lineStyle(3, 0xFFFFFF, 0.5);
        this.targeter.moveTo(0, 0);
        this.targeter.lineTo(end.x - start.x, end.y - start.y);
      }
      this.targeter.x = start.x;
      this.targeter.y = start.y;
      this.targeter.lineStyle(2, 0xFFFFFF, 0.5); //(thickness, color)
      this.targeter.drawCircle(0, 0, Constants.POINTER_RADIUS); //(x,y,radius)
      this.targeter.endFill();
      this.targeter.beginFill(0xFFFFFF, 0.2);
      this.targeter.drawCircle(0, 0, Constants.POINTER_RADIUS - 1);
      this.targeter.endFill();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.visible = false;
    }
  }]);

  return TargetingTrace;
}(PIXI.Container);

var GravityTrace = function (_PIXI$Container3) {
  _inherits(GravityTrace, _PIXI$Container3);

  function GravityTrace() {
    _classCallCheck(this, GravityTrace);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(GravityTrace).call(this));

    var NUM_DOTS = 50;
    _this3.screenBounds = new PIXI.Rectangle(-300, -300, pixi.renderer.width + 600, pixi.renderer.height + 600);

    for (var i = 0; i < NUM_DOTS; i++) {
      _this3.addChild(new GravityParticle((NUM_DOTS - i) / NUM_DOTS));
    }
    _this3.offset = 0;
    return _this3;
  }

  _createClass(GravityTrace, [{
    key: "animationFrame",
    value: function animationFrame(position, target) {
      this.visible = true;

      // calculate the positions for each particle
      var TIME_INTERVAL = 3;
      var MIN_DOTS = 15;
      var dist = Math.pow(dist2(target, pixi.world.mainChar.sprite.position), 0.5);
      var numParticles = Math.max(Math.floor(dist / 15), 15);

      this.children.forEach(function (particle, index) {
        if (index < numParticles) {
          particle.visible = true;
          particle.alpha = 1 - index / numParticles;
          particle.updatePosition(position, target, TIME_INTERVAL * index);
        } else {
          particle.visible = false;
        }
      });
    }
  }, {
    key: "hide",
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

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(GravityParticle).call(this));

    _this4.texture = Textures.jumpTraceTexture;
    _this4.position = new PIXI.Point(50, 50);
    _this4.alpha = alpha / 2;
    _this4.visible = false;
    return _this4;
  }

  _createClass(GravityParticle, [{
    key: "updatePosition",
    value: function updatePosition(position, target, time) {
      this.position = new PIXI.Point(position.x, position.y);
      this.velocity = pixi.world.mainChar.calculateMoveVector(target);
      if (this.velocity.x === 0 && this.velocity.y === 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      // compensate, same as character
      this.velocity.x = this.velocity.x * Constants.SCALE_X;
      this.velocity.y = this.velocity.y * Constants.SCALE_Y;
      this.tickForward(time);
    }
  }, {
    key: "tickForward",
    value: function tickForward(time) {
      for (var i = 0; i < time; i++) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // move towards the other velocity
        var gravX = State.getGravX() * Constants.GRAVITY_STRENGTH * Constants.SCALE_X;
        var gravY = State.getGravY() * Constants.GRAVITY_STRENGTH * Constants.SCALE_Y;
        this.velocity.x += gravX;
        this.velocity.y += gravY;
      }
    }
  }]);

  return GravityParticle;
}(PIXI.Sprite);