### Building bar group chart with brush

`React-d3-brush` support charts with brush! We support all kinds of common charts such as line chart, bar chart, bar group chart... etc.


<div id="data_brush_bar_group" class="demo home-right"></div>
<script src="/react-d3-example/dist/simple/min/bar_group_brush.min.js"></script>

<!--!!import '../../react-d3-example/simple/bar_group_brush/bar_group_brush.js';-->

```js
ReactDOM.render(
  <BarGroupBrush
    title= {"Bar Group Chart With Brush"}
    data= {data}
    width= {500}
    height= {300}
    chartSeries = {chartSeries}
    x= {x}
    xScale= {xScale}
    yTickFormat= {yTickFormat}
    brushHeight= {100}
  />
, document.getElementById('data_brush_bar_group')
)
```
