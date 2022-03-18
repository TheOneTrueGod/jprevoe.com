'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LevelCompleteDialog = function (_PIXI$Container) {
  _inherits(LevelCompleteDialog, _PIXI$Container);

  function LevelCompleteDialog() {
    _classCallCheck(this, LevelCompleteDialog);

    var scale = Math.min(Constants.SCALE_X, Constants.SCALE_Y);
    var PADDING = 40 * scale;
    var TITLE_PADDING = 30 * scale;
    var SUBHEADER_PADDING = 12 * scale;
    var SECTION_PADDING = 20 * scale;
    var STAR_PADDING = 5;
    var height = 340 * scale;
    var width = 300 * scale;
    var TITLE_SIZE = Math.floor(30 * scale);
    var SUBTITLE_SIZE = Math.floor(18 * scale);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LevelCompleteDialog).call(this));

    _this.width = width;
    _this.height = height;
    _this.textAnimationPct = 0;
    _this.moves = 20;
    _this.stars = 2;
    _this.deaths = 5;
    _this.nextLevelButton = undefined;

    _this.position = new PIXI.Point(Constants.SCREEN_WIDTH / 2 - width / 2, Constants.SCREEN_HEIGHT / 2 - height / 2);

    // Background
    var background = new PIXI.Graphics();
    background.beginFill(0xFFFFFF, 1);
    background.drawRoundedRect(0, 0, width, height);
    var CIRCLE_RADIUS = 40 * Constants.LINEARSCALE;
    background.drawCircle(width / 2, CIRCLE_RADIUS / 4, CIRCLE_RADIUS);
    _this.addChild(background);

    var star = new PIXI.Sprite.fromImage(window.assetPath + '/textures/star.png');
    star.anchor.set(0.5);
    star.width = 40 * Constants.SCALE_X;
    star.height = 40 * Constants.SCALE_X;
    star.position.x = width / 2;
    star.position.y = CIRCLE_RADIUS / 8;
    background.addChild(star);

    // Next Button
    var nextLevelButton = Geometry.Button(width / 2, height, 'NEXT LEVEL', function () {
      LevelState.resetLevel();
      State.nextLevel();
    });
    nextLevelButton.position.x -= nextLevelButton.width / 2;
    nextLevelButton.position.y -= nextLevelButton.height + PADDING;
    background.addChild(nextLevelButton);
    _this.nextLevelButton = nextLevelButton;

    _this.congratulationsText = new PIXI.Text("You Won!", { font: TITLE_SIZE + 'px Arial', fill: 0x4B4F56, align: 'left' });
    _this.congratulationsText.visible = false;
    _this.congratulationsText.position.x = width / 2 - _this.congratulationsText.width / 2;
    _this.congratulationsText.position.y = height - PADDING - _this.congratulationsText.height;
    background.addChild(_this.congratulationsText);

    var textY = PADDING;

    // const TITLETEXT_WIDTH = 146;
    // const TITLETEXT_HEIGHT = 24;
    _this.titleText = new PIXI.Text("Level Complete!", { font: TITLE_SIZE + 'px Arial', fill: 0x4B4F56, align: 'left' });
    _this.titleText.position.x = width / 2 - _this.titleText.width / 2;
    // this.titleText.position.x = width / 2 - TITLETEXT_WIDTH / 2;
    _this.titleText.position.y = textY;
    background.addChild(_this.titleText);
    textY += _this.titleText.height + TITLE_PADDING;
    // textY += TITLETEXT_HEIGHT + TITLE_PADDING;

    _this.moveText = new PIXI.Text("Moves:", { font: SUBTITLE_SIZE + 'px Arial', fill: 0x4B4F56, align: 'left' });
    _this.moveText.position.x = PADDING;
    _this.moveText.position.y = textY;
    background.addChild(_this.moveText);
    textY += _this.moveText.height + SUBHEADER_PADDING;
    // const MOVETEXT_HEIGHT = 15;
    // textY += MOVETEXT_HEIGHT + SUBHEADER_PADDING;

    _this.starText = new PIXI.Text("Stars:", { font: SUBTITLE_SIZE + 'px Arial', fill: 0x4B4F56, align: 'left' });
    _this.starText.position.x = PADDING;
    _this.starText.position.y = textY;
    background.addChild(_this.starText);
    textY += _this.starText.height + SUBHEADER_PADDING;
    // const STARTEXT_HEIGHT = 15;
    // textY += STARTEXT_HEIGHT + SUBHEADER_PADDING;

    var backStar1 = new PIXI.Sprite();
    var backStar2 = new PIXI.Sprite();
    var backStar3 = new PIXI.Sprite();
    backStar1.texture = Textures.uiGreyStarTexture;
    backStar2.texture = Textures.uiGreyStarTexture;
    backStar3.texture = Textures.uiGreyStarTexture;

    _this.star1 = new PIXI.Sprite();
    _this.star2 = new PIXI.Sprite();
    _this.star3 = new PIXI.Sprite();
    _this.star1.texture = Textures.uiStarTexture;
    _this.star2.texture = Textures.uiStarTexture;
    _this.star3.texture = Textures.uiStarTexture;
    _this.star1.scale.x = scale;_this.star1.scale.y = scale;
    _this.star2.scale.x = scale;_this.star2.scale.y = scale;
    _this.star3.scale.x = scale;_this.star3.scale.y = scale;
    background.addChild(backStar1);
    background.addChild(backStar2);
    background.addChild(backStar3);
    background.addChild(_this.star1);
    background.addChild(_this.star2);
    background.addChild(_this.star3);

    // const STARTEXT_WIDTH = 33;
    _this.star1.position.x = _this.starText.x + _this.starText.width + (_this.star1.width + STAR_PADDING) * 0;
    _this.star2.position.x = _this.starText.x + _this.starText.width + (_this.star1.width + STAR_PADDING) * 1;
    _this.star3.position.x = _this.starText.x + _this.starText.width + (_this.star2.width + STAR_PADDING) * 2;
    _this.star1.position.y = _this.starText.position.y + _this.starText.height - 19 * scale;
    // this.star1.position.x = this.starText.x + STARTEXT_WIDTH + (this.star1.width + SECTION_PADDING) * 0;
    // this.star2.position.x = this.starText.x + STARTEXT_WIDTH + (this.star1.width + SECTION_PADDING) * 1;
    // this.star3.position.x = this.starText.x + STARTEXT_WIDTH + (this.star2.width + SECTION_PADDING) * 2;
    // this.star1.position.y = this.starText.position.y + STARTEXT_HEIGHT - 19 * scale;
    _this.star2.position.y = _this.star1.position.y;
    _this.star3.position.y = _this.star2.position.y;
    backStar1.position = _this.star1.position;
    backStar2.position = _this.star2.position;
    backStar3.position = _this.star3.position;
    backStar1.scale.x = scale;backStar1.scale.y = scale;
    backStar2.scale.x = scale;backStar2.scale.y = scale;
    backStar3.scale.x = scale;backStar3.scale.y = scale;

    _this.deathText = new PIXI.Text("Deaths:", { font: SUBTITLE_SIZE + 'px Arial', fill: 0x4B4F56, align: 'left' });
    _this.deathText.position.x = PADDING;
    _this.deathText.position.y = textY;
    background.addChild(_this.deathText);
    textY += _this.deathText.height + SUBHEADER_PADDING;
    // const DEATHTEXT_HEIGHT = 15;
    // textY += DEATHTEXT_HEIGHT + SECTION_PADDING;

    _this.scoreText = new PIXI.Text("Score:", { font: SUBTITLE_SIZE + 'px Arial', fill: 0x4B4F56, align: 'left' });
    _this.scoreText.position.x = PADDING;
    _this.scoreText.position.y = textY;
    background.addChild(_this.scoreText);
    textY += _this.scoreText.height + SECTION_PADDING;

    _this.visible = false;
    Events.on(Events.LEVEL_COMPLETE, function () {
      // show the dialog
      _this.visible = LevelState.isLevelComplete();
      _this.nextLevelButton.visible = !LevelState.isOnLastLevel();
      _this.congratulationsText.visible = LevelState.isOnLastLevel();
      _this.textAnimationPct = 0;
      _this.stars = LevelState.getStars();
      _this.deaths = LevelState.getDeaths();
      _this.moves = LevelState.getMoves();
    });
    return _this;
  }

  _createClass(LevelCompleteDialog, [{
    key: 'animationFrame',
    value: function animationFrame() {
      this.textAnimationPct = Math.min(this.textAnimationPct + 0.01, 1);
      var animMoves = Math.round(this.moves * this.textAnimationPct);
      this.moveText.text = "Moves: " + (State.getMoves() - this.moves + animMoves) + " (+" + animMoves + ")";

      var animDeaths = Math.round(this.textAnimationPct * this.deaths);
      this.deathText.text = "Deaths: " + (State.getDeaths() - this.deaths + animDeaths) + " (+" + animDeaths + ")";

      this.titleText.text = "Level Complete!";
      this.starText.text = "Stars";

      var levelScore = LevelState.getLevelScore();
      var animScore = Math.round(this.textAnimationPct * levelScore);
      this.scoreText.text = "Score: " + Math.round(State.getScore() - levelScore + animScore) + " (+" + animScore + ")";

      this.star1.visible = this.textAnimationPct * 3 >= 1 && this.stars >= 1;
      this.star2.visible = this.textAnimationPct * 3 >= 2 && this.stars >= 2;
      this.star3.visible = this.textAnimationPct * 3 >= 3 && this.stars >= 3;
    }
  }]);

  return LevelCompleteDialog;
}(PIXI.Container);