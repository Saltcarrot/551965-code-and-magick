'use strict';

window.util = (function () {
  var ENTER = 13;
  var ESC = 27;

  return {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER) {
        action();
      }
    }
  };
})();
