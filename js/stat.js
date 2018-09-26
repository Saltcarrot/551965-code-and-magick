'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_COORDINATE_X = 100;
  var CLOUD_COORDINATE_Y = 10;
  var CONGRATULATION_X = CLOUD_COORDINATE_X + 20;
  var CONGRATULATION_Y = CLOUD_COORDINATE_Y + 30;
  var LINE_HEIGHT = 20;
  var GAP = 50;
  var FLOOR_GAP = 30;
  var COLUMN_WIDTH = 40;
  var MAX_COLUMN_HEIGHT = 150;

  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, CLOUD_COORDINATE_X + 10, CLOUD_COORDINATE_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_COORDINATE_X, CLOUD_COORDINATE_Y, '#fff');

    congratulationMessage(ctx, '#000', '16px PT Mono');

    showBarChart(ctx, names, times);
  };

  // Функция отрисовки окна статистики
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  // Функция отрисовки сообщения
  var congratulationMessage = function (ctx, color, fontStyle) {
    ctx.fillStyle = color;
    ctx.font = fontStyle;
    ctx.fillText('Ура, вы победили!', CONGRATULATION_X, CONGRATULATION_Y);
    ctx.fillText('Список результатов:', CONGRATULATION_X, CONGRATULATION_Y + LINE_HEIGHT);
  };

  // Функция отрисовки гистограммы
  var showBarChart = function (ctx, names, times) {
    var maxItem = window.util.getMaxElement(times);
    times.forEach(function (time, i) {
      var currentColumnX = CLOUD_COORDINATE_X + GAP + (COLUMN_WIDTH + GAP) * i;
      var currentColumnY = CLOUD_HEIGHT - FLOOR_GAP - (time * MAX_COLUMN_HEIGHT / maxItem);
      ctx.fillStyle = '#000';
      ctx.fillText(
          names[i],
          currentColumnX,
          CLOUD_HEIGHT - 10
      );
      ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + parseFloat(Math.random().toFixed(2) || 0.01) + ')';
      ctx.fillRect(
          currentColumnX,
          currentColumnY,
          COLUMN_WIDTH,
          (time * MAX_COLUMN_HEIGHT / maxItem)
      );
      ctx.fillStyle = '#000';
      ctx.fillText(
          Math.round(time),
          currentColumnX,
          currentColumnY - 10
      );
    });
  };
})();
