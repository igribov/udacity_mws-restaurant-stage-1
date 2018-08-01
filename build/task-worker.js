'use strict';

var port = 1337; // Change this to your server port
var DATABASE_URL = 'http://localhost:' + port;

onmessage = function onmessage(_ref) {
  var _ref$data = _ref.data,
      action = _ref$data.action,
      payload = _ref$data.payload;

  console.log('Message received from main script', action, payload);

  switch (action) {

    case 'save_review':
      var timerId = setInterval(function () {
        saveReview(payload).then(function (result) {
          clearInterval(timerId);
          postMessage({ action: action, result: result });
        }).catch(function (err) {
          console.log('[worker::] try to save review.');
        });
      }, 1000);
      break;
  }
};

function saveReview(review) {
  return fetch(DATABASE_URL + '/reviews/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  }).then(function (data) {
    return data.json();
  });
}