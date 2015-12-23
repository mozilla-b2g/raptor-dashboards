define(function() {

  return function () {
    var templateQuery = 'SHOW TAG VALUES FROM "benchmarks" WITH KEY = "device"';

    return {
      "allFormat": "glob",
      "current": {
        "text": "aries",
        "value": "aries"
      },
      "datasource": "raptor",
      "includeAll": false,
      "label": "Device",
      "multi": false,
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