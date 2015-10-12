define(function() {

  return function(measurement) {

    return {
      "allFormat": "glob",
      "current": {},
      "datasource": null,
      "includeAll": false,
      "label": "Aggregate",
      "multi": false,
      "multiFormat": "regex values",
      "name": "aggregate",
      "options": [
        {
          "text": "95% Bound",
          "value": "MEAN(value) + (1.96 * STDDEV(value) / 5.477) as value",
          "selected": true
        },
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
      "query": "95% Bound, Mean, Values",
      "refresh": true,
      "refresh_on_load": true,
      "type": "custom"
    };
  };
});