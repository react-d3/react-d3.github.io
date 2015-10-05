Line Chart Component:

```js

import {
  default as React,
  Component,
} from 'react';

import {
  LineChart as LineChart
} from 'react-d3-basic';

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
    <LineChart {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/basic/line">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT LINE CHART!!</button>
</a>
