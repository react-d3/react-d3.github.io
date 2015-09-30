Bar Group Chart with Brush Component:

```js

import {
  default as React,
  Component,
} from 'react';

import {
  BarGroupBrush as BarGroupBrush
} from 'react-d3-brush';

// Your Setting props!

const chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ]

const brushHeight = 200;
const yBrushRange = [brushHeight - margins.top - margins.bottom, 0];

// Your other setting props, such as essential width, height...

(() => {

  React.render(
    <BarGroupBrush {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/brush/bar_group">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BAR GROUP CHART!!</button>
</a>
