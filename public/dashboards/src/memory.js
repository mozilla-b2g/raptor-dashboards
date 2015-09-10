define(function() {

  return function (query) {
    var templateQuery = 'SHOW TAG VALUES FROM "memory" WITH KEY = "memory"';

    if (query.uuid) {
      templateQuery += ' WHERE uuid = "' + query.uuid + '"';
    }

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": query.source || "raptor",
      "includeAll": false,
      "label": "Memory",
      "multi": true,
      "multiFormat": "glob",
      "name": "memory",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };

});