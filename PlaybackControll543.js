function onPlaybackRateChanged() {
  var rate = getPlaybackRate();
  logger.info('Native video element event: ratechange: ', rate);
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_RATE_CHANGED, {
    playbackRate: rate
  });
}
