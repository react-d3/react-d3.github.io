Bar Component:

```js

import {
  default as React,
  Component,
} from 'react';


import {
  BarChart as BarChart
} from 'react-d3-basic';

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
    <BarChart {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/basic/bar">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BAR CHART!!</button>
</a>
