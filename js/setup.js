'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var defaultTopSetupPosition = setup.style.top;
  var defaultLeftSetupPosition = setup.style.left;
  var formSetup = document.querySelector('.setup-wizard-form');

  /**
   * Функция проверки валидации формы
   */
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

  /**
   * Функция удаления обработчиков событий
   */
  var deleteEventListeners = function () {
    document.removeEventListener('keydown', function (evt) {
      window.util.isEscEvent(evt, closeSetupWindow);
    });
    setupClose.removeEventListener('click', crossClickHandler);
    setupClose.removeEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, closeSetupWindow);
    });
  };

  /**
   * Обработчик события открытия окна кастомизации мага
   */
  var setupClickHandler = function () {
    window.util.removeClassNameFromElement(setup, 'hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');

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
    formSetup.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(formSetup), closeSetupWindow, window.util.isError);
      evt.preventDefault();
    });
  };

  /**
   * Функция закрытия окна кастомизации мага
   */
  var closeSetupWindow = function () {
    window.util.addClassNameToElement(setup, 'hidden');
    deleteEventListeners();
  };

  /**
   * Обработчик события нажатия по крестику окна кастомизации мага
   */
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
