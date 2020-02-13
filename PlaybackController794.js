function onPlaybackStalled(e) {
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_STALLED, {
    e: e
  });
}
