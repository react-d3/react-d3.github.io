Bar Zoom Component:

```js

import {
  default as React,
  Component,
} from 'react';


import {
  BarZoom as BarZoom
} from 'react-d3-zoom';

// Your Setting props!

const chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ]

// Your other setting props

(() => {

  React.render(
    <BarZoom {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/zoom/bar">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BAR ZOOM CHART!!</button>
</a>
