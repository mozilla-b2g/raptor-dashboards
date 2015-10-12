define(function() {

  return function(measurement) {
    var bound95 = {
      "text": "95% Bound",
      "value": "MEAN(value) + (1.96 * STDDEV(value) / 5.477) as value",
      "selected": true
    };

    return {
      "allFormat": "glob",
      "current": bound95,
      "datasource": null,
      "includeAll": false,
      "label": "Aggregate",
      "multi": false,
      "multiFormat": "regex values",
      "name": "aggregate",
      "options": [
        bound95,
        {
          "text": "Mean",
          "value": "MEAN(value) as value",
          "selected": false
        },
        {
          "text": "Values",
          "value": "value",
          "selected": false
        }
      ],
      "query": "MEAN(value) + (1.96 * STDDEV(value) / 5.477) as value",
      "refresh": true,
      "refresh_on_load": true,
      "type": "custom"
    };
  };
});