#### Data Format

First prepare your data you want to show on your chart.

`react-d3` **only support one kind of data format, which is an array with objects (the objects have to have the same keys)**. Which means you have to have a data like below for example.


```js
[
  {
    name: "Lavon Hilll I",
    BMI: 20.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1
  },
  {
    name: "Clovis Pagac",
    BMI: 24.28,
    age: 26,
    birthday: "1995-11-10T00:00:00.000Z",
    city: "South Eldredtown",
    married: false,
    index: 3
  },
  {
    name: "Gaylord Paucek",
    BMI: 24.41,
    age: 30,
    birthday: "1975-06-12T00:00:00.000Z",
    city: "Koeppchester",
    married: true,
    index: 5
  },
  {
    name: "Ashlynn Kuhn MD",
    BMI: 23.77,
    age: 32,
    birthday: "1985-08-09T00:00:00.000Z",
    city: "West Josiemouth",
    married: false,
    index: 6
  },

  ...
]
```

#### The way to load you data

If you have a csv, tsv file, you can use a csv converter to convert it to JSON format. Or using `webpack` to require your csv via `dsv-loader`

```js
var data = require('dsv?delimiter=\t!./data/letter.tsv')

// or

var data = require('csv?delimiter=,!./data/test.csv')
```
