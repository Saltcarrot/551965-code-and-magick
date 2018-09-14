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

var addClassNameFromElement = function (element, className) {
  element.classList.add(className);
};

var changeProperty = function (element, property, array) {
  element.style[property] = getRandomElementExcept(array);
};

var coatColorClickHandle = function () {
  changeProperty(wizardCoat, 'fill', COAT_COLORS);
};

var eyesColorClickHandle = function () {
  changeProperty(wizardEyes, 'fill', EYES_COLORS);
};

var fireballColorClickHandle = function () {
  changeProperty(fireball, 'backgroundColor', FIREBALL_COLORS);
};

var validationCheckHandle = function () {
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

var setupWindowOpenHandle = function () {
  removeClassNameFromElement(setup, 'hidden');

  document.addEventListener('keydown', setupWindowCloseByPressedEscHandle);

  setupClose.addEventListener('click', setupWindowCloseHandle);
  setupClose.addEventListener('keydown', setupWindowCloseByPressedEnterHandle);

  document.addEventListener('invalid', validationCheckHandle);

  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', setupWindowCloseByPressedEscHandle);
  });

  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', setupWindowCloseByPressedEscHandle);
  });

  wizardCoat.addEventListener('click', coatColorClickHandle);
  wizardEyes.addEventListener('click', eyesColorClickHandle);
  fireball.addEventListener('click', fireballColorClickHandle);
};

var setupWindowCloseHandle = function () {
  addClassNameFromElement(setup, 'hidden');

  document.removeEventListener('keydown', setupWindowCloseByPressedEscHandle);

  setupClose.removeEventListener('click', setupWindowCloseHandle);
  setupClose.removeEventListener('keydown', setupWindowCloseByPressedEnterHandle);

  wizardCoat.removeEventListener('click', coatColorClickHandle);
  wizardEyes.removeEventListener('click', eyesColorClickHandle);
  fireball.removeEventListener('click', fireballColorClickHandle);
};

var setupWindowCloseByPressedEscHandle = function (evt) {
  if (evt.keyCode === ESC) {
    addClassNameFromElement(setup, 'hidden');
  }
};

var setupWindowCloseByPressedEnterHandle = function (evt) {
  if (evt.keyCode === ENTER) {
    addClassNameFromElement(setup, 'hidden');
  }
};

setupOpen.addEventListener('click', setupWindowOpenHandle);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    setupWindowOpenHandle();
  }
});
