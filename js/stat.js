'use strict';

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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_COORDINATE_X + 10, CLOUD_COORDINATE_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_COORDINATE_X, CLOUD_COORDINATE_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CONGRATULATION_X, CONGRATULATION_Y);
  ctx.fillText('Список результатов:', CONGRATULATION_X, CONGRATULATION_Y + LINE_HEIGHT);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(
        names[i],
        CLOUD_COORDINATE_X + GAP + (COLUMN_WIDTH + GAP) * i,
        CLOUD_HEIGHT - 10
    );
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_COORDINATE_X + GAP + (COLUMN_WIDTH + GAP) * i,
        CLOUD_HEIGHT - FLOOR_GAP - (times[i] * MAX_COLUMN_HEIGHT / maxTime) - 10
    );

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
    }

    ctx.fillRect(
        CLOUD_COORDINATE_X + GAP + (COLUMN_WIDTH + GAP) * i,
        CLOUD_HEIGHT - FLOOR_GAP - (times[i] * MAX_COLUMN_HEIGHT / maxTime),
        COLUMN_WIDTH,
        (times[i] * MAX_COLUMN_HEIGHT / maxTime)
    );
  }
};
