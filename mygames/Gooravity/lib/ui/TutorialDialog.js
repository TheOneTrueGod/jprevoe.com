"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TutorialDialog = function (_PIXI$Container) {
  _inherits(TutorialDialog, _PIXI$Container);

  function TutorialDialog() {
    _classCallCheck(this, TutorialDialog);

    var scale = Math.min(Constants.SCALE_X, Constants.SCALE_Y);
    var PADDING = 40 * scale;
    var height = 340 * scale;
    var width = 300 * scale;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TutorialDialog).call(this));

    _this.width = width;
    _this.height = height;

    _this.sceneWidth = width - PADDING;
    _this.sceneHeight = height / 2;
    _this.videoWidth = _this.sceneWidth;
    // use the videos resolution here...
    _this.videoHeight = _this.videoWidth * 322 / 588;

    _this.padding = PADDING;

    _this.position = new PIXI.Point(Constants.SCREEN_WIDTH / 2 - width / 2, Constants.SCREEN_HEIGHT / 2 - height / 2);

    // Background
    var background = new PIXI.Graphics();
    background.beginFill(0xFFFFFF, 1);
    background.drawRoundedRect(0, 0, width, height);
    _this.addChild(background);

    // Next Button
    var button = Geometry.Button(width / 2, height, 'CONTINUE', function () {
      //LevelState.resetLevel();
      //State.nextLevel();
      _this.visible = false;
      State.setUIOpen(false);
    });
    button.position.x -= button.width / 2;
    button.position.y -= button.height + PADDING;
    background.addChild(button);

    var video = document.createElement("video");
    video.preload = "auto";
    video.loop = true;
    video.oncanplay = addToStage;
    video.src = window.assetPath + '/videos/controls_tutorial.webm';
    var that = _this;
    function addToStage() {
      var texture = PIXI.Texture.fromVideo(video);
      that.videoSprite = new PIXI.Sprite(texture);
      that.videoSprite.width = that.videoWidth;
      that.videoSprite.height = that.videoHeight;
      that.videoSprite.position.x = (that.width - that.videoWidth) / 2;
      that.videoSprite.position.y = that.padding;
      that.addChild(that.videoSprite);
    }

    _this.visible = false;

    _this.frameOn = 0;
    return _this;
  }

  _createClass(TutorialDialog, [{
    key: "show",
    value: function show() {
      this.visible = true;
      State.setUIOpen(true);
    }
  }, {
    key: "createKeyScene",
    value: function createKeyScene() {
      var scene = new PIXI.Graphics();
      scene.beginFill(0x21263f, 1);
      scene.drawRoundedRect(0, 0, this.sceneWidth, this.sceneHeight);
      scene.position.x = (this.width - this.sceneWidth) / 2;
      scene.position.y = this.padding;

      this.charSprite = new PIXI.Sprite(Textures.bunnyTexture);
      this.charSprite.scale.x = Constants.SCALE_X;
      this.charSprite.scale.y = Constants.SCALE_Y;

      var widthPartition = this.sceneWidth / 10;

      this.charSprite.startPos = new PIXI.Point(widthPartition * 2, this.sceneHeight / 2);
      this.charSprite.endPos = new PIXI.Point(this.sceneWidth - widthPartition * 2, this.sceneHeight / 2);
      this.charSprite.position.x = this.charSprite.startPos.x;
      this.charSprite.position.y = this.charSprite.startPos.y;

      this.charSprite.anchor.set(0.5);

      function makePoint(x, y) {
        var point = new PIXI.Point(x, y);
        point.edgeProps = [Constants.WallTypes.SOLID];
        return point;
      }

      var wallTop = this.sceneHeight / 2 + this.charSprite.height / 2;
      var wallHeight = this.sceneHeight * 1 / 6;

      var wall = Geometry.Wall([makePoint(this.charSprite.startPos.x - widthPartition, wallTop), makePoint(this.charSprite.startPos.x + widthPartition, wallTop), makePoint(this.charSprite.startPos.x, wallTop + wallHeight)]);
      scene.addChild(wall);

      var wall = Geometry.Wall([makePoint(this.charSprite.endPos.x - widthPartition, wallTop), makePoint(this.charSprite.endPos.x + widthPartition, wallTop), makePoint(this.charSprite.endPos.x, wallTop + wallHeight)]);
      scene.addChild(wall);

      this.keySprite = new PIXI.Sprite(Textures.keyTexture);
      this.keySprite.scale.x = Constants.SCALE_X;
      this.keySprite.scale.y = Constants.SCALE_Y;
      this.keySprite.position.x = this.charSprite.endPos.x;
      this.keySprite.position.y = this.charSprite.endPos.y;
      this.keySprite.anchor.set(0.5);

      this.tapSprite = new PIXI.Sprite(Textures.tapTutorialTexture);
      this.tapSprite.scale.x = Constants.SCALE_X * 0.5;
      this.tapSprite.scale.y = Constants.SCALE_Y * 0.5;
      this.tapSprite.endPos = new PIXI.Point(this.sceneWidth / 2, this.sceneHeight / 2 - this.sceneHeight / 3);
      this.tapSprite.position.x = this.tapSprite.endPos.x;
      this.tapSprite.position.y = this.tapSprite.endPos.y;
      this.tapSprite.anchor.set(0.5);

      scene.addChild(this.tapSprite);
      scene.addChild(this.keySprite);
      scene.addChild(this.charSprite);

      return scene;
    }
  }, {
    key: "createDoorScene",
    value: function createDoorScene() {}
  }, {
    key: "animationFrame",
    value: function animationFrame() {
      /*
        const TIME = 200;
        const TAP_START = 0.1;
        const MOVE_START = 0.25;
        const TAP_END = 0.4;
        const MOVE_END = 0.9;
        const MOVE_HEIGHT = this.sceneHeight / 3;
        this.frameOn += 1;
        if (this.frameOn > TIME) {
          this.frameOn = 0;
        }
         var pct = this.frameOn / TIME;
         if (pct < MOVE_START) {
          this.charSprite.position.x = this.charSprite.startPos.x;
          this.charSprite.position.y = this.charSprite.startPos.y;
        } else if (pct > MOVE_END) {
          this.charSprite.position.x = this.charSprite.endPos.x;
          this.charSprite.position.y = this.charSprite.endPos.y;
        } else {
          var movePct = (pct - MOVE_START) / (MOVE_END - MOVE_START);
          this.charSprite.position.x = this.charSprite.startPos.x + (this.charSprite.endPos.x - this.charSprite.startPos.x) * movePct;
          this.charSprite.position.y = this.charSprite.startPos.y - Math.sin(Math.PI * movePct) * MOVE_HEIGHT;
        }
         if (pct < MOVE_END - 0.05) {
          this.keySprite.visible = true;
        } else {
          this.keySprite.visible = false;
        }
         if (pct > TAP_START && pct < TAP_END) {
          this.tapSprite.visible = true;
          var rotatePct = (pct - TAP_START) / (TAP_END - TAP_START);
          rotatePct = 1 - Math.abs(.5 - rotatePct) / .5;
          this.tapSprite.rotation = rotatePct * Math.PI / 2;
        } else {
          this.tapSprite.visible = false;
        }
        */
    }
  }]);

  return TutorialDialog;
}(PIXI.Container);