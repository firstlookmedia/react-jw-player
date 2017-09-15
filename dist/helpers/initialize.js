'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function initialize(_ref) {
  var component = _ref.component,
      player = _ref.player,
      playerOpts = _ref.playerOpts;

  function _onBeforePlay(event) {
    component.eventHandlers.onBeforePlay(event, player);
  }

  player.setup(playerOpts);

  player.on('beforePlay', _onBeforePlay);
  player.on('ready', component.props.onReady);
  player.on('setupError', component.eventHandlers.onError);
  player.on('error', function (e) {
    console.log('error', e);
    component.eventHandlers.onError;
    component.props.onError;
  });
  player.on('adPlay', component.eventHandlers.onAdPlay);
  player.on('adPause', component.props.onAdPause);
  player.on('fullscreen', component.eventHandlers.onFullScreen);
  player.on('pause', component.props.onPause);
  player.on('play', component.eventHandlers.onPlay);
  player.on('mute', component.eventHandlers.onMute);
  player.on('playlistItem', component.eventHandlers.onVideoLoad);
  player.on('time', component.eventHandlers.onTime);
  player.on('beforeComplete', component.props.onOneHundredPercent);
  player.on('seek', component.eventHandlers.onSeek);
  player.on('displayClick', component.eventHandlers.onDisplayClick);
  player.on('all', function (e) {
    console.log(e);
  });
}

exports.default = initialize;