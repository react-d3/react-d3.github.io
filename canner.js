
var charts = [{
  "name": "Line",
  "link": "line",
},{
  "name": "Line Multiple",
  "link": "line_multi"
},{
  "name": "Area",
  "link": "area"
},{
  "name": "Area Stack",
  "link": "area_stack"
},{
  "name": "Bar",
  "link": "bar"
},{
  "name": "Bar Group",
  "link": "bar_group"
},{
  "name": "Bar Stack",
  "link": "bar_stack"
},{
  "name": "Scatter",
  "link": "scatter"
},{
  "name": "Pie",
  "link": "pie"
},{
  "name": "Donut",
  "link": "donut"
}];

var basic_data = charts.map(function(c) {
  return {
    "name": c.name,
    "chart": "<div id='data_" + c.link + "'></div><script src='/react-d3-basic/example/dist/min/" + c.link + ".min.js'></script>",
    "md": "./basic/md/" + c.link + ".md"
  }
})

basic_data.unshift({
  "name": "introduction",
  "md": "./react-d3-basic/README.md"
})

var brush_charts = [{
  "name": "Line",
  "link": "line",
},{
  "name": "Line Multiple",
  "link": "line_multi"
},{
  "name": "Area Stack",
  "link": "area_stack"
},{
  "name": "Bar",
  "link": "bar"
},{
  "name": "Bar Group",
  "link": "bar_group"
},{
  "name": "Bar Stack",
  "link": "bar_stack"
},{
  "name": "Scatter",
  "link": "scatter"
}];

var brush_data = brush_charts.map(function(c) {
  return {
    "name": c.name,
    "chart": "<div id='data_brush_" + c.link + "'></div><script src='/react-d3-brush/example/dist/min/brush_" + c.link + ".min.js'></script>",
    "md": "./brush/md/" + c.link + ".md"
  }
})

brush_data.unshift({
  "name": "introduction",
  "md": "./react-d3-brush/README.md"
})

var tooltip_charts = [{
  "name": "Line",
  "link": "line",
},{
  "name": "Line Multiple",
  "link": "line_multi"
},{
  "name": "Area Stack",
  "link": "area_stack"
},{
  "name": "Bar",
  "link": "bar"
},{
  "name": "Bar Group",
  "link": "bar_group"
},{
  "name": "Bar Stack",
  "link": "bar_stack"
},{
  "name": "Scatter",
  "link": "scatter"
},{
  "name": "pie",
  "link": "pie"
}];

var tooltip_data = tooltip_charts.map(function(c) {
  return {
    "name": c.name,
    "chart": "<div id='data_tooltip_" + c.link + "'></div><script src='/react-d3-tooltip/example/dist/min/tooltip_" + c.link + ".min.js'></script>",
    "md": "./tooltip/md/" + c.link + ".md"
  }
})

tooltip_data.unshift({
  "name": "introduction",
  "md": "./react-d3-tooltip/README.md"
})


var zoom_charts = [{
  "name": "Line",
  "link": "line",
},{
  "name": "Line Multiple",
  "link": "line_multi"
},{
  "name": "Area Stack",
  "link": "area_stack"
},{
  "name": "Bar",
  "link": "bar"
},{
  "name": "Bar Group",
  "link": "bar_group"
},{
  "name": "Bar Stack",
  "link": "bar_stack"
},{
  "name": "Scatter",
  "link": "scatter"
}];

var zoom_data = zoom_charts.map(function(c) {
  return {
    "name": c.name,
    "chart": "<div id='data_zoom_" + c.link + "'></div><script src='/react-d3-zoom/example/dist/min/zoom_" + c.link + ".min.js'></script>",
    "md": "./zoom/md/" + c.link + ".md"
  }
})

zoom_data.unshift({
  "name": "introduction",
  "md": "./react-d3-zoom/README.md"
})

module.exports = [
  {
    "layout": "./index.hbs",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
        "item": "react-d3",
        "logo": "https://avatars0.githubusercontent.com/u/14354544?v=3&s=200",
        "slogan": "Painless building d3 charts",
        "description": "A whole new solution for building reusable components for d3 charts",
        "banner-img": "/img/basic/cover.png",
        "product": {
          "title": "react-d3",
          "data": [{
            "name": "Introduction",
            "md": "./intro/intro.md"
          }, {
            "name": "react-d3-core",
            "md": "./react-d3-core/README.md"
          }, {
            "name": "react-d3-basic",
            "md": "./intro/intro_basic.md"
          }, {
            "name": "react-d3-tooltip",
            "md": "./intro/intro_tooltip.md"
          }, {
            "name": "react-d3-zoom",
            "md": "./intro/intro_zoom.md"
          }, {
            "name": "react-d3-brush",
            "md": "./intro/intro_brush.md"
          }]
        }
    }
  }, {
    "layout": "./gallery.hbs",
    "filename": "./basic/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
        "item": "react-d3-basic",
        "logo": "https://avatars0.githubusercontent.com/u/14354544?v=3&s=200",
        "slogan": "react-d3 basic charts",
        "description": "Building Line, bar, Scatter, Area Charts ... with ease.",
        "banner-img": "/img/basic/cover.png",
        "product": {
          "title": "react-d3",
          "data": basic_data
        }
    }
  }, {
    "layout": "./gallery.hbs",
    "filename": "./brush/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
        "item": "react-d3-brush",
        "logo": "https://avatars0.githubusercontent.com/u/14354544?v=3&s=200",
        "slogan": "react-d3 brush charts",
        "description": "Building Brush With Line, bar, Scatter, Area Charts ... with ease.",
        "banner-img": "/img/brush/cover.png",
        "product": {
          "title": "react-d3",
          "data": brush_data
        }
    }
  }, {
    "layout": "./gallery.hbs",
    "filename": "./tooltip/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
      "item": "react-d3-brush",
      "logo": "https://avatars0.githubusercontent.com/u/14354544?v=3&s=200",
      "slogan": "react-d3 tooltip charts",
      "description": "Building Tooltip With Line, bar, Scatter, Area Charts ... with ease.",
      "banner-img": "/img/tooltip/cover.png",
      "product": {
        "title": "react-d3",
        "data": tooltip_data
      }
    }
  }, {
    "layout": "./gallery.hbs",
    "filename": "./zoom/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
      "item": "react-d3-brush",
      "logo": "https://avatars0.githubusercontent.com/u/14354544?v=3&s=200",
      "slogan": "react-d3 zoom charts",
      "description": "Building Tooltip With Line, bar, Scatter, Area Charts ... with ease.",
      "banner-img": "/img/zoom/cover.png",
      "product": {
        "title": "react-d3",
        "data": zoom_data
      }
    }
  }
]
