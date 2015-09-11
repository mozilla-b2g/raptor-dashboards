define(function() {

  return function(query) {
    var templateQuery = 'SHOW TAG VALUES FROM "measure" WITH KEY = "context"';

    return {
      "allFormat": "regex values",
      "current": {},
      "datasource": "raptor",
      "includeAll": true,
      "label": "Context",
      "multi": true,
      "multiFormat": "glob",
      "name": "context",
      "options": [
        {
          "text": "All",
          "value": "()"
        }
      ],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };
});