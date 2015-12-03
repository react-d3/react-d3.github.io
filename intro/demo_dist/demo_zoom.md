### Building bar stack with zoom

`React-d3-zoom` support charts with zoom! We support all kinds of common charts such as line chart, bar chart, bar group chart... etc.


<div id="data_zoom_bar_stack" class="demo home-right"></div>
<script src="/react-d3-example/dist/simple/min/bar_stack_zoom.min.js"></script>

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarStackZoom = require('react-d3-zoom').BarStackZoom;

(function() {
  // loading data
  var generalChartData = require('dsv?delimiter=,!../data/age.csv')

  var width = 500,
    height = 400,
    title = "Bar Stack Chart With Zoom",
    // what fields you want to build in the chart
    // field is for the field in your csv field
    // name is for the name you want to show in your legend.
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ],
    // x axis accessor
    x = function(d) {
      return d.State;
    },
    xScale = 'ordinal',
    // y tick format
    yTickFormat = d3.format(".2s");

  ReactDOM.render(
    <BarStackZoom
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      chartSeries = {chartSeries}
      x= {x}
      xScale= {xScale}
      yTickFormat= {yTickFormat}
    />
  , document.getElementById('data_zoom_bar_stack')
  )
})()
```
