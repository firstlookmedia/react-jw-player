'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function onPlay(event) {
  var duration = window.jwplayer(this.props.playerId).getDuration();
  if (event.playReason === 'autostart') {
    this.setState({
      hasPlayed: true
    });
    this.props.onAutoStart(event, duration);
  } else if (this.state.hasPlayed && event.oldstate === 'paused') {
    this.props.onResume(event);
  } else {
    this.props.onPlay(event, duration);
    this.setState({
      hasPlayed: true
    });
  }
}

exports.default = onPlay;