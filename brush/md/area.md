Area Chart Component:

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
        field: 'close',
        name: 'Price',
        color: '#ff7f0e',
        area: true
      }
    ]

const brushHeight = 200;
const yBrushRange = [brushHeight - margins.top - margins.bottom, 0];

// Your other setting props, such as essential width, height...

(() => {

  React.render(
    <LineChart {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/brush/area">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BRUSH AREA CHART!!</button>
</a>
