function handleEvent(event) {
  switch (event.type) {
    case 'encrypted':
      if (event.initData) {
        var initData = ArrayBuffer.isView(event.initData) ? event.initData.buffer : event.initData;
        eventBus.trigger(events.NEED_KEY, {
          key: new _voNeedKey2['default'](initData, event.initDataType)
        });
      }
      break;
  }
}
