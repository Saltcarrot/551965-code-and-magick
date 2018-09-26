'use strict';

(function () {
  /**
   * Функция добавления элементов (магов) в документ
   * @param wizards
   */
  var addWizards = function (wizards) {
    var wizardsTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
    var wizardsList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    /**
     * Функция рендеринга мага
     * @param wizard
     * @returns {Node}
     */
    var renderWizard = function (wizard) {
      var wizardElement = wizardsTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

      return wizardElement;
    };

    wizards.slice(0, 4).forEach(function (elem) {
      fragment.appendChild(renderWizard(elem));
    });

    wizardsList.appendChild(fragment);
  };

  window.backend.load(addWizards, window.util.isError);
})();
