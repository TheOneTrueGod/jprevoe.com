'use strict';

var Events = {
  LEVEL_CHANGED: 'level_changed',
  GRAVITY_CHANGED: 'gravity_changed',

  KEY_COLLECT: 'key_collect',
  STAR_COLLECT: 'star_collect',
  DOOR_COLLECT: 'door_collect',

  // separate events for sounds for just hitting the thing
  KEY_HIT: 'key_hit',
  STAR_HIT: 'star_hit',
  DOOR_HIT: 'door_hit',

  DOOR_OPEN: 'door_open',
  DOOR_CLOSE: 'door_close',

  JUMP_AIM: 'jump_aim',
  JUMP_START: 'jump_start',
  HIT_STICKY: 'hit_STICKY',
  HIT_BOUNCY: 'hit_bouncy',
  HIT_SPIKES: 'hit_spikes',
  DIED: 'died',

  dispatch: function dispatch(type) {
    document.dispatchEvent(new Event(type));
  },

  on: function on(type, callback) {
    document.addEventListener(type, callback, false);
  }
};