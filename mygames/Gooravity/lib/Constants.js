'use strict';

var Constants = {
  TIME_UNIT: 1000 / 60,

  SCREEN_WIDTH: 320,
  SCREEN_HEIGHT: 320,
  DEFAULT_WIDTH: 400,
  DEFAULT_HEIGHT: 400,

  CANVAS_PADDING_X: 0,
  CANVAS_PADDING_Y: 0,

  CHAR_JUMP_STRENGTH: 9.5,
  CHAR_JUMP_STRENGTH_DEFAULT: 9.5,
  GRAVITY_JUMP_COMPENSATION: 1,
  GRAVITY_STRENGTH: 0.2, // Strength of gravity

  KEY_SIZE: 14,
  STAR_SIZE: 19,
  DOOR_SIZE: 20,
  ARROW_SIZE: 14,
  POINTER_RADIUS: 12,
  CHARACTER_SIZE: 20, // collision should happen if hits bunny, not point
  POSSIBLE_GRAV_ANGLES: 0,

  CollectableTypes: {
    DOOR: 'door',
    KEY: 'key',
    STAR: 'star'
  },

  TutorialTypes: {
    ARROW: 'arrow'
  },

  WallTypes: {
    SOLID: 'solid',
    STICKY: 'sticky',
    SPIKE: 'spike',
    BOUNCY: 'bouncy'
  }
};

var States = {
  LOADING: 'loading',
  MOVING: 'moving',
  PLAYERTURN: 'playerturn'
};

Constants.AdjustScreenWidth = function (gameContainer) {
  // var maxScaleX = window.innerWidth / Constants.DEFAULT_WIDTH;
  // var maxScaleY = window.innerHeight / Constants.DEFAULT_HEIGHT;
  // var scale = Math.min(maxScaleX, maxScaleY);
  // Constants.setScreenSize(Constants.DEFAULT_WIDTH * scale, Constants.DEFAULT_HEIGHT * scale);

  // very few screens are more than 2x ratio
  var MAXIMUM_PLAYABLE_RATIO = 2;

  var sizeX = gameContainer.clientWidth || Constants.DEFAULT_WIDTH;
  var sizeY = gameContainer.clientHeight || Constants.DEFAULT_HEIGHT;

  // there is a minimum ratio that is playable. Start limiting the screen size to this
  if (sizeY > sizeX) {
    if (sizeY / sizeX > MAXIMUM_PLAYABLE_RATIO) {
      sizeY = sizeX * MAXIMUM_PLAYABLE_RATIO;
    }
  } else {
    if (sizeX / sizeY > MAXIMUM_PLAYABLE_RATIO) {
      sizeX = sizeY * MAXIMUM_PLAYABLE_RATIO;
    }
  }

  Constants.SCREEN_WIDTH = sizeX;
  Constants.SCREEN_HEIGHT = sizeY;

  var scalex = sizeX / Constants.DEFAULT_WIDTH;
  var scaley = sizeY / Constants.DEFAULT_HEIGHT;
  var scale = Math.min(scalex, scaley);

  // character needs to jump further/higher with more rectangular ratios
  var screen_ratio = Math.max(Math.sqrt(sizeY / sizeX), Math.sqrt(Math.sqrt(sizeX / sizeY)), 1);
  Constants.CHAR_JUMP_STRENGTH_DEFAULT *= screen_ratio;

  Constants.SCALE_X = scale;
  Constants.SCALE_Y = scale;
  Constants.LINEARSCALE = scale;

  Constants.KEY_SIZE *= Constants.LINEARSCALE;
  Constants.STAR_SIZE *= Constants.LINEARSCALE;
  Constants.ARROW_SIZE *= Constants.LINEARSCALE;
  Constants.DOOR_SIZE *= Constants.LINEARSCALE;
  Constants.CHARACTER_SIZE *= Constants.LINEARSCALE;
  Constants.POINTER_RADIUS *= Constants.LINEARSCALE;
};

Constants.setScreenSize = function (sizeX, sizeY) {
  // Constants.SCREEN_WIDTH = sizeX;
  // Constants.SCREEN_HEIGHT = sizeY;
  // Constants.SCALE_X = sizeX / Constants.DEFAULT_WIDTH;
  // Constants.SCALE_Y = sizeY / Constants.DEFAULT_HEIGHT;
  // Constants.LINEARSCALE = Math.min(Constants.SCALE_X, Constants.SCALE_Y);
  //
  // Constants.KEY_SIZE = 12 * Constants.LINEARSCALE;
  // Constants.STAR_SIZE = 19 * Constants.LINEARSCALE;
  // Constants.DOOR_SIZE = 12 * Constants.LINEARSCALE;
  // Constants.CHARACTER_SIZE = 20 * Constants.LINEARSCALE;
};