Bar Group Chart Component:

```js

import {
  default as React,
  Component,
} from 'react';

import {
  BarGroupChart as BarGroupChart
} from 'react-d3-basic';

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

// Your other setting props

(() => {

  React.render(
    <BarGroupChart {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/basic/bar_group">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT BAR GROUP CHART!!</button>
</a>
