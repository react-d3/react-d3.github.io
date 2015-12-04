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
  // put your data here!
]

```

### Settings

your chart settings (such as settings for axis, legend, lines, chart basic settings)

```js
var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }
```

### Render!

Render it in React!

```js
ReactDOM.render(
    <Chart
      title={title}
      width={width}
      height={height}
      margins= {margins}
      >
      <LineChart
        margins= {margins}
        title={title}
        data={chartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
      />
    </Chart>
  , document.getElementById('line-user')
  )
```
