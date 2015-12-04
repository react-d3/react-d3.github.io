Create a new file called `line.jsx` (which we have setup webpack to compile).


### Require Libraries

we need to require some library we need to use:

```js
// first of course react!
var React = require('react');
// require `react-d3-core` for Chart component, which help us build a blank svg and chart title.
var Chart = require('react-d3-core').Chart;
// require `react-d3-basic` for Line chart component.
var LineChart = require('react-d3-basic').LineChart;
```

### Load

load your data

```js

// using webpack
var chartData = require('dsv?delimiter=,!../../data/garbage.csv');

// not using webpack
var chartData = [

]

```

### Settings

your chart settings (such as settings for axis, legend, lines, chart basic settings)

```js
// your date format, use for parsing
var parseDate = d3.time.format("%YM%m").parse;

var title = "Taiwan refuse disposal",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'total',
        name: 'Total',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return parseDate(d.month);
    },
    xScale = 'time';
```

### Render!

Render it in React!

```js
ReactDOM.render(
    <Chart
      title={title}
      >
      <LineChart
        title={title}
        data={chartData}
        chartSeries={chartSeries}
        x={x}
        xScale={xScale}
      />
    </Chart>
  , document.getElementById('line-garbage')
  )
```
