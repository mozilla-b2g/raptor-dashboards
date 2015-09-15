define(function() {

  return function(query, override) {
    var measurement = override || 'mtbf';
    var templateQuery = 'SHOW TAG VALUES FROM "' + measurement + '" WITH KEY = "node"';

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": "raptor",
      "includeAll": false,
      "label": "Node",
      "multi": true,
      "multiFormat": "glob",
      "name": "node",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };
});