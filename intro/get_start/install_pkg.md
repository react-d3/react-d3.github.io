#### Install and Setup React-d3 packages

Pick one `react-d3` you want to install (see [gallery](/gallery)). Here we are going to demo using `react-d3-basic` library to draw a simple line chart.

Install `react-d3-basic`:

```
npm install --save react-d3-basic
```

`react-d3` packages require to be bundled with `webpack` or `browserify`

### Webpack

Sample `webpack` setting:

```js
'use strict';

var path = require('path');
var webpack = require('webpack');
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
  }
}];
```

### Browserify

You can use [reactify](https://github.com/andreypopp/reactify) to bundle your `.jsx` or `.js` file.

```
browserify -t reactify main.js
```
