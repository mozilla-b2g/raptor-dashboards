define(function() {

  return function (measurement) {
    var templateQuery = 'SHOW TAG VALUES FROM "' + measurement + '" WITH KEY = "device"';

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": "raptor",
      "includeAll": false,
      "label": "Device",
      "multi": true,
      "multiFormat": "regex values",
      "name": "device",
      "options": [],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };

});