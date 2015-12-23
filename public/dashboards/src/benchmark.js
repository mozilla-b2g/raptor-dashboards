define(function() {

  return function () {
    var templateQuery = 'SHOW TAG VALUES FROM "benchmarks" WITH KEY = "bench-name"';

    return {
      "allFormat": "glob",
      "current": {
        "text": "octane",
        "value": "octane",
        "tags": []
      },
      "datasource": "raptor",
      "includeAll": false,
      "label": "Benchmark Set",
      "multi": false,
      "multiFormat": "glob",
      "name": "benchmarkSet",
      "options": [
        {
          "text": "Kraken",
          "value": "Kraken",
          "selected": false
        },
        {
          "text": "massive",
          "value": "massive",
          "selected": false
        },
        {
          "text": "octane",
          "value": "octane",
          "selected": true
        },
        {
          "text": "smoketest",
          "value": "smoketest",
          "selected": false
        },
        {
          "text": "webaudio-padenot",
          "value": "webaudio-padenot",
          "selected": false
        }
      ],
      "query": templateQuery,
      "refresh": true,
      "refresh_on_load": true,
      "type": "query"
    };
  };

});