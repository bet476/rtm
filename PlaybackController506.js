function onPlaybackSeeking() {
  var seekTime = getTime();
  logger.info('Seeking to: ' + seekTime);
  startUpdatingWallclockTime();
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_SEEKING, {
    seekTime: seekTime
  });
}
