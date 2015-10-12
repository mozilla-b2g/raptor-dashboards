define(function() {

  return function(measurement) {
    var bound95 = {
      "text": "95% Bound",
      "value": "MEAN(value) + (1.96 * STDDEV(value) / 5.477)",
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
          "value": "MEAN(value)",
          "selected": false
        },
        {
          "text": "StdDev",
          "value": "STDDEV(value)",
          "selected": false
        }
      ],
      "refresh": false,
      "refresh_on_load": false,
      "type": "custom"
    };
  };
});