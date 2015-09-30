Multiple Line and Area Chart Component:

```js

import {
  LineChart as LineChart
} from 'react-d3-basic';


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

<LineChart {pass all your props and chartSeries here!} />

// And you have a beautiful chart in react!
```

<a href="/basic/line_multi">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT MULTI LINE CHART!!</button>
</a>
