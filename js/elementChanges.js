'use strict';

window.elementChanges = (function () {
  return {
    removeClassNameFromElement: function (element, className) {
      element.classList.remove(className);
    },
    addClassNameToElement: function (element, className) {
      element.classList.add(className);
    },
    changeStyleProperty: function (element, property, array) {
      element.style[property] = window.arrayFeatures.getRandomElementExcept(array);
    }
  };
})();
