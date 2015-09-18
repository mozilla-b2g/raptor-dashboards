define(function() {

  return function(measurement) {
    var templateQuery = 'SHOW TAG VALUES FROM "' + measurement + '" WITH KEY = "branch"';

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": "raptor",
      "includeAll": false,
      "label": "Branch",
      "multi": true,
      "multiFormat": "regex values",
      "name": "branch",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };
});