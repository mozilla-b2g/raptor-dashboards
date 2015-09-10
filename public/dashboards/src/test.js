define(function() {

  return function (query) {
    var templateQuery = 'SHOW TAG VALUES FROM /$metric/ WITH KEY = "test"';

    if (query.uuid) {
      templateQuery += ' WHERE uuid = "' + query.uuid + '"';
    }

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": query.source || "raptor",
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