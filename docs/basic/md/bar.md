Bar Component:

<div id="data_bar" class="demo"></div>
<script src="/react-d3-example/dist/simple/min/bar.min.js"></script>

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var BarChart = require('react-d3-basic').BarChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!../data/letter.tsv')

  var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    xLabel = "Letter",
    yLabel = "Frequency",
    yTicks = [10, "%"];

  ReactDOM.render(
    <Chart
      title={title}
      width={width}
      height={height}
      chartSeries = {chartSeries}
      >
      <BarChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xLabel= {xLabel}
        xScale= {xScale}
        yTicks= {yTicks}
        yLabel = {yLabel}
      />
    </Chart>
  , document.getElementById('data_bar')
  )
})()
```
