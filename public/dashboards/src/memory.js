define(function() {

  return function (measurement) {
    var templateQuery = 'SHOW TAG VALUES FROM "' + measurement + '" WITH KEY = "memory"';

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