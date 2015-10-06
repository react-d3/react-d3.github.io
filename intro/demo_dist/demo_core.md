# Simple xaxis component

This is an example of building a xais using `react-d3`, `react-d3` provide some core components such as xaxis, yaxis, label, legend components so you don't need to build it over and over again. And another benefit is to track your data easier

<div id="garbage-xaxis" class="demo"></div>
<script src="../../react-d3-example/dist/min/es5/xaxis_garbage.min.js"></script>

```js
"use strict";

var React = require('react');
var Xaxis = require('react-d3-core').Xaxis;

(function() {
  // load your general data, for building xDomain.
  var chartData = require("dsv?delimiter=,!../data/garbage.csv");
  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  // setting you svg width
  var width = 500,
    // setting your svg height
    height = 100,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your x Axis accessor
    x = function(d) {
      return parseDate(d.month);
    },
    // set your x domain
    xDomain = d3.extent(chartData, function(d){ return x(d) }),
    // set your x range
    xRange = [0, width - margins.left - margins.right],
    // your scale type 'linear', 'ordinal', 'time'... etc.
    xScale = 'time',
    // set your label name
    xLabel = "Month";

  React.render(
    <svg width={width} height={height}>
      <Xaxis
        width= {width}
        height= {height}
        margins= {margins}
        x= {x}
        xDomain= {xDomain}
        xRange = {xRange}
        xScale= {xScale}
        xLabel= {xLabel}
      />
    </svg>
  , document.getElementById('garbage-xaxis')
  )
})()
```


## Simple xaxis component with React state change

This example demo the power of storing data in state and props, makes you build your d3 charts more simple. And make data flow in charts more clear.

**Click the xaxis below**

<div id="click-xaxis" class="demo"></div>
<script src="../../react-d3-example/dist/min/es5/xaxis_click.min.js"></script>

```js
"use strict";

var React = require('react');
var Xaxis = require('react-d3-core').Xaxis;

(function() {
  // load your general data, for building xDomain.
  var chartData = require("dsv?delimiter=,!../data/garbage.csv");
  // your date format, use for parsing
  var parseDate = d3.time.format("%YM%m").parse;

  // setting you svg width
  var width = 400,
    // setting your svg height
    height = 100,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your x Axis accessor
    x = function(d) {
      return parseDate(d.month);
    },
    // set your x domain
    xDomain = d3.extent(chartData, function(d){ return x(d) }),
    // set your x range
    xRange = [0, width - margins.left - margins.right],
    // your scale type 'linear', 'ordinal', 'time'... etc.
    xScale = 'time',
    // set your label name
    xLabel = "Month";

  var ClickAxis = React.createClass({
    getInitialState: function() {
      return {
        expend: false
      }
    },
    _onClick: function() {
      this.setState({
        expend: !this.state.expend
      })
    },
    render: function() {
      var expend = this.state.expend;
      var newWidth = expend? (width + 100): width;
      var newRange = expend? ([0, width - margins.left - margins.right + 100]): ([0, width - margins.left - margins.right]);

      return (
        <svg width={newWidth} height={height} onClick={this._onClick}>
          <Xaxis
            width= {newWidth}
            height= {height}
            margins= {margins}
            x= {x}
            xDomain= {xDomain}
            xRange = {newRange}
            xScale= {xScale}
            xLabel= {xLabel}
          />
        </svg>
      )
    }
  })

  React.render(
    <ClickAxis />
  , document.getElementById('click-xaxis')
  )
})()
```

<a href="/docs/core">
  <button type="button" class="btn btn-danger btn-lg">See more Core components!</button>
</a>
