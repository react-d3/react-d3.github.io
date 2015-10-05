Line Chart Component:

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
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],


// Your other setting props

(() => {

  React.render(
    <LineZoom {pass all your props and chartSeries here!} />,
    document.getElementById('data_container')
  )
})()

// And you have a beautiful chart in react!
```

<a href="/zoom/line">
  <button type="button" class="btn btn-success">LEARN MORE ABOUT LINE ZOOM CHART!!</button>
</a>
