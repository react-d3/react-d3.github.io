Scatter Plot with Brush Component:

```js


import {
  default as React,
  Component,
} from 'react';

import {
  ScatterBrush as ScatterBrush
} from 'react-d3-brush';


// Your Setting props!

const chartSeries = [
      {
        field: 'close',
        name: 'Price',
        color: '#ff7f0e',
        area: true
      }
    ]

// or multi

const chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        symbol: "cross"
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c',
        symbol: 'diamond'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        symbol: 'triangle-down'
      }
    ]

const brushHeight = 200;
const yBrushRange = [brushHeight - margins.top - margins.bottom, 0];

// Your other setting props, such as essential width, height...

(() => {

  React.render(
    <ScatterBrush {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()


// And you have a beautiful chart in react!
```

<a href="/basic/scatter">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BRUSH SCATTER PLOT!!</button>
</a>
