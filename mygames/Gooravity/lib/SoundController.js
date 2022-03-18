'use strict';

var SoundController = function () {

  // load the sounds that need to be used immediately
  var blop = new Howl({
    urls: [window.assetPath + '/sounds/blop.m4a']
  }).volume(0.4);;
  var jump = new Howl({
    urls: [window.assetPath + '/sounds/jump_shorter.mp3']
  }).volume(0.15);
  var squish = new Howl({
    urls: [window.assetPath + '/sounds/small_splat.mp3']
  }).volume(0.3);;
  var spring = new Howl({ urls: [window.assetPath + '/sounds/spring_short.mp3'] }).volume(.3);
  var star = new Howl({ urls: [window.assetPath + '/sounds/star.mp3'] }).volume(.08);
  var key = new Howl({ urls: [window.assetPath + '/sounds/key.mp3'] }).volume(.1);
  var bing1 = new Howl({ urls: [window.assetPath + '/sounds/bing_1.mp3'] }).volume(.01);
  var bingFinal = new Howl({ urls: [window.assetPath + '/sounds/bing_final.mp3'] }).volume(.05);

  // immediately start listening to everything
  Events.on(Events.HIT_STICKY, function () {
    return squish.play();
  });
  Events.on(Events.HIT_BOUNCY, function () {
    spring.play();squish.play();
  });
  Events.on(Events.JUMP_START, function () {
    return jump.play();
  });
  Events.on(Events.DIED, function () {
    return blop.play();
  });
  Events.on(Events.STAR_HIT, function () {
    return star.play();
  });
  Events.on(Events.DOOR_HIT, function () {
    return bingFinal.play();
  });
  Events.on(Events.KEY_HIT, function () {
    var keys = LevelState.getKeys();
    var keysNeeded = LevelState.getKeysNeeded();
    if (keys > 0) {
      key.play();
    }
    // on door open
    if (keys === keysNeeded) {
      bing1.play();
    }
  });

  var playSound = function playSound() {};
}();