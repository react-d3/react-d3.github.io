### Building bar stack with zoom

`React-d3-zoom` support charts with zoom! We support all kinds of common charts such as line chart, bar chart, bar group chart... etc.


<div id="data_zoom_bar_stack" class="demo home-right"></div>
<script src="/react-d3-example/dist/simple/min/bar_stack_zoom.min.js"></script>

<!--!!import '../../react-d3-example/simple/bar_stack_zoom/bar_stack_zoom.js';-->

```js
ReactDOM.render(
  <BarStackZoom
    title= {Bar Stack Chart With Zoom""}
    data= {data}
    width= {500}
    height= {400}
    chartSeries = {chartSeries}
    x= {x}
    xScale= {"ordinal"}
    yTickFormat= {yTickFormat}
  />
, document.getElementById('data_zoom_bar_stack')
)
```
