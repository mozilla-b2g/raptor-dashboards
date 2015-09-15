require(['jquery'], function($) {

  var URLS = {
    Gaia: 'https://github.com/mozilla-b2g/gaia/commit/',
    Gecko: 'http://hg.mozilla.org/mozilla-central/rev/'
  };

  $(document).on('click', '.fa-chevron-down', function() {
    var text = $('#tooltip').text();

    if (!text) {
      return;
    }

    var data = text.split(' ');

    if (!data.length) {
      return;
    }

    var key = data[0];
    var value = data[data.length - 1];

    if (!URLS[key]) {
      return;
    }

    window.open(URLS[key] + value, '_blank');
  });

});