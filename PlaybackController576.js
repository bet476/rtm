function onPlaybackError(event) {
  var target = event.target || event.srcElement;
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_ERROR, {
    error: target.error
  });
}
