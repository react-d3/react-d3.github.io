Multiple Line and Area Chart with Brush Component:

```js

import {
  default as React,
  Component,
} from 'react';


import {
  LineBrush as LineBrush
} from 'react-d3-brush';


// Your Setting props!

const chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e'
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        area: true
      }
    ]

const brushHeight = 200;
const yBrushRange = [brushHeight - margins.top - margins.bottom, 0];

// Your other setting props, such as essential width, height...

(() => {

  React.render(
    <LineBrush {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/brush/line_multi">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BRUSH MULTI LINE CHART!!</button>
</a>
