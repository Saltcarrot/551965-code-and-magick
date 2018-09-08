'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'yellow', 'blue', 'green'];

var getRandomValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: getRandomValue(FIRST_NAMES) + ' ' + getRandomValue(SURNAMES),
      coatColor: getRandomValue(COAT_COLORS),
      eyesColor: getRandomValue(EYES_COLORS)
    };
  }

  return wizards;
};

var renderWizard = function (wizard, wizardElement) {
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var showUserDialog = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var addWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    var wizardElement = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item')
      .cloneNode(true);
    fragment.appendChild(renderWizard(wizard, wizardElement));
  });

  document.querySelector('.setup-similar-list').appendChild(fragment);
};

showUserDialog();

var wizards = generateWizards();

addWizards(wizards);

