'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];

  var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWizard = document.querySelector('.setup-fireball-wrap');

  coatWizard.addEventListener('click', function () {
    var wizardCoatColor = window.util.getRandomElementExcept(COAT_COLORS);
    var inputWizardCoatColor = document.querySelector('input[type=hidden][name="coat-color"]');
    coatWizard.style.fill = wizardCoatColor;
    inputWizardCoatColor.value = wizardCoatColor;
  });

  eyesWizard.addEventListener('click', function () {
    var wizardEyesColor = window.util.getRandomElementExcept(EYES_COLORS);
    var inputWizardEyesColor = document.querySelector('input[type=hidden][name="eyes-color"]');
    eyesWizard.style.fill = wizardEyesColor;
    inputWizardEyesColor.value = wizardEyesColor;
  });

  fireballWizard.addEventListener('click', function () {
    var wizardFireballColor = window.util.getRandomElementExcept(FIREBALL_COLORS);
    var inputFireballColor = fireballWizard.querySelector('input[type=hidden]');
    fireballWizard.style.background = wizardFireballColor;
    inputFireballColor.value = wizardFireballColor;
  });
})();
