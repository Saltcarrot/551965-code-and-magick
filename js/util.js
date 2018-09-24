'use strict';

window.util = (function () {
  var ENTER = 13;
  var ESC = 27;

  return {
    /**
     * Функция обработки нажатия клавиши ESC
     * @param evt
     * @param action
     */
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC) {
        action();
      }
    },
    /**
     * Функция обработки клавиши ENTER
     * @param evt
     * @param action
     */
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER) {
        action();
      }
    },
    /**
     * Функция вывода сообщения об ошибке
     * @param errorMessage
     */
    isError: function (errorMessage) {
      var elem = document.querySelector('.error--message');
      if (!elem) {
        var container = document.createElement('div');
        container.classList.add('error--message');
        container.textContent = errorMessage;
        document.body.insertBefore(container, document.body.children[0]);
      }
    },
    /**
     * Функция выбора любого элемента из массива
     * @param arr
     * @return {*}
     */
    getRandomElementFromArray: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    /**
     * Функция выбора максимального элемента из массива
     * @param array
     * @return {number}
     */
    getMaxElement: function (array) {
      return Math.max.apply(null, array);
    },
    /**
     * Функция выбора НЕвыбранного ранее элемента из массива
     * @param arr
     * @param arrCurrentElement
     * @return {*}
     */
    getRandomElementExcept: function (arr, arrCurrentElement) {
      var arrRandomElement;
      do {
        arrRandomElement = window.util.getRandomElementFromArray(arr);
      } while (arrRandomElement === arrCurrentElement);
      return arrRandomElement;
    },
    /**
     * Функция удаления имени класса
     * @param element
     * @param className
     */
    removeClassNameFromElement: function (element, className) {
      element.classList.remove(className);
    },
    /**
     * Функция добавления имени класса
     * @param element
     * @param className
     */
    addClassNameToElement: function (element, className) {
      element.classList.add(className);
    }
  };
})();
