Area Stack with Brush Component:

```js

import {
  default as React,
  Component,
} from 'react';

import {
  AreaStackBrush as AreaStackBrush
} from 'react-d3-brush';

// Your Setting props!

const chartSeries = [
    {
      field: 'IE',
      name: 'IE browser'
    },
    {
      field: 'Chrome',
      name: 'Chrome browser'
    },
    {
      field: 'Firefox'
    },
    {
      field: 'Safari',
      name: 'Safari browser'
    },
    {
      field: 'Opera',
      name: 'Opera browser'
    }
  ]

const brushHeight = 200;
const yBrushRange = [brushHeight - margins.top - margins.bottom, 0];

// Your other setting props, such as essential width, height...

(() => {

  React.render(
    <AreaStackBrush {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/brush/area_stack">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BRUSH AREA STACK CHART!!</button>
</a>
