define(function() {

  return function(query, type) {
    var templateQuery = 'SHOW TAG VALUES FROM "' + type + '" WITH KEY = "metric"';

    if (query.uuid) {
      templateQuery += ' WHERE uuid = "' + query.uuid + '"';
    }

    return {
      "allFormat": "regex values",
      "current": {},
      "datasource": query.source || "raptor",
      "includeAll": true,
      "label": "Metric",
      "multi": true,
      "multiFormat": "regex values",
      "name": "metric",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "regex": "",
      "type": "query"
    };
  };

});