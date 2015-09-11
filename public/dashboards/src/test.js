define(function() {

  return function (query) {
    var templateQuery = 'SHOW TAG VALUES FROM /$metric/ WITH KEY = "test"';

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": "raptor",
      "includeAll": false,
      "label": "Test",
      "multi": false,
      "multiFormat": "glob",
      "name": "test",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  }

});