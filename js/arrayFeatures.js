'use strict';

window.arrayFeatures = (function () {
  return {
    getRandomElementFromArray: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getMaxElement: function (array) {
      return Math.max.apply(null, array);
    },
    getRandomElementExcept: function (arr, arrCurrentElement) {
      var arrRandomElement;
      do {
        arrRandomElement = window.arrayFeatures.getRandomElementFromArray(arr);
      } while (arrRandomElement === arrCurrentElement);
      return arrRandomElement;
    }
  };
})();
