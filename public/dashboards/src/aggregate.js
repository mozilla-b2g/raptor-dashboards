define(function() {

  return function(measurement) {
    return {
      "allFormat": "glob",
      "current": {
        "text": "95% Bound",
        "value": "MEAN(value) + (1.96 * STDDEV(value) / 5.477)",
        "selected": true
      },
      "datasource": null,
      "includeAll": false,
      "label": "Aggregate",
      "multi": false,
      "multiFormat": "regex values",
      "name": "aggregate",
      "options": [
        {
          "text": "95% Bound",
          "value": "MEAN(value) + (1.96 * STDDEV(value) / 5.477)",
          "selected": true
        },
        {
          "text": "Mean",
          "value": "MEAN(value)",
          "selected": false
        },
        {
          "text": "Standard Deviation",
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