function onPlaybackStart() {
  logger.info('Native video element event: play');
  updateCurrentTime();
  startUpdatingWallclockTime();
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_STARTED, {
    startTime: getTime()
  });
}
