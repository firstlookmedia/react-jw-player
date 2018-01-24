'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getPlayerConfig(playerOpts) {
  var autostart = playerOpts.autostart,
      mute = playerOpts.mute,
      volume = playerOpts.volume;


  var playerConfig = {};

  if (typeof autostart !== 'undefined') {
    playerConfig.autostart = autostart;
  }

  if (typeof mute !== 'undefined') {
    playerConfig.mute = mute;
  }

  if (typeof volume !== 'undefined') {
    playerConfig.volume = volume;
  }

  return playerConfig;
}

exports.default = getPlayerConfig;