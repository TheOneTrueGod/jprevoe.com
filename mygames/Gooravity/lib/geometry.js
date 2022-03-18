'use strict';

function Point(x, y, properties) {
  this.x = x;
  this.y = y;
  this.properties = properties;
}

// Creates things to draw on the canvas

var Geometry = function () {
  // PRIVATE STUFF
  var Wall = function Wall(points, type) {
    var wall = new PIXI.Container();

    // draw the main polygon
    var poly = new PIXI.Graphics();
    poly.beginFill(0xFFFFF0);
    poly.drawPolygon(points);
    var bounds = poly.getBounds();

    var dirtSprite = new PIXI.extras.TilingSprite(Textures.dirtTexture, bounds.width, bounds.height);
    dirtSprite.position.x = bounds.x;
    dirtSprite.position.y = bounds.y;

    wall.addChild(poly);
    wall.addChild(dirtSprite);
    dirtSprite.mask = poly;

    // draw some textures around the lines
    // make the points loop to make the logic easier
    points.push(points[0]);

    for (var i = 0; i < points.length - 1; i++) {
      var p1 = points[i];
      var p2 = points[i + 1];
      var angle = Math.atan2(p1.y - p2.y, p1.x - p2.x) + Math.PI;

      // the midpoint of the points
      var x = (p1.x + p2.x) / 2;
      var y = (p1.y + p2.y) / 2;

      var length = Math.sqrt(dist2(p1, p2));
      // assumes that points are listed clockwise

      var wallType = getWallType(p1);
      var texture = null;
      var anchorY = 1;
      switch (wallType) {
        case Constants.WallTypes.SPIKE:
          texture = Textures.spikeTexture;
          break;
        case Constants.WallTypes.BOUNCY:
          texture = Textures.bouncyTexture;
          anchorY = 0.85;
          break;
        case Constants.WallTypes.STICKY:
          texture = Textures.grassTexture;
          break;
      }
      if (texture) {
        var sprite = new PIXI.extras.TilingSprite(texture, length / Constants.SCALE_X, 32);
        sprite.anchor.set(0.5, anchorY);
        sprite.position.x = x;
        sprite.position.y = y;
        sprite.scale.x = Constants.SCALE_X;
        sprite.scale.y = Constants.SCALE_Y;
        sprite.rotation = angle;
        wall.addChild(sprite);
      }
    }

    return wall;
  };

  var Collectable = function Collectable(point) {
    var poly = new PIXI.Graphics();
    poly.beginFill(0xFFFFF0);
    poly.drawCircle(point.x, point.y, Collectables.COLLECTABLE_SIZE);
    return poly;
  };

  var Button = function Button(x, y, name, callback) {
    var cont = new PIXI.Container();
    var scale = Math.min(Constants.SCALE_X, Constants.SCALE_Y);
    var FONT_SIZE = Math.floor(18 * scale);

    var TEXT_HEIGHT = 15 * scale;
    var TEXT_WIDTH = 75 * scale;
    var text = new PIXI.Text(name, {
      font: FONT_SIZE + 'px Arial',
      fill: 0x42B72A,
      align: 'center'
    });
    var button = new PIXI.Graphics();
    button.beginFill(0x42B72A, 0.15);
    button.lineStyle(2, 0x42B72A, 1);
    var height = (TEXT_HEIGHT + 12 * 2) * Constants.SCALE_Y;
    // var height = text.height + 12 * 2 * Constants.SCALE_Y;
    button.drawRoundedRect(0, 0, (75 + 60 * 2) * Constants.SCALE_X, height, Math.floor(height / 2) - 1);
    text.anchor.x = 0.5;
    text.anchor.y = 0.5;

    text.position.x = button.width / 2;
    text.position.y = button.height / 2;

    button.hitArea = button.getBounds();
    cont.addChild(button);
    cont.addChild(text);
    cont.x = x;
    cont.y = y;
    cont.interactive = true;
    cont.on('click', callback);
    cont.on('touchend', callback);
    return cont;
  };

  // STUFF TO MAKE PUBLIC
  return {
    Wall: Wall,
    Collectable: Collectable,
    Button: Button
  };
}();

function getWallType(p1) {
  if (p1.edgeProps) {
    return p1.edgeProps[0];
  }
  return Constants.WallTypes.STICKY;
}

// Copied from http://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
function sqr(x) {
  return x * x;
}
function dist2(v, w) {
  return sqr(v.x - w.x) + sqr(v.y - w.y);
}
function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);
  if (l2 == 0) return dist2(p, v);
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, { x: v.x + t * (w.x - v.x),
    y: v.y + t * (w.y - v.y) });
}
// Takes points for p, v, and w
function distToSegment(p, v, w) {
  return Math.sqrt(distToSegmentSquared(p, v, w));
}

// copied from http://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
function CCW(p1, p2, p3) {
  var a = p1.x;var b = p1.y;
  var c = p2.x;var d = p2.y;
  var e = p3.x;var f = p3.y;
  return (f - b) * (c - a) > (d - b) * (e - a);
}

function isIntersect(p1, p2, p3, p4) {
  // check if within the Rectangle

  return CCW(p1, p3, p4) != CCW(p2, p3, p4) && CCW(p1, p2, p3) != CCW(p1, p2, p4);
}

// takes 3 points
function signed2DTriArea(a, b, c) {
  return (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);
}

// takes 2 pairs of points and returns the intercept of the line
function get2DLineIntercept(a, b, c, d) {
  // signs of areas correspond to which side of ab points c and d are
  var a1 = signed2DTriArea(a, b, d); // Compute winding of abd (+ or -)
  var a2 = signed2DTriArea(a, b, c); // To intersect, must have sign opposite of a1

  // If c and d are on different sides of ab, areas have different signs
  if (a1 * a2 < 0) // require unsigned x & y values.
    {
      var a3 = signed2DTriArea(c, d, a); // Compute winding of cda (+ or -)
      var a4 = a3 + a2 - a1; // Since area is constant a1 - a2 = a3 - a4, or a4 = a3 + a2 - a1

      // Points a and b on different sides of cd if areas have different signs
      if (a3 * a4 < 0) {
        // Segments intersect. Find intersection point along L(t) = a + t * (b - a).
        var t = a3 / (a3 - a4);
        var x = a.x + t * (b.x - a.x);
        var y = a.y + t * (b.y - a.y);
        return new PIXI.Point(x, y); // the point of intersection
      }
    }

  // Segments not intersecting or collinear
  return null;
}