"use strict";

function Level(rawLevel) {

  if (rawLevel.initial_state.player_stats && rawLevel.initial_state.player_stats.jump_power) {
    Constants.CHAR_JUMP_STRENGTH = rawLevel.initial_state.player_stats.jump_power;
  } else {
    Constants.CHAR_JUMP_STRENGTH = Constants.CHAR_JUMP_STRENGTH_DEFAULT;
  }

  var Wall = function Wall(poly) {
    var sprite = Geometry.Wall(poly);
    return {
      length: function length() {
        return poly.length;
      },
      getPoly: function getPoly() {
        return poly;
      },
      getSprite: function getSprite() {
        return sprite;
      }
    };
  };

  var level = {
    walls: [],
    collectables: [],
    keysNeeded: 0,
    playerStart: new PIXI.Point(rawLevel.initial_state.player_position.x * Constants.SCREEN_WIDTH, rawLevel.initial_state.player_position.y * Constants.SCREEN_HEIGHT)
  };
  var rawPolys = rawLevel.polygons;
  for (var i = 0; i < rawPolys.length; i++) {
    var rawPoly = rawPolys[i];
    var poly = [];
    for (var j = 0; j < rawPoly.vertices.length; j++) {
      var vertex = rawPoly.vertices[j];
      var point = new PIXI.Point(vertex.x * Constants.SCREEN_WIDTH, vertex.y * Constants.SCREEN_HEIGHT);
      point.edgeProps = vertex.edgeProps;
      point.vertexProps = vertex.properties;
      if (!point.vertexProps) {
        point.vertexProps = [];
      }
      poly.push(point);
    }
    level.walls.push(new Wall(poly));
  }
  level.collectables = [];
  rawLevel.collectables.forEach(function (collectable) {
    level.collectables.push(Collectable.getCollectable(collectable));
    if (collectable.type === Constants.CollectableTypes.DOOR) {
      level.keysNeeded = collectable.keys;
    }
  });
  if (rawLevel.tutorials) {
    rawLevel.tutorials.forEach(function (tutorial) {
      level.collectables.push(Collectable.getCollectable(tutorial));
    });
  }
  return level;
}