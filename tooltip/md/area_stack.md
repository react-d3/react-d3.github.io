Area Stack Tooltip Component:

```js

import {
  default as React,
  Component,
} from 'react';

import {
  AreaStackTooltip as AreaStackTooltip
} from 'react-d3-tooltip';

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

// Your other setting props

(() => {

  React.render(
    <AreaStackTooltip {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/tooltip/area_stack">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT AREA STACK TOOLTIP CHART!!</button>
</a>
