function onPlaybackWaiting() {
  logger.info('Native video element event: waiting');
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_WAITING, {
    playingTime: getTime()
  });
}
