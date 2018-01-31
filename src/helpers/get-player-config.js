function getPlayerConfig(prevConfig, playerOpts) {
  const { autostart, mute, volume } = playerOpts;

  const playerConfig = {};

  if (typeof autostart !== 'undefined' && prevConfig.autostart !== autostart) {
    playerConfig.autostart = autostart;
  }

  if (typeof mute !== 'undefined' && prevConfig.mute !== mute) {
    playerConfig.mute = mute;
  }

  if (typeof volume !== 'undefined' && prevConfig.volume !== volume) {
    playerConfig.volume = volume;
  }

  return playerConfig;
}

export default getPlayerConfig;

