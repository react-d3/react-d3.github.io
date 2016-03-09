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

Start the dev server. The site will be available at http://localhost:8080

```
$ npm start
```

## Rebuild website

The parent website is written in markdown, and can be found in `./intro`. After each change, build the site with:

```
$ npm run build-site
```

Additionally, we put the contents inside `./docs`. In each folder, there are two folders, `md`, and `md_origin`. `md_origin` contains the original md files which need to compile via [smashmd](https://github.com/Canner/smash-md). After each change, run build the docs with:

```
$ npm run build-docs
```

## License

MIT
