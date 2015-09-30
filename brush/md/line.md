Line Chart with Brush Component:

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
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],

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

<a href="/brush/line">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BRUSH LINE CHART!!</button>
</a>
