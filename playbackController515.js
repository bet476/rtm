function onPlaybackSeeked() {
  logger.info('Native video element event: seeked');
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_SEEKED);
  // Reactivate 'seeking' event listener (see seek())
  videoModel.addEventListener('seeking', onPlaybackSeeking);
}
