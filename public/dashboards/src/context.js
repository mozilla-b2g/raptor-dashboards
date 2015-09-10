define(function() {

  return function(query) {
    var templateQuery = 'SHOW TAG VALUES FROM "measure" WITH KEY = "context"';

    if (query.uuid) {
      templateQuery += ' WHERE uuid = "' + query.uuid + '"';
    }

    return {
      "allFormat": "regex values",
      "current": {},
      "datasource": query.source || "raptor",
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