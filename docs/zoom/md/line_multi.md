Multiple Line and Area Chart Component:

```js

import {
  default as React,
  Component,
} from 'react';


import {
  LineZoom as LineZoom
} from 'react-d3-zoom';


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
    <LineZoom {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/zoom/line_multi">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT MULTI LINE ZOOM CHART!!</button>
</a>
