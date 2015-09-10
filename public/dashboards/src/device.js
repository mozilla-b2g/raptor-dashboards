define(function() {

  return function (query) {
    var templateQuery = 'SHOW TAG VALUES FROM "measure" WITH KEY = "device"';

    if (query.uuid) {
      templateQuery += ' WHERE uuid = "' + query.uuid + '"';
    }

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": query.source || "raptor",
      "includeAll": false,
      "label": "Device",
      "multi": true,
      "multiFormat": "glob",
      "name": "device",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };

});