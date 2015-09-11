define(function() {

  return function(query) {
    var templateQuery = 'SHOW TAG VALUES FROM "measure" WITH KEY = "branch"';

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": "raptor",
      "includeAll": false,
      "label": "Branch",
      "multi": true,
      "multiFormat": "glob",
      "name": "branch",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };
});