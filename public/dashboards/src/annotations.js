define(function() {

  return function(test) {
    var gaiaQuery = 'SELECT title, text FROM annotation WHERE "title" = \'Gaia\' AND "memory" = \'$memory\' AND "device" = \'$device\' AND "branch" = \'$branch\' AND "test" = \'' + test + '\' AND $timeFilter';
    var geckoQuery = 'SELECT title, text FROM annotation WHERE "title" = \'Gecko\' AND "memory" = \'$memory\' AND "device" = \'$device\' AND "branch" = \'$branch\' AND "test" = \'' + test + '\' AND $timeFilter';
    var buildIdQuery = 'SELECT title, text FROM annotation WHERE "title" = \'BuildId\' AND "memory" = \'$memory\' AND "device" = \'$device\' AND "branch" = \'$branch\' AND "test" = \'' + test + '\' AND $timeFilter';

    var annotations = {};

    annotations.gaia = {
      "name": "Gaia",
      "datasource": "raptor",
      "showLine": false,
      "iconColor": "#C0C6BE",
      "lineColor": "rgba(255, 96, 96, 0.592157)",
      "iconSize": 13,
      "enable": false,
      "query": gaiaQuery,
      "titleColumn": "title",
      "textColumn": "text"
    };

    annotations.gecko = {
      "name": "Gecko",
      "datasource": "raptor",
      "showLine": false,
      "iconColor": "#C0C6BE",
      "lineColor": "rgba(255, 96, 96, 0.592157)",
      "iconSize": 13,
      "enable": false,
      "query": geckoQuery,
      "titleColumn": "title",
      "textColumn": "text"
    };

    annotations.buildId = {
      "name": "BuildId",
      "datasource": "raptor",
      "showLine": false,
      "iconColor": "#C0C6BE",
      "lineColor": "rgba(255, 96, 96, 0.592157)",
      "iconSize": 13,
      "enable": false,
      "query": buildIdQuery,
      "titleColumn": "title",
      "textColumn": "text"
    };

    return annotations;
  };

});