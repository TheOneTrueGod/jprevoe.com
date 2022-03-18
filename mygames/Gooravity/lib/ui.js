"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// the text, menus, and other icons fixed on screen

var UI = function (_PIXI$Container) {
  _inherits(UI, _PIXI$Container);

  function UI() {
    _classCallCheck(this, UI);

    /*const levelText = new PIXI.Text(
      'Level ' + State.getLevel(),
      {font : '24px Arial', fill : 0x002255, align : 'center'}
    );;
    levelText.position.x = 10;
    levelText.position.y = 10;*/

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UI).call(this));

    _this.levelCompleteDialog = new LevelCompleteDialog();
    _this.tutorialDialog = new TutorialDialog();

    // listen to events and update accordingly
    /*Events.on(Events.LEVEL_CHANGED, () => {
      levelText.text = 'Level ' + State.getLevel();
    });*/

    //this.addChild(levelText);
    _this.addChild(_this.levelCompleteDialog);
    _this.addChild(_this.tutorialDialog);
    _this.tutorialDialog.show();
    return _this;
  }

  _createClass(UI, [{
    key: "animationFrame",
    value: function animationFrame() {
      this.levelCompleteDialog.animationFrame();
      this.tutorialDialog.animationFrame();
    }
  }]);

  return UI;
}(PIXI.Container);