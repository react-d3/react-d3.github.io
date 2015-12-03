### Building a simple line chart

`React-d3` is a highly modular chart library, you can create your d3 charts such as line chart or bar chart within a simple component. Besides, you can easily set different props of chart component to rendering various chart you want.

<div id="line-garbage" class="demo home-right"></div>

<!--!!import '../../react-d3-example/simple/line/line_garbage.js';-->

```js
var data = require('dsv?delimiter=,!./data.csv');
var chartSeries = [
  {
    field: 'total', // data y field
    name: 'Total',
    color: '#ff7f0e'
  }
],
x = function(d) {
  return d3.time.format("%Y-%m-%d").parse(d.month);
};

ReactDOM.render(
  <Chart
    title={"Taiwan refuse disposal"}
    width={500}
    height={300}
    margins= {margins}
    >
    <LineChart
      margins= {margins}
      title={"Taiwan refuse disposal"}
      data={data}
      width={500}
      height={300}
      chartSeries={chartSeries}
      x={x}
      xScale={"time"}
    />
  </Chart>
, document.getElementById('line-garbage')
)
```


<script src="/react-d3-example/dist/simple/min/line_garbage.min.js"></script>
