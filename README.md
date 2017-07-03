# GrapesJS Forms

This plugin adds some basic form components and blocks to help working with forms easier

[Demo](http://grapesjs.com/demo.html)
<br/>

New components:
`form`
`input`
`textarea`
`select`
`checkbox`
`radio`
`button`
`label`



## Options

* `blocks` Which blocks to add, default: `['...']` (all),
* `labelColumn1` Column label, default: '1 Column',



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
