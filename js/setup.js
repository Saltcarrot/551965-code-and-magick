'use strict';

var ENTER = 13;
var ESC = 27;

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'yellow', 'blue', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupUserName = setup.querySelector('.setup-user-name');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizard = setup.querySelector('.setup-wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

var getRandomElementFromArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomElementExcept = function (arr, arrCurrentElement) {
  var arrRandomElement;
  do {
    arrRandomElement = getRandomElementFromArray(arr);
  } while (arrRandomElement === arrCurrentElement);
  return arrRandomElement;
};

var removeClassNameFromElement = function (element, className) {
  element.classList.remove(className);
};

var addClassNameToElement = function (element, className) {
  element.classList.add(className);
};

var changeStyleProperty = function (element, property, array) {
  element.style[property] = getRandomElementExcept(array);
};

var coatClickHandler = function () {
  changeStyleProperty(wizardCoat, 'fill', COAT_COLORS);
};

var eyesClickHandler = function () {
  changeStyleProperty(wizardEyes, 'fill', EYES_COLORS);
};

var fireballClickHandler = function () {
  changeStyleProperty(fireball, 'backgroundColor', FIREBALL_COLORS);
};

var nameInvalidHandler = function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  } else {
    setupUserName.setCustomValidity('');
  }
};

var deleteEventListeners = function () {
  document.removeEventListener('keydown', documentKeydownHandler);
  setupClose.removeEventListener('click', crossClickHandler);
  setupClose.removeEventListener('keydown', crossKeydownHandler);
  wizardCoat.removeEventListener('click', coatClickHandler);
  wizardEyes.removeEventListener('click', eyesClickHandler);
  fireball.removeEventListener('click', fireballClickHandler);
};

var setupClickHandler = function () {
  removeClassNameFromElement(setup, 'hidden');

  document.addEventListener('keydown', documentKeydownHandler);
  setupClose.addEventListener('click', crossClickHandler);
  setupClose.addEventListener('keydown', crossKeydownHandler);
  setupUserName.addEventListener('invalid', nameInvalidHandler);

  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', documentKeydownHandler);
  });
  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', documentKeydownHandler);
  });

  wizardCoat.addEventListener('click', coatClickHandler);
  wizardEyes.addEventListener('click', eyesClickHandler);
  fireball.addEventListener('click', fireballClickHandler);
};

var closeSetupWindow = function () {
  addClassNameToElement(setup, 'hidden');
  deleteEventListeners();
};

var crossClickHandler = function () {
  closeSetupWindow();
};

var documentKeydownHandler = function (evt) {
  if (evt.keyCode === ESC) {
    closeSetupWindow();
  }
};

var crossKeydownHandler = function (evt) {
  if (evt.keyCode === ENTER) {
    closeSetupWindow();
  }
};

setupOpen.addEventListener('click', setupClickHandler);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    setupClickHandler();
  }
});
