# GrapesJS Basic Blocks

This plugin contains some basic blocks for the GrapesJS editor

[Demo](http://grapesjs.com/demo.html)
<br/>

## Summary

- Plugin name: `gjs-blocks-basic`
- Blocks: `column1`, `column2`, `column3`, `column3-7`, `text`, `link`, `image`, `video`, `map`

## Options

| Option          | Description                      | Default                                                                                         |
| --------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `blocks`        | Which blocks to add              | `['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map']` (all) |
| `category`      | Category name                    | `Basic`                                                                                         |
| `flexGrid`      | Make use of flexbox for the grid | `false`                                                                                         |
| `stylePrefix`   | Classes prefix                   | `gjs-`                                                                                          |
| `addBasicStyle` | Use basic CSS for blocks         | `true`                                                                                          |
| `labelColumn1`  | 1 Column label                   | `1 Column`                                                                                      |
| `labelColumn2`  | 2 Columns label                  | `2 Columns`                                                                                     |
| `labelColumn3`  | 3 Columns label                  | `3 Columns`                                                                                     |
| `labelColumn37` | 3/7 Columns label                | `2 Columns 3/7`                                                                                 |
| `labelText`     | Text label                       | `Text`                                                                                          |
| `labelLink`     | Link label                       | `Link`                                                                                          |
| `labelImage`    | Image label                      | `Image`                                                                                         |
| `labelVideo`    | Video label                      | `Video`                                                                                         |
| `labelMap`      | Map label                        | `Map`                                                                                           |
| `rowHeight`     | Initial height                   | `75`                                                                                          |

## Download

* CDN
  * `https://unpkg.com/grapesjs-blocks-basic`
* NPM
  * `npm i grapesjs-blocks-basic`
* GIT
  * `git clone https://github.com/GrapesJS/blocks-basic.git`

## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-blocks-basic.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    fromElement: 1,
    container: "#gjs",
    plugins: ["gjs-blocks-basic"],
    pluginsOpts: {
      "gjs-blocks-basic": {
        /* ...options */
      }
    }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-blocks-basic';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/GrapesJS/blocks-basic.git
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
