#### Install and Setup React-d3 packages

Pick one `react-d3` you want to install (see [gallerys](/components)). Here we are going to demo using `react-d3-basic` library to draw a simple line chart.

Install `react-d3-basic`:

```
npm install --save react-d3-basic
```

`react-d3` packages require to be bundled with `webpack` or `browserify`

Sample `webpack` setting:

```js
'use strict';

var path            = require('path'),
  webpack         = require('webpack');

var js_dist = path.join(__dirname, './dist');

module.exports = [{
  name: 'chartComponent',
  entry: {
    line: './line.jsx',
  },

  output: {
    path: js_dist,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  // we need d3 in ProvidePlugin.
  plugins: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
```
