### Building a simple line chart

`React-d3` is a highly modular chart library, you can create your d3 charts such as line chart or bar chart within a simple component. Besides, you can easily set different props of chart component to rendering various chart you want.

<div id="line-garbage" class="demo home-right"></div>

<!--!!import '../../react-d3-example/simple/line/line_garbage.js';-->

#### Data - CSV Table

```js
month,total,incineration,garbageBury,largeGarbageRecycle,foodWaste,recycle,other,average
2001M01,770095,295355,339023,0,0,75630,60087,1.124
2001M02,629350,248283,256351,0,0,74732,49983,1.016
2001M03,663170,271344,264674,0,0,77137,50015,0.966
...
...
...
```

We provide low level api for you to assemble your own chart.

```js
ReactDOM.render(
  <Chart
    width= {width}
    height= {height}
    data= {data}
    chartSeries= {chartSeries}
    x= {x}
    >
    // build line chart
    <Line
      chartSeries= {series1}
    />
    // build area chart
    <Area
      chartSeries= {series2}
    />
    <Xaxis/>
    <Yaxis/>
    <Xgrid/>
    <Ygrid/>
  </Chart>
, document.getElementById('line-garbage')
)
```

We also provide high level chart api.

```js
ReactDOM.render(
  <Chart
    title={"Taiwan refuse disposal"}
    width={500}
    height={300}
    margins= {margins}
    >
    <LineChart
      margins= {margins}
      title={"Taiwan refuse disposal"}
      data={data}
      width={500}
      height={300}
      chartSeries={chartSeries}
      x={x}
      xScale={"time"}
    />
  </Chart>
, document.getElementById('line-garbage')
)
```


<script src="/react-d3-example/dist/simple/min/line_garbage.min.js"></script>

---
