# GrapesJS Basic Blocks

This plugin contains some basic blocks for the GrapesJS editor

[Demo](http://grapesjs.com/demo.html)
<br/>

Components:
`column1`
`column2`
`column3`
`column3-7`
`text`
`link`
`image`
`video`
`map`





## Options

* `blocks` Which blocks to add, default: `['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map']` (all),
* `addBasicStyle` Add basic CSS, default: `true`,
* `labelColumn1` 1 Column label, default: `1 Column`,
* `labelColumn2` 2 Column label, default: `2 Columns`,
* `labelColumn3` 2 Column label, default: `3 Columns`,
* `labelColumn37` 3/7 Column label, default: `2 Columns 3/7`,
* `labelText` Text label, default: `Text`,
* `labelLink` Link label, default: `Link`,
* `labelImage` Image label, default: `Image`,
* `labelVideo` Video label, default: `Video`,
* `labelMap` Map label, default: `Map`,





## Download

* `npm i grapesjs-blocks-basic` or `yarn add grapesjs-blocks-basic`





## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-blocks-basic.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      fromElement: 1,
      container : '#gjs',
      plugins: ['gjs-blocks-basic'],
      pluginsOpts: {
        'gjs-blocks-basic': {/* ...options */}
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-blocks-basic.git
$ cd grapesjs-blocks-basic
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build before the commit. This will also increase the patch level version of the package

```sh
$ npm run build
```





## License

BSD 3-Clause
