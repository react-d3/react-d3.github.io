### Building pie chart with tooltip

`React-d3-tooltip` support charts with tooltip! We support all kinds of common charts such as line chart, bar chart, bar group chart... etc.


<div id="data_tooltip_pie" class="demo home-right"></div>
<script src="/react-d3-example/dist/simple/min/pie_tooltip.min.js"></script>

<!--!!import '../../react-d3-example/simple/pie_tooltip/pie_tooltip.js';-->

```js
ReactDOM.render(
  <PieTooltip
    title= {title}
    data= {generalChartData}
    width= {width}
    height= {height}
    chartSeries= {chartSeries}
    value = {value}
    name = {name}
  />
, document.getElementById('data_tooltip_pie')
)
```
