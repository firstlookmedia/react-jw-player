function getPlayerConfig(playerOpts) {
  const { autostart, mute, volume } = playerOpts;

  const playerConfig = {};

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

export default getPlayerConfig;

