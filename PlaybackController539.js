function onPlaybackProgress() {
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_PROGRESS);
}
