function onPlay(event) {
  const duration = window.jwplayer(this.props.playerId).getDuration();
  if (event.playReason === 'autostart') {
    this.setState({
      hasPlayed: true,
    });
    this.props.onAutoStart(event, duration);
  } else if (this.state.hasPlayed && event.oldstate === 'paused') {
    this.props.onResume(event);
  } else {
    this.props.onPlay(event, duration);
    this.setState({
      hasPlayed: true,
    });
  }
}

export default onPlay;
