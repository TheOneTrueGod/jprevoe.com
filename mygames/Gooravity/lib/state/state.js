'use strict';

var State = function () {

  var score = 0;

  var level = 0;
  var gravity = Math.PI / 2;

  var gravX = 0;
  var gravY = 1;

  var totalMoves = 0;
  var totalDeaths = 0;
  var totalStars = 0;
  var uiOpen = false;

  var getScore = function getScore() {
    return Math.floor(score);
  };
  var isUIOpen = function isUIOpen() {
    return uiOpen;
  };
  var setUIOpen = function setUIOpen(value) {
    uiOpen = value;
  };
  var addScore = function addScore(newScore) {
    score += newScore;
  };
  var addStats = function addStats(moves, deaths, stars) {
    totalMoves += moves;
    totalDeaths += deaths;
    totalStars += stars;
  };
  var getMoves = function getMoves() {
    return totalMoves;
  };
  var getDeaths = function getDeaths() {
    return totalDeaths;
  };
  var getStars = function getStars() {
    return totalStars;
  };
  var getLevel = function getLevel() {
    return level;
  };
  var setLevel = function setLevel(newLevel) {
    level = newLevel;
    Events.dispatch(Events.LEVEL_CHANGED);
  };
  var nextLevel = function nextLevel() {
    setLevel(level + 1);
  };

  var getGravity = function getGravity() {
    return gravity;
  };
  var getGravX = function getGravX() {
    return gravX;
  };
  var getGravY = function getGravY() {
    return gravY;
  };
  var setGravity = function setGravity(newGrav) {
    gravity = newGrav;
    gravX = Math.cos(gravity);
    gravY = Math.sin(gravity);
    Events.dispatch(Events.GRAVITY_CHANGED);
  };

  var resetGravity = function resetGravity() {
    gravity = Math.PI / 2;
    gravX = 0;
    gravY = 1;
    Events.dispatch(Events.GRAVITY_CHANGED);
  };

  return {
    getScore: getScore,
    addScore: addScore,
    addStats: addStats,
    getMoves: getMoves,
    getDeaths: getDeaths,
    getStars: getStars,
    getLevel: getLevel,
    setLevel: setLevel,
    nextLevel: nextLevel,
    getGravity: getGravity,
    getGravX: getGravX,
    getGravY: getGravY,
    setGravity: setGravity,
    resetGravity: resetGravity,
    setUIOpen: setUIOpen,
    isUIOpen: isUIOpen
  };
}();

var LevelState = function () {
  var keysNeeded = 0;
  var keysCollected = 0;
  var levelComplete = false;
  var starsCollected = 0;
  var deaths = 0;
  var moves = 0;

  var isLevelComplete = function isLevelComplete() {
    return levelComplete;
  };

  var isOnLastLevel = function isOnLastLevel() {
    return State.getLevel() + 1 >= pixi.world.getHighestLevel();
  }

  var setLevelComplete = function setLevelComplete() {
    levelComplete = true;
    Events.dispatch(Events.LEVEL_COMPLETE);
    // add to score
    State.addScore(this.getLevelScore());
    State.addStats(moves, deaths, starsCollected);
  };
  var getLevelScore = function getLevelScore() {
    return Math.round(100 / Math.max(moves, 1) + starsCollected * 10 + 100 / Math.max(deaths + 1, 1));
  };
  var resetLevel = function resetLevel() {
    levelComplete = false;
    Events.dispatch(Events.LEVEL_COMPLETE);
  };

  var getKeysNeeded = function getKeysNeeded() {
    return keysNeeded;
  };
  var setKeysNeeded = function setKeysNeeded(numKeys) {
    keysNeeded = numKeys;
  };
  var getKeys = function getKeys() {
    return keysCollected;
  };
  var addKey = function addKey() {
    keysCollected++;
    Events.dispatch(Events.KEY_COLLECT);
  };
  var resetKeys = function resetKeys(numKeys) {
    keysCollected = numKeys;
    Events.dispatch(Events.KEY_COLLECT);
  };
  var addStar = function addStar() {
    starsCollected++;
    Events.dispatch(Events.STAR_COLLECT);
  };
  var resetStars = function resetStars(numStars) {
    starsCollected = numStars;
    Events.dispatch(Events.STAR_COLLECT);
  };
  var getStars = function getStars() {
    return starsCollected;
  };
  var getDeaths = function getDeaths() {
    return deaths;
  };
  var resetDeaths = function resetDeaths() {
    deaths = 0;
  };
  var addDeath = function addDeath() {
    deaths++;
  };
  var getMoves = function getMoves() {
    return moves;
  };
  var resetMoves = function resetMoves() {
    moves = 0;
  };
  var addMove = function addMove() {
    moves++;
  };
  return {
    getStars: getStars,
    addStar: addStar,
    resetStars: resetStars,
    getKeysNeeded: getKeysNeeded,
    setKeysNeeded: setKeysNeeded,
    getKeys: getKeys,
    addKey: addKey,
    resetKeys: resetKeys,
    isLevelComplete: isLevelComplete,
    isOnLastLevel: isOnLastLevel,
    setLevelComplete: setLevelComplete,
    resetLevel: resetLevel,
    getDeaths: getDeaths,
    resetDeaths: resetDeaths,
    addDeath: addDeath,
    getMoves: getMoves,
    resetMoves: resetMoves,
    addMove: addMove,
    getLevelScore: getLevelScore
  };
}();