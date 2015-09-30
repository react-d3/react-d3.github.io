Line Chart Component:

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
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],


// Your other setting props

(() => {

  React.render(
    <LineTooltip {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/tooltip/line">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT LINE TOOLTIP CHART!!</button>
</a>
