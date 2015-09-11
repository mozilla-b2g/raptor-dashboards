define(function() {

  return function (query) {
    var templateQuery = 'SHOW TAG VALUES FROM "memory" WITH KEY = "memory"';

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": "raptor",
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