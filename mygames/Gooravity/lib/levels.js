"use strict";

function Levels() {
  var levels_json = [
  /************************************
   **** LEVEL 0 - Some Platforms ****
   Three platforms. Obvious Jumps.
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 0.1, "y": 0.3 }, { "x": 0.4, "y": 0.3, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.37, "y": 0.33, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.13, "y": 0.33, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.6, "y": 0.55 }, { "x": 0.9, "y": 0.55, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.87, "y": 0.58, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.63, "y": 0.58, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.2, "y": 0.8 }, { "x": 0.5, "y": 0.8, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.47, "y": 0.83, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.23, "y": 0.83, "edgeProps": [Constants.WallTypes.SOLID] }] }],
    "collectables": [{
      "x": 0.75, "y": 0.52,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.35, "y": 0.77,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.40, "y": 0.18, type: Constants.CollectableTypes.STAR }, { "x": 0.59, "y": 0.29, type: Constants.CollectableTypes.STAR }, { "x": 0.72, "y": 0.45, type: Constants.CollectableTypes.STAR }],
    "tutorials": [{
      "trigger": [0.2, 0.28], // player position
      "target": [0.75, 0.52], // key
      "type": Constants.TutorialTypes.ARROW,
      "isActive": true
    }, {
      "trigger": [0.75, 0.52], // key
      "target": [0.35, 0.77], // door
      "type": Constants.TutorialTypes.ARROW
    }],
    "initial_state": {
      "player_position": {
        "x": 0.2,
        "y": 0.28
      }
    }
  },
  /************************************
   **** LEVEL 0.1 - Intro to Graivty ****
   Three platforms. Obvious Jumps.
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 0.67, "y": 0.89 }, { "x": 0.89, "y": 0.89, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.86, "y": 0.92, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.70, "y": 0.92, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.61, "y": 0.64, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 1.00, "y": 0.64 }, { "x": 1.00, "y": 0.75 }, { "x": 0.61, "y": 0.75, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.00, "y": 0.22, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.27, "y": 0.22 }, { "x": 0.27, "y": 0.79 }, { "x": 0.00, "y": 0.79 }] }, {
      "vertices": [{ "x": 0.54, "y": 0.00 }, { "x": 0.68, "y": 0.00 }, { "x": 0.68, "y": 0.39 }, { "x": 0.54, "y": 0.39, "edgeProps": [Constants.WallTypes.SOLID] }] }],
    "collectables": [{
      "x": 0.78, "y": 0.78,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.84, "y": 0.06,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.4, "y": 0.78, type: Constants.CollectableTypes.STAR }, { "x": 0.61, "y": 0.43, type: Constants.CollectableTypes.STAR }, { "x": 0.81, "y": 0.23, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": {
        "x": 0.8,
        "y": 0.87
      }
    }
  },
  /************************************
   **** 0.2 Upside down bounce ****
   Bouncing and upside down all at once
   ************************************/
  {
    "polygons": [{
      // Bottom
      "vertices": [{ "x": 0.03, "y": 0.89 }, { "x": 0.25, "y": 0.89, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.23, "y": 0.91, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.05, "y": 0.91, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.35, "y": 0.89, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.51, "y": 0.89, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.51, "y": 0.91, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.35, "y": 0.91, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      "vertices": [{ "x": 0.60, "y": 0.89 }, { "x": 0.83, "y": 0.89, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.81, "y": 0.91, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.62, "y": 0.91, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.90, "y": 0.61, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.97, "y": 0.61, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.98, "y": 0.63 }, { "x": 0.89, "y": 0.63, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      // Middle
      "vertices": [{ "x": 0.00, "y": 0.47, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.73, "y": 0.47, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.73, "y": 0.53, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.48, "y": 0.53, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.43, "y": 0.85, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.38, "y": 0.53, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.00, "y": 0.53, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 0.88, "y": 0.47, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 1.00, "y": 0.47, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 1.00, "y": 0.53, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.88, "y": 0.53, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      // Top
      "vertices": [{ "x": 0.71, "y": 0.09, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.95, "y": 0.09, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.97, "y": 0.11 }, { "x": 0.69, "y": 0.11, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.45, "y": 0.15, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.62, "y": 0.15, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.62, "y": 0.17, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.45, "y": 0.17, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      "vertices": [{ "x": 0.14, "y": 0.21, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.34, "y": 0.21, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.36, "y": 0.23 }, { "x": 0.12, "y": 0.23, "edgeProps": [Constants.WallTypes.SOLID] }] }],
    "collectables": [{
      "x": 0.93, "y": 0.66,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.24, "y": 0.26,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.43, "y": 0.87, type: Constants.CollectableTypes.STAR }, { "x": 0.80, "y": 0.5, type: Constants.CollectableTypes.STAR }, { "x": 0.54, "y": 0.2, type: Constants.CollectableTypes.STAR }],
    "tutorials": [{
      "trigger": [0.97, 0.48],
      "target": [0.94, 0.62], // key
      "type": Constants.TutorialTypes.ARROW
    }, {
      "trigger": [0.63, 0.48],
      "target": [0.94, 0.62], // key
      "type": Constants.TutorialTypes.ARROW
    }],
    "initial_state": {
      "player_position": {
        "x": 0.14, "y": 0.87
      },
      "player_stats": {
        "jumps": 5
      }
    }
  },
  /************************************
   **** 0.x Diagonal Gravity ****
   Slightly advanced gravity tactics
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 0.32, "y": 0.88 }, { "x": 0.55, "y": 0.88, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.53, "y": 0.90, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.34, "y": 0.90, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.15, "y": 0.62 }, { "x": 0.57, "y": 0.27 }, { "x": 0.66, "y": 0.27 }, { "x": 0.24, "y": 0.62 }] }],
    "collectables": [{
      "x": 0.73, "y": 0.46,
      "type": Constants.CollectableTypes.KEY
    }, { "x": 0.62, "y": 0.23,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.44, "y": 0.72, type: Constants.CollectableTypes.STAR }, { "x": 0.54, "y": 0.51, type: Constants.CollectableTypes.STAR }, { "x": 0.75, "y": 0.31, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": { "x": 0.43, "y": 0.86 }
    }
  },
  /************************************
   **** 0.x Extra Bouncy ****
   Learn bouncing. Use bouncing.
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 0.35, "y": 0.59 }, { "x": 0.65, "y": 0.59 }, { "x": 0.65, "y": 0.61 }, { "x": 0.35, "y": 0.61 }] }, {
      "vertices": [{ "x": 0.78, "y": 0.68, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.82, "y": 0.68, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.67, "y": 0.78, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.63, "y": 0.78, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {

      "vertices": [{ "x": 0.33, "y": 0.68, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.39, "y": 0.68, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.54, "y": 0.75, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.48, "y": 0.75, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.61, "y": 0.45, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.66, "y": 0.45, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.82, "y": 0.57, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.77, "y": 0.57, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      "vertices": [{ "x": 0.28, "y": 0.40 }, { "x": 0.28, "y": 0.50, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.25, "y": 0.50, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.25, "y": 0.40, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.61, "y": 0.23, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.64, "y": 0.23, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.64, "y": 0.3, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.61, "y": 0.3, "edgeProps": [Constants.WallTypes.BOUNCY] }] }],
    "collectables": [{
      "x": 0.49, "y": 0.65,
      "type": Constants.CollectableTypes.KEY
    }, { "x": 0.63, "y": 0.18,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.71, "y": 0.69, type: Constants.CollectableTypes.STAR }, { "x": 0.67, "y": 0.26, type: Constants.CollectableTypes.STAR }, { "x": 0.32, "y": 0.45, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": { "x": 0.50, "y": 0.57 }
    }
  },
  /************************************
   **** 0.x Puzzling Platforms ****
   Platforms which are Puzzling
   ************************************/
  {
    "polygons": [{
      // central bouncy
      "vertices": [{ "x": 0.42, "y": 0.44, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.58, "y": 0.44, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.58, "y": 0.46, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.42, "y": 0.46, "edgeProps": [Constants.WallTypes.BOUNCY] }] },
    // Top left
    {
      "vertices": [{ "x": 0.20, "y": 0.27 }, { "x": 0.33, "y": 0.27, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.33, "y": 0.29 }, { "x": 0.20, "y": 0.29, "edgeProps": [Constants.WallTypes.SOLID] }]
    }, { // bottom left
      "vertices": [{ "x": 0.2, "y": 0.62 }, { "x": 0.33, "y": 0.62, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.33, "y": 0.64 }, { "x": 0.2, "y": 0.64, "edgeProps": [Constants.WallTypes.SOLID] }]
    },
    // Top right
    {
      "vertices": [{ "x": 0.67, "y": 0.27 }, { "x": 0.80, "y": 0.27, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.80, "y": 0.29 }, { "x": 0.67, "y": 0.29, "edgeProps": [Constants.WallTypes.SOLID] }]
    }, { // bottom right
      "vertices": [{ "x": 0.67, "y": 0.62 }, { "x": 0.80, "y": 0.62, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.80, "y": 0.64 }, { "x": 0.67, "y": 0.64, "edgeProps": [Constants.WallTypes.SOLID] }]
    }],
    "collectables": [{
      "x": 0.27, "y": 0.67,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.27, "y": 0.23,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.74, "y": 0.33,
      "type": Constants.CollectableTypes.KEY
    }, { "x": 0.74, "y": 0.68,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 3
    }, { "x": 0.34, "y": 0.34, type: Constants.CollectableTypes.STAR }, { "x": 0.39, "y": 0.2, type: Constants.CollectableTypes.STAR }, { "x": 0.5, "y": 0.39, type: Constants.CollectableTypes.STAR }, { "x": 0.74, "y": 0.21, type: Constants.CollectableTypes.STAR }, { "x": 0.74, "y": 0.59, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": { "x": 0.26, "y": 0.60 }
    }
  },
  /************************************
   **** 0.3 Polygons ****
   Handle angled platforms
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 0.75, "y": 0.68 }, { "x": 0.75, "y": 0.70 }, { "x": 0.60, "y": 0.70 }, { "x": 0.50, "y": 0.77 }, { "x": 0.50, "y": 0.85 }, { "x": 0.60, "y": 0.92 }, { "x": 0.75, "y": 0.92 }, { "x": 0.75, "y": 0.94, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.45, "y": 0.94, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.45, "y": 0.85, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.45, "y": 0.77, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.45, "y": 0.68, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.79, "y": 0.18 }, { "x": 0.75, "y": 0.19 }, { "x": 0.67, "y": 0.12 }, { "x": 0.53, "y": 0.13 }, { "x": 0.48, "y": 0.2 }, { "x": 0.54, "y": 0.27 }, { "x": 0.5, "y": 0.28, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.35, "y": 0.15, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.64, "y": 0.06, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.13, "y": 0.69 }, { "x": 0.17, "y": 0.72 }, { "x": 0.1, "y": 0.8 }, { "x": 0.19, "y": 0.85 }, { "x": 0.28, "y": 0.78 }, { "x": 0.3, "y": 0.79, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.19, "y": 0.88, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.03, "y": 0.81, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.62, "y": 0.47, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.65, "y": 0.47, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.65, "y": 0.49, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.62, "y": 0.49, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 0.26, "y": 0.5, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.29, "y": 0.5, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.29, "y": 0.52, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.26, "y": 0.52, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 0.28, "y": 0.27 }, { "x": 0.28, "y": 0.31 }, { "x": 0.14, "y": 0.33 }, { "x": 0.18, "y": 0.39 }, { "x": 0.12, "y": 0.39, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.08, "y": 0.28, "edgeProps": [Constants.WallTypes.SOLID] }] }],
    "collectables": [{
      "x": 0.19, "y": 0.79,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.22, "y": 0.35,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.6, "y": 0.18,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.56, "y": 0.81,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 3
    }, { "x": 0.8, "y": 0.39, type: Constants.CollectableTypes.STAR }, { "x": 0.45, "y": 0.51, type: Constants.CollectableTypes.STAR }, { "x": 0.86, "y": 0.77, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": {
        "x": 0.68, "y": 0.90
      },
      "player_stats": {
        "jumps": 5
      }
    }
  },
  /************************************
   **** 0.x PRECISION SPIKES ****
   More careful aiming to get to the key
   ************************************/
  {
    "polygons": [{
      // Bottom platforms
      "vertices": [{ "x": 0.10, "y": 0.88, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.29, "y": 0.88, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.27, "y": 0.9, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.12, "y": 0.9, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.67, "y": 0.88 }, { "x": 0.89, "y": 0.88, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.87, "y": 0.9, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.69, "y": 0.9, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.06, "y": 0.50 }, { "x": 0.06, "y": 0.65, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.04, "y": 0.64, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.04, "y": 0.51, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      // Vertical Spikes
      "vertices": [{ "x": 0.49, "y": 0.57, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.51, "y": 0.57, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.55, "y": 1.00, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.45, "y": 1.00, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 0.51, "y": 0.50, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.49, "y": 0.50, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.45, "y": 0.00, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.55, "y": 0.00, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.54, "y": 0.15, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 0.54, "y": 0.27, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      // Top
      "vertices": [{ "x": 0.76, "y": 0.09, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.91, "y": 0.09, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.93, "y": 0.11 }, { "x": 0.74, "y": 0.11, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.61, "y": 0.55, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.61, "y": 0.54, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 1.00, "y": 0.53, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 1.00, "y": 0.56, "edgeProps": [Constants.WallTypes.SPIKE] }] }],
    "collectables": [{
      "x": 0.83, "y": 0.14,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.17, "y": 0.21,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.5, "y": 0.54, type: Constants.CollectableTypes.STAR }, { "x": 0.2, "y": 0.85, type: Constants.CollectableTypes.STAR }, { "x": 0.78, "y": 0.36, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": {
        "x": 0.78, "y": 0.86
      },
      "player_stats": {
        "jumps": 5,
        "jump_power": 15
      }
    }
  },

  /************************************
   **** LEVEL 1 - There and Back ****
   You're on one platform.  you have to get to the other and back.  No hazards.
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 0.1, "y": 0.9 }, { "x": 0.4, "y": 0.9, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.25, "y": 0.95, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.6, "y": 0.9 }, { "x": 0.9, "y": 0.9, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.75, "y": 0.95, "edgeProps": [Constants.WallTypes.SOLID] }] }],
    "collectables": [{
      "x": 0.75, "y": 0.8,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.5, "y": 0.9,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.35, "y": 0.6, type: Constants.CollectableTypes.STAR }, { "x": 0.5, "y": 0.4, type: Constants.CollectableTypes.STAR }, { "x": 0.65, "y": 0.6, type: Constants.CollectableTypes.STAR }],
    "tutorials": [{
      "trigger": [0.25, 0.88],
      "target": [0.75, 0.8], // key
      "type": Constants.TutorialTypes.ARROW,
      "isActive": true
    }, {
      "trigger": [0.75, 0.8], // key
      "target": [0.5, 0.9], // door
      "type": Constants.TutorialTypes.ARROW
    }],
    "initial_state": {
      "player_position": {
        "x": 0.25,
        "y": 0.88
      }
    }
  },
  /*************************
   **** Three Platforms ****
   Three platforms held up by spikes
   *************************/
  {
    "polygons": [{
      // Platforms
      "vertices": [{ "x": 0.1, "y": 0.8 }, { "x": 0.3, "y": 0.8, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.27, "y": 0.85, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.13, "y": 0.85, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.7, "y": 0.8 }, { "x": 0.9, "y": 0.8, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.87, "y": 0.85, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.73, "y": 0.85, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 0.4, "y": 0.5 }, { "x": 0.6, "y": 0.5, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.57, "y": 0.55, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.43, "y": 0.55, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      // Spikes
      "vertices": [{ "x": 0.13, "y": 0.85, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.27, "y": 0.85, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.27, "y": 1, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.13, "y": 1, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 0.73, "y": 0.85, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.87, "y": 0.85, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.87, "y": 1, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.73, "y": 1, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 0.43, "y": 0.55, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 0.57, "y": 0.55, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.57, "y": 1, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0.43, "y": 1, "edgeProps": [Constants.WallTypes.SPIKE] }] }],
    "collectables": [{
      "x": 0.8, "y": 0.7,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 0.2, "y": 0.7,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 0.35, "y": 0.2, type: Constants.CollectableTypes.STAR }, { "x": 0.5, "y": 0.4, type: Constants.CollectableTypes.STAR }, { "x": 0.65, "y": 0.2, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": {
        "x": 0.2,
        "y": 0.78
      }
    }
  },
  /***********************
   **** Ceiling Cling ****
   Simple level two platforms facing each other vertically
   ***********************/
  {
    "polygons": [{
      "vertices": [{ "x": 10 / 360, "y": 100 / 564 }, { "x": 300 / 360, "y": 100 / 564 }, { "x": 155 / 360, "y": 150 / 564 }] }, {
      "vertices": [{ "x": 10 / 360, "y": 500 / 564 }, { "x": 155 / 360, "y": 450 / 564 }, { "x": 300 / 360, "y": 500 / 564 }]
    }],
    "collectables": [{
      "x": 100 / 360, "y": 300 / 564,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 190 / 360, "y": 180 / 564,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 100 / 360, "y": 350 / 564, type: Constants.CollectableTypes.STAR }, { "x": 100 / 360, "y": 150 / 564, type: Constants.CollectableTypes.STAR }, { "x": 150 / 360, "y": 200 / 564, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": {
        "x": 100 / 360,
        "y": 460 / 564
      }
    }
  },

  /************************************
   **** USE GRAVITY ****
   Diagonal platform used to change gravity
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 10 / 360, "y": 500 / 564 }, { "x": 200 / 360, "y": 500 / 564 }, { "x": 200 / 360, "y": 520 / 564 }, { "x": 10 / 360, "y": 520 / 564 }] }, {
      "vertices": [{ "x": 50 / 360, "y": 150 / 564 }, { "x": 200 / 360, "y": 150 / 564 }, { "x": 50 / 360, "y": 350 / 564 }] }],
    "collectables": [{ "x": 210 / 360, "y": 280 / 564,
      "type": Constants.CollectableTypes.KEY
    }, { "x": 180 / 360, "y": 120 / 564,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 100 / 360, "y": 300 / 564, type: Constants.CollectableTypes.STAR }, { "x": 150 / 360, "y": 280 / 564, type: Constants.CollectableTypes.STAR }, { "x": 180 / 360, "y": 200 / 564, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": { "x": 100 / 360, "y": 500 / 564 }
    }
  },

  /************************************
   **** INTRO TO BOUNCING ****
   Forced to use the bouncy
   ************************************/
  {
    "polygons": [{
      "vertices": [{ "x": 120 / 360, "y": 200 / 564 }, { "x": 240 / 360, "y": 200 / 564 }, { "x": 240 / 360, "y": 220 / 564 }, { "x": 120 / 360, "y": 220 / 564 }] }, {
      "vertices": [{ "x": 300 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 310 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 310 / 360, "y": 380 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 300 / 360, "y": 380 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      "vertices": [{ "x": 120 / 360, "y": 400 / 564 }, { "x": 240 / 360, "y": 400 / 564 }, { "x": 240 / 360, "y": 420 / 564 }, { "x": 120 / 360, "y": 420 / 564 }] }],
    "collectables": [{ "x": 180 / 360, "y": 360 / 564,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 0
    }, { "x": 260 / 360, "y": 280 / 564, type: Constants.CollectableTypes.STAR }, { "x": 300 / 360, "y": 220 / 564, type: Constants.CollectableTypes.STAR }, { "x": 260 / 360, "y": 180 / 564, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": { "x": 180 / 360, "y": 190 / 564 }
    }
  },

  /************************************
   **** PLATFORM HOPPING ****
   Big spike in the middle
   ************************************/
  {
    "polygons": [{
      // Bottom
      "vertices": [{ "x": 10 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 93 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 90 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 13 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 123 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 186 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 183 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 126 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      "vertices": [{ "x": 216 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 300 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 297 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 219 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      // bottom platform, upside down - you have to use gooravity to help you make it across
      "vertices": [{ "x": 219 / 360, "y": 400 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 257 / 360, "y": 400 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 260 / 360, "y": 410 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 216 / 360, "y": 410 / 564, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      // Right
      "vertices": [{ "x": 360 / 360, "y": 225 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 360 / 360, "y": 335 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 350 / 360, "y": 335 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 350 / 360, "y": 225 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      // Top
      "vertices": [{ "x": 13 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 90 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 93 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 10 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 126 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 183 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 186 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 123 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      "vertices": [{ "x": 219 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 297 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 300 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 216 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      // Middle
      "vertices": [{ "x": 0 / 360, "y": 265 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 300 / 360, "y": 265 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 300 / 360, "y": 295 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 0 / 360, "y": 295 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }] }],
    "collectables": [{
      "x": 267 / 360, "y": 485 / 564,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 267 / 360, "y": 75 / 564,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 41 / 360, "y": 75 / 564,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 2
    }, { "x": 154 / 360, "y": 80 / 564, type: Constants.CollectableTypes.STAR }, { "x": 154 / 360, "y": 480 / 564, type: Constants.CollectableTypes.STAR }, { "x": 335 / 360, "y": 280 / 564, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": {
        "x": 31 / 360, "y": 495 / 564
      },
      "player_stats": {
        "jumps": 5
      }
    }
  },

  /************************************
   **** USE BOUNCY PLATFORM ****
   Diagonal platform used to change gravity
   ************************************/
  {
    "polygons": [{
      // central bouncy
      "vertices": [{ "x": 150 / 360, "y": 250 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 210 / 360, "y": 250 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 210 / 360, "y": 260 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 150 / 360, "y": 260 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }] },
    // Top left
    {
      "vertices": [{ "x": 70 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 120 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 120 / 360, "y": 160 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 70 / 360, "y": 160 / 564, "edgeProps": [Constants.WallTypes.SOLID] }]
    }, { // bottom left
      "vertices": [{ "x": 70 / 360, "y": 350 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 120 / 360, "y": 350 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 120 / 360, "y": 360 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 70 / 360, "y": 360 / 564, "edgeProps": [Constants.WallTypes.SOLID] }]
    },
    // Top right
    {
      "vertices": [{ "x": 240 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 300 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 300 / 360, "y": 160 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 240 / 360, "y": 160 / 564, "edgeProps": [Constants.WallTypes.SOLID] }]
    }, { // bottom right
      "vertices": [{ "x": 240 / 360, "y": 350 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 300 / 360, "y": 350 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 300 / 360, "y": 360 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 240 / 360, "y": 360 / 564, "edgeProps": [Constants.WallTypes.SOLID] }]
    }],
    "collectables": [{ "x": 95 / 360, "y": 120 / 564,
      "type": Constants.CollectableTypes.KEY
    }, { "x": 95 / 360, "y": 390 / 564,
      "type": Constants.CollectableTypes.KEY
    }, { "x": 265 / 360, "y": 190 / 564,
      "type": Constants.CollectableTypes.KEY
    }, { "x": 265 / 360, "y": 390 / 564,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 3
    }, { "x": 265 / 360, "y": 120 / 564, type: Constants.CollectableTypes.STAR }, { "x": 265 / 360, "y": 330 / 564, type: Constants.CollectableTypes.STAR },

    // stars to guide player
    { "x": 120 / 360, "y": 190 / 564, type: Constants.CollectableTypes.STAR }, { "x": 140 / 360, "y": 110 / 564, type: Constants.CollectableTypes.STAR }, { "x": 180 / 360, "y": 220 / 564, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": { "x": 95 / 360, "y": 340 / 564 }
    }
  },

  /************************************
   **** PRECISION SPIKES ****
   More careful aiming to get to the key
   ************************************/
  {
    "polygons": [{
      // Bottom platforms
      "vertices": [{ "x": 30 / 360, "y": 520 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 113 / 360, "y": 520 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 110 / 360, "y": 530 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 33 / 360, "y": 530 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }] }, {
      "vertices": [{ "x": 236 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 320 / 360, "y": 500 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 317 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 239 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 10 / 360, "y": 330 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 20 / 360, "y": 330 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 20 / 360, "y": 400 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 10 / 360, "y": 400 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      // Vertical Spikes
      "vertices": [{ "x": 176 / 360, "y": 340 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 186 / 360, "y": 340 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 200 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 162 / 360, "y": 510 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 162 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 200 / 360, "y": 150 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 186 / 360, "y": 280 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 176 / 360, "y": 280 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      // Top
      "vertices": [{ "x": 125 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 140 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 210 / 360, "y": 140 / 564, "edgeProps": [Constants.WallTypes.BOUNCY] }, { "x": 195 / 360, "y": 140 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }] }, {
      "vertices": [{ "x": 179 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 267 / 360, "y": 50 / 564, "edgeProps": [Constants.WallTypes.SOLID] }, { "x": 270 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.STICKY] }, { "x": 176 / 360, "y": 60 / 564, "edgeProps": [Constants.WallTypes.SOLID] }] }, {
      "vertices": [{ "x": 230 / 360, "y": 300 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 340 / 360, "y": 190 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 343 / 360, "y": 200 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }, { "x": 227 / 360, "y": 310 / 564, "edgeProps": [Constants.WallTypes.SPIKE] }] }],
    "collectables": [{
      "x": 247 / 360, "y": 80 / 564,
      "type": Constants.CollectableTypes.KEY
    }, {
      "x": 61 / 360, "y": 120 / 564,
      "type": Constants.CollectableTypes.DOOR,
      "keys": 1
    }, { "x": 250 / 360, "y": 240 / 564, type: Constants.CollectableTypes.STAR }, { "x": 80 / 360, "y": 480 / 564, type: Constants.CollectableTypes.STAR }, { "x": 180 / 360, "y": 315 / 564, type: Constants.CollectableTypes.STAR }],
    "initial_state": {
      "player_position": {
        "x": 300 / 360, "y": 495 / 564
      },
      "player_stats": {
        "jumps": 5,
        "jump_power": 15
      }
    }
  }];

  var levels = {
    getLevel: function getLevel(level) {
      // if trying to get a level that doesn't exist, the game is over
      if (level >= levels_json.length) {
        /* Trigger the restart here */
        LevelState.resetLevel();
        State.setLevel(0);
      }

      return levels_json[level];
    },
    getHighestLevel() {
      return levels_json.length;
    },
    loadLevel: function loadLevel(level) {
      var rawLevel = this.getLevel(level);
      return new Level(rawLevel);
    }
  };
  return levels;
}