define(function() {

  return function(type, test) {
    var templateQuery = 'SHOW TAG VALUES FROM "' + type + '" WITH KEY = "metric"';

    if (test) {
      templateQuery += " WHERE test = '" + test + "'";
    }

    return {
      "allFormat": "regex values",
      "current": {},
      "datasource": "raptor",
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