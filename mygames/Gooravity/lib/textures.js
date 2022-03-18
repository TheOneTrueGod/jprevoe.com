'use strict';

var Textures = function () {
  var bunnyTexture = new PIXI.Texture.fromImage(window.assetPath + '/textures/blob.png');
  // Add our image as a sprite
  var corpseTextures = [new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(0, 0, 20 / 2, 16 / 2)), new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(20 / 2, 0, 20 / 2, 16 / 2)), new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(0, 16 / 2, 20 / 2, 16 / 2)), new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(20 / 2, 16 / 2, 20 / 2, 16 / 2))];

  return {
    bunnyTexture: bunnyTexture,
    corpseTextures: corpseTextures,

    // ground
    dirtTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/dirt.png'),
    grassTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/grassTexture.png'),
    spikeTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/spike.png'),
    bouncyTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/texture_bouncy.png'),

    // pickups
    keyTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/key.png'),
    starTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/star.png'),
    doorOpenTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/door_open.png'),
    doorClosedTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/door_closed.png'),

    arrowTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/arrow.png'),

    // ui
    uiStarTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/star.png'),
    uiGreyStarTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/gray_star.png'),
    tapTutorialTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/hand.png'),

    // particles
    jumpStarTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/white_star.png'),
    backgroundStarTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/circle.png'),
    jumpTraceTexture: new PIXI.Texture.fromImage(window.assetPath + '/textures/circle.png')
  };
}();