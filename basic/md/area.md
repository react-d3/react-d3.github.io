Area Chart Component:

```js

import {
  LineChart as LineChart
} from 'react-d3-basic';

// Your Setting props!

const chartSeries = [
      {
        field: 'close',
        name: 'Price',
        color: '#ff7f0e',
        area: true
      }
    ]

// Your other setting props

<LineChart {pass all your props and chartSeries here!} />

// And you have a beautiful chart in react!
```

<a href="/basic/area">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT AREA CHART!!</button>
</a>
