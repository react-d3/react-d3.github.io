# react-d3-core

<a href="/docs/core">
  <button type="button" class="btn btn-success">READ MORE DOCUMENT</button>
</a>

<a href="https://github.com/react-d3/react-d3-core">
  <button type="button" class="btn btn-default">OPEN SOURCE ON GITHUB</button>
</a>

`react-d3-core` is includes the core components of the `react-d3` projects. The reason we extract the main component here, is because of reusability. For instance, we use grid, axes over and over again in line chart, area chart, bar chart ... etc. If we move these system a little bit forward to a react component we can declare it more easily in the future.  

Such as we need xaxis, yaxis, grid in a new chart.  We can install `react-d3-core` and import them.

## Supported Components

#### Container

- Chart
- Svg
- Title

#### Axis

- Axis
- Xaxis
- Yaxis

#### Grid

- xGrid
- yGrid

#### Label

- Label

#### Legend

- Legend
