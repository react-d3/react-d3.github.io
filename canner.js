var core = [{
  "name": "Xaxis",
  "link": "xaxis",
},{
  "name": "Yaxis",
  "link": "yaxis"
},{
  "name": "Grid",
  "link": "grid"
},{
  "name": "Legend",
  "link": "legend"
},{
  "name": "Chart",
  "link": "chart"
}];

var core_data = core.map(function(c) {
  return {
    "name": c.name,
    "md": "./docs/core/md/" + c.link + ".md"
  }
})

core_data.unshift({
  "name": "introduction",
  "md": "./docs/core/md/README.md"
})


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
    "md": "./docs/basic/md/" + c.link + ".md"
  }
})

basic_data.unshift({
  "name": "introduction",
  "md": "./docs/basic/md/README.md"
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
    "md": "./docs/brush/md/" + c.link + ".md"
  }
})

brush_data.unshift({
  "name": "introduction",
  "md": "./docs/brush/md/README.md"
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
    "md": "./docs/tooltip/md/" + c.link + ".md"
  }
})

tooltip_data.unshift({
  "name": "introduction",
  "md": "./docs/tooltip/md/README.md"
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
    "md": "./docs/zoom/md/" + c.link + ".md"
  }
})

zoom_data.unshift({
  "name": "introduction",
  "md": "./docs/zoom/md/README.md"
})

module.exports = [{
    "layout": "./index.hbs",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js"],
    "data": {
        "item": "A Javascript Library For Building Composable And Declarative Charts | React-D3",
        "logo": "/img/react-d3_2.png",
        "slogan": "A Javascript library for building composable and declarative charts",
        "description": "A new solution for building reusable components for interactive charts",
        "banner-img": "/img/basic/cover.png",
        "product": {
          "title": "React-d3",
          "data": [{
            "name": "Features",
            "feature": [
              {
                "name": "<span class=\"glyphicon glyphicon-stats\"></span>  High-Level Charts",
                "description": "<code>React-d3</code> support high level components which you can install and create a line chart, bar chart, pie chart... etc, within a component."
              },
              {
                "name": "<span class=\"glyphicon glyphicon-refresh\"></span>  Flexible & Reusable Components",
                "description": "<code>React-d3</code> is a highly module library. You can build new d3 charts using <code>React-d3</code> to create axis using <code>xaxis</code> component,  <code>yaxis</code> component, label using <code>label</code> component, legend <code>legend</code> component... etc, in other word, it extends the flexibility of <code>d3</code> library so you can assemble a whole new chart using core components."
              },
              {
                "name": "<span class=\"glyphicon glyphicon-retweet\"></span>  Clear Data Flow, and Better Structures",
                "description": "<code>React-d3</code> combine the power of <code>d3</code> flexibility and the data flow, structures, components, virtual DOM, and others benefits that <code>react.js</code> provide."
              }
            ]
          },{
            "name": "The Basic Charts",
            "demo": [
              {
                "md": "./intro/demo_dist/demo_chart.md"
              },
              {
                "md": "./intro/demo_dist/demo_brush.md"
              },
              {
                "md": "./intro/demo_dist/demo_zoom.md"
              },
              {
                "md": "./intro/demo_dist/demo_tooltip.md"
              }
            ]
          }]
        }
    }
  },{
    "layout": "./gallery.hbs",
    "filename": "./get_start/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
    "data": {
      "item": "Getting started react-d3",
      "logo": "/img/react-d3_2.png",
      "product": {
        "title": "react-d3",
        "data": [{
          "name": "Getting Started",
          "md": "./intro/get_start/install_pkg.md"
        },
        {
          "name": "Prepare your Data",
          "md": "./intro/get_start/data_prepare.md"
        },
        {
          "name": "Write chart",
          "md": "./intro/get_start/write_chart.md"
        },{
          "name": "Load into your html",
          "md": "./intro/get_start/load_html.md"
        },{
          "name": "Result",
          "md": "./intro/get_start/result.md"
        },{
          "name": "Code on Github",
          "md": "./intro/get_start/code.md"
        }]
      }
    }
  },{
    "layout": "./gallery.hbs",
    "filename": "./components/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
    "data": {
      "item": "react-d3 components",
      "logo": "/img/react-d3_2.png",
      "product": {
        "title": "react-d3",
        "data": [{
          "name": "Introduction",
          "md": "./intro/components/intro.md"
        }, {
          "name": "react-d3-basic",
          "md": "./intro/components/intro_basic.md"
        }, {
          "name": "react-d3-tooltip",
          "md": "./intro/components/intro_tooltip.md"
        }, {
          "name": "react-d3-zoom",
          "md": "./intro/components/intro_zoom.md"
        }, {
          "name": "react-d3-brush",
          "md": "./intro/components/intro_brush.md"
        }, {
          "name": "react-d3-core",
          "md": "./intro/components/intro_core.md"
        }]
      }
    }
  },{
    "layout": "./gallery.hbs",
    "filename": "./qa/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
    "data": {
      "item": "react-d3 QA",
      "logo": "/img/react-d3_2.png",
      "product": {
        "title": "react-d3",
        "data": [{
          "name": "QA",
          "md": "./intro/qa/intro_qa.md"
        }]
      }
    }
  },{
    "layout": "./gallery.hbs",
    "filename": "./docs/basic/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
    "data": {
        "item": "react-d3-basic",
        "logo": "/img/react-d3_2.png",
        "product": {
          "title": "react-d3",
          "data": basic_data
        }
    }
  },{
    "layout": "./gallery.hbs",
    "filename": "./docs/core/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
    "data": {
        "item": "react-d3-core",
        "logo": "/img/react-d3_2.png",
        "product": {
          "title": "react-d3",
          "data": core_data
        }
    }
  },{
    "layout": "./gallery.hbs",
    "filename": "./docs/brush/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
    "data": {
        "item": "react-d3-brush",
        "logo": "/img/react-d3_2.png",
        "slogan": "react-d3 brush charts",
        "description": "Building Brush With Line, bar, Scatter, Area Charts ... with ease.",
        "banner-img": "/img/brush/cover.png",
        "product": {
          "title": "react-d3",
          "data": brush_data
        }
    }
  },
  {
   "layout": "./gallery.hbs",
   "filename": "./docs/tooltip/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
   "data": {
     "item": "react-d3-brush",
     "logo": "/img/react-d3_2.png",
     "slogan": "react-d3 tooltip charts",
     "description": "Building Tooltip With Line, bar, Scatter, Area Charts ... with ease.",
     "banner-img": "/img/tooltip/cover.png",
     "product": {
       "title": "react-d3",
       "data": tooltip_data
     }
   }
 },{
   "layout": "./gallery.hbs",
   "filename": "./docs/zoom/index.html",
    "helpers": ["./helper/ifCond.js","./helper/multipleOr.js", './helper/id.js'],
   "data": {
     "item": "react-d3-brush",
     "logo": "/img/react-d3_2.png",
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
