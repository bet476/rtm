function onPlaybackPaused() {
  logger.info('Native video element event: pause');
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_PAUSED, {
    ended: getEnded()
  });
}
