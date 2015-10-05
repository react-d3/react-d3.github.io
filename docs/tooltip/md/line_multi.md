Multiple Line and Area Chart Component:

```js

import {
  default as React,
  Component,
} from 'react';


import {
  LineTooltip as LineTooltip
} from 'react-d3-tooltip';


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

// Your other setting props

(() => {

  React.render(
    <LineTooltip {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/tooltip/line_multi">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT MULTI LINE TOOLTIP CHART!!</button>
</a>
