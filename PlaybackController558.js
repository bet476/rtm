function onNativePlaybackEnded() {
  logger.info('Native video element event: ended');
  pause();
  stopUpdatingWallclockTime();
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_ENDED, {
    'isLast': streamController.getActiveStreamInfo().isLast
  });
}
