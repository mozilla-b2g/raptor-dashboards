define(function() {

  return function (query) {
    var templateQuery = 'SHOW TAG VALUES FROM "measure" WITH KEY = "device"';

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": "raptor",
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