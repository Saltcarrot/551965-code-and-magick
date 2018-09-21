'use strict';

(function () {
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
  var defaultTopSetupPosition = setup.style.top;
  var defaultLeftSetupPosition = setup.style.left;

  var coatClickHandler = function () {
    window.elementChanges.changeStyleProperty(wizardCoat, 'fill', COAT_COLORS);
  };

  var eyesClickHandler = function () {
    window.elementChanges.changeStyleProperty(wizardEyes, 'fill', EYES_COLORS);
  };

  var fireballClickHandler = function () {
    window.elementChanges.changeStyleProperty(fireball, 'backgroundColor', FIREBALL_COLORS);
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
    document.removeEventListener('keydown', function (evt) {
      window.util.isEscEvent(evt, closeSetupWindow);
    });
    setupClose.removeEventListener('click', crossClickHandler);
    setupClose.removeEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, closeSetupWindow);
    });
    wizardCoat.removeEventListener('click', coatClickHandler);
    wizardEyes.removeEventListener('click', eyesClickHandler);
    fireball.removeEventListener('click', fireballClickHandler);
  };

  var setupClickHandler = function () {
    window.elementChanges.removeClassNameFromElement(setup, 'hidden');

    document.addEventListener('keydown', function (evt) {
      window.util.isEscEvent(evt, closeSetupWindow);
    });
    setupClose.addEventListener('click', crossClickHandler);
    setupClose.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, closeSetupWindow);
    });
    setupUserName.addEventListener('invalid', nameInvalidHandler);

    setupUserName.addEventListener('focus', function () {
      document.removeEventListener('keydown', function (evt) {
        window.util.isEscEvent(evt, closeSetupWindow);
      });
    });
    setupUserName.addEventListener('blur', function () {
      document.addEventListener('keydown', function (evt) {
        window.util.isEscEvent(evt, closeSetupWindow);
      });
    });

    wizardCoat.addEventListener('click', coatClickHandler);
    wizardEyes.addEventListener('click', eyesClickHandler);
    fireball.addEventListener('click', fireballClickHandler);
  };

  var closeSetupWindow = function () {
    window.elementChanges.addClassNameToElement(setup, 'hidden');
    deleteEventListeners();
  };

  var crossClickHandler = function () {
    closeSetupWindow();
  };

  setupOpen.addEventListener('click', function () {
    setup.style.top = defaultTopSetupPosition;
    setup.style.left = defaultLeftSetupPosition;
    setupClickHandler();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, setupClickHandler);
  });
})();
