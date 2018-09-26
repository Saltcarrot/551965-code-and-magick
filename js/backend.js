'use strict';

window.backend = (function () {
  var URL_FOR_POST = 'https://js.dump.academy/code-and-magick';
  var URL_FOR_GET = 'https://js.dump.academy/code-and-magick/data';
  return {
    setConfig: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Ошибка запроса: ' + xhr.status + ' / ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Превышено время ожидания');
      });

      xhr.timeout = 5000;

      return xhr;
    },
    load: function (onLoad, onError) {
      var xhr = window.backend.setConfig(onLoad, onError);
      xhr.open('GET', URL_FOR_GET);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = window.backend.setConfig(onLoad, onError);
      xhr.open('POST', URL_FOR_POST);
      xhr.send(data);
    }
  };
})();
