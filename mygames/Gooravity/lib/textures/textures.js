'use strict';

Textures = function () {
  var bunnyTexture = new PIXI.Texture.fromImage(window.assetPath + '/textures/blob.png');
  // Add our image as a sprite
  var corpseTextures = [new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(0, 0, 13, 18)), new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(13, 0, 13, 18)), new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(0, 18, 13, 18)), new PIXI.Texture(bunnyTexture.baseTexture, new PIXI.Rectangle(13, 18, 13, 18))];

  var dirtTexture = new PIXI.Texture.fromImage(window.assetPath + '/textures/dirt.png');

  var grassTexture = new PIXI.Texture.fromImage(window.assetPath + '/textures/grassTexture.png');
  var spikeTexture = new PIXI.Texture.fromImage(window.assetPath + '/textures/spike.png');
  var bouncyTexture = new PIXI.Texture.fromImage(window.assetPath + '/textures/texture_bouncy.png');

  return {
    bunnyTexture: bunnyTexture,
    corpseTextures: corpseTextures,
    dirtTexture: dirtTexture,
    grassTexture: grassTexture,
    spikeTexture: spikeTexture,
    bouncyTexture: bouncyTexture
  };
}();