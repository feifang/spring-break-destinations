var chart1 = AmCharts.makeChart("top-states", {
  "type": "serial",
  "theme": "light",
  "marginRight": 70,
  "dataProvider": topStatesCountWithSentiment,
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left",
    "title": "Amount of Tweets"
  }],
  "startDuration": 1,
  "graphs": [{
    "balloonText": "<b>[[category]]: [[value]] tweets</b><br><b>Sentiment Score: [[score]] </b>",
    "fillColorsField": "color",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "amount"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "name",
  "categoryAxis": {
    // "title": "Top States",
    "gridPosition": "start",
    "labelRotation": 45
  },
  "chartScrollbar": {},
  "valueScrollbar": {
    "autoGridCount": true
  },
  "export": {
    "enabled": true
  }

});
