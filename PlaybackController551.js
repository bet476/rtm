function onPlaybackMetaDataLoaded() {
  logger.info('Native video element event: loadedmetadata');
  eventBus.trigger(_coreEventsEvents2['default'].PLAYBACK_METADATA_LOADED);
  startUpdatingWallclockTime();
}
