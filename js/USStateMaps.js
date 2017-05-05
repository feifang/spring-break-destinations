var map1 = AmCharts.makeChart( "map-count", {
  type: "map",
  "theme": "default",
  colorSteps: 8,
  "legend": {
      "useMarkerColorForLabels": false,
      "equalWidths": true,
      "align": "right",
      "marginTop": 350,
      "valueWidth": 0,
      "maxColumns": 4,
      "data":[{title: ">3000", color: "#8c2d04"},{title: "1000-3000", color: "#cc4c02"},{title: "500-1000", color: "#ec7014"},{title: "300-500",color: "#fe9929"},{title: "200-300", color: "#fec44f"},{title: "100-200", color: "#fee391"},{title: "50-100", color: "#fff7bc"},{title: "0-50", color: "#ffffe5"}]
  },
  dataProvider: {
    map: "usaLow",
    areas: countByStateAll
  },
  areasSettings: {
     autoZoom: true,
     balloonText: "[[title]]: [[value]] tweets <br> [[percent]]% of total tweets"
  },
  "balloon": {
     maxWidth: 175
  },
  "export": {
     enabled: false
  }
} );
var map2 = AmCharts.makeChart( "map-sentiment", {
  type: "map",
  "theme": "default",
  "legend": {
     "useMarkerColorForLabels": false,
      "equalWidths": true,
      "align": "right",
      "marginTop": 350,
      "valueWidth": 0,
      "maxColumns":5,
      "data":[{title: ">0.5", color: "#b30000"},{title: "0.4-0.5", color: "#e34a33"},{title: "0.3-0.4", color: "#fc8d59"},{title: "0.275-0.3",color: "#fdbb84"},{title: "0.25-0.275", color: "#fdd49e"},{title: "0.2-0.25", color: "#fef0d9"},{title: "0.15-0.2", color: "#eff3ff"},{title: "0.1-0.15", color: "#bdd7e7"},{title: "0-0.1", color: "#6baed6"},{title: "<=0", color: "#2171b5"}]
  },
  dataProvider: {
    map: "usaLow",
    areas: sentimentByStateAll
  },

  areasSettings: {
    autoZoom: true,
     balloonText: "[[title]]: [[value]]"
  },
   "balloon": {
   maxWidth: 175
  },
  "export": {
    "enabled": false
  }

} );
