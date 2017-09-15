function initialize({ component, player, playerOpts }) {
  function _onBeforePlay(event) {
    component.eventHandlers.onBeforePlay(event, player);
  }

  player.setup(playerOpts);

  player.on('beforePlay', _onBeforePlay);
  player.on('ready', component.props.onReady);
  player.on('setupError', component.eventHandlers.onError);
  player.on('error', (e) => {
    console.log('error', e);
    console.log('eventHandler', component.eventHandlers.onError);
    console.log('allHandlers', component.eventHandlers);
    console.log('allProps', component.props);
  });
  player.on('error', component.props.onError);
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
  player.on('all', (e) => {console.log(e)});
}

export default initialize;
