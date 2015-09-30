Bar with Brush Component:

```js

import {
  default as React,
  Component,
} from 'react';


import {
  BarBrush as BarBrush
} from 'react-d3-brush';

// Your Setting props!

const chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ]

const brushHeight = 200;
const yBrushRange = [brushHeight - margins.top - margins.bottom, 0];

// Your other setting props, such as essential width, height...

(() => {

  React.render(
    <BarBrush {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/brush/bar">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BRUSH BAR CHART!!</button>
</a>
