Create a new file called `line.jsx` (which we have setup webpack to compile).


### Require Libraries

We need to require some library we need to use:

```js
// first of course react!
var React = require('react');
// second, ReactDOM.
var ReactDOM = require('react-dom');
// require `react-d3-basic` for Line chart component.
var LineChart = require('react-d3-basic').LineChart;
```

Or if you're using ES6 modules:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'react-d3-basic';
```

### Load

Load your data using webpack

```js
var chartData = require('dsv?delimiter=,!../../data/garbage.csv');
```

Not using webpack

```js
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
  <LineChart
    margins= {margins}
    title={title}
    data={chartData}
    width={width}
    height={height}
    chartSeries={chartSeries}
    x={x}
  />
  , document.getElementById('line-user')
)
```

### Full code in your javascript

```js
"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require('react-d3-basic').LineChart;

(function() {
  // load your general data
  var chartData = require('json!../data/user_sample.json');

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

  ReactDOM.render(
    <LineChart
      margins= {margins}
      title={title}
      data={chartData}
      width={width}
      height={height}
      chartSeries={chartSeries}
      x={x}
    />
    , document.getElementById('line-user')
  )
})()
```
