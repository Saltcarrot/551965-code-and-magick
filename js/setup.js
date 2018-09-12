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
var submit = setup.querySelector('.setup-submit');

var wizard = setup.querySelector('.setup-wizard');

var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');

var fireball = setup.querySelector('.setup-fireball-wrap');

// var waizardApperance = setup.querySelector('.setup-wizard-appearance');

var coatColor;
var eyesColor;
var fireballColor;

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

var showUI = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', closeUIUsingESC); // закрыть окно нажатием ESC

  setupClose.addEventListener('click', closeUI); // закрыть окно, кликнув по крестику
  setupClose.addEventListener('keydown', closeUIUsingENTER); // закрыть окно, нажав на крестике ENTER

  submit.addEventListener('click', closeUI); // закрыть окно, отправив форму кликом
  submit.addEventListener('keydown', closeUIUsingENTER); // закрыть окно, отправив форму ENTER
};

var closeUI = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', closeUIUsingESC);

  setupClose.removeEventListener('click', closeUI);
  setupClose.removeEventListener('keydown', closeUIUsingENTER);

  submit.removeEventListener('click', closeUI);
  submit.removeEventListener('keydown', closeUIUsingENTER);
};

var closeUIUsingESC = function (evt) {
  if (evt.keyCode === ESC) {
    setup.classList.add('hidden');
  }
};

var closeUIUsingENTER = function (evt) {
  if (evt.keyCode === ENTER) {
    setup.classList.add('hidden');
  }
};

setupOpen.addEventListener('click', function () {
  showUI();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    showUI();
  }
});

setupUserName.addEventListener('invalid', function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  } else {
    setupUserName.setCustomValidity('');
  }
});

wizardCoat.addEventListener('click', function () {
  coatColor = getRandomElementExcept(COAT_COLORS);
  wizardCoat.style.fill = coatColor;
  // waizardApperance.querySelector('.coat-color').setAttribute('value', coatColor);
});

wizardEyes.addEventListener('click', function () {
  eyesColor = getRandomElementExcept(EYES_COLORS);
  wizardEyes.style.fill = eyesColor;
  // waizardApperance.querySelector('.eyes-color').setAttribute('value', eyesColor);
});

fireball.addEventListener('click', function () {
  fireballColor = getRandomElementExcept(FIREBALL_COLORS);
  fireball.style.backgroundColor = fireballColor;
  // fireball.querySelector('input').setAttribute('value', fireballColor);
});
