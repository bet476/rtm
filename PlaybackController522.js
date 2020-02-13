function onPlaybackTimeUpdated() {
  if (streamInfo) {
    eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_TIME_UPDATED, {
      timeToEnd: getTimeToStreamEnd(),
      time: getTime()
    });
  }
}
