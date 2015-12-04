# react-d3.github.io

reactd3.org site, see http://reactd3.org

## Develop

Init repo

```
$ npm run init
```

Update git submodules

```
$ npm run sync
```

## Rebuild website

first you have to install `canner-core` to generate html in http://reactd3.org

```
npm install -g canner-core
```

building web pages.

```
canner-core build canner.js
```

----

We build most of our document in markdown.

Inside `./docs` folder you can see there are two folders in each folder `md`, `md_origin`. `md_origin` is the original md files which need to compile via [smashmd](https://github.com/Canner/smash-md).

You can just type

```
make smashmd
```

to recompile the whole original markdown files.


## License

MIT
