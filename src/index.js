import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-blocks-basic', (editor, opts) => {
  let c = opts || {};

  let defaults = {
    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
    stylePrefix: '',
    addBasicStyle: true,
    labelColumn1: '1 Column',
    labelColumn2: '2 Columns',
    labelColumn3: '3 Columns',
    labelColumn37: '2 Columns 3/7',
    labelText: 'Text',
    labelLink: 'Link',
    labelImage: 'Image',
    labelVideo: 'Video',
    labelMap: 'Map',
  };

  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  const stylePrefix = c.stylePrefix;

  if (c.addBasicStyle) {
    editor.addComponents(`
      <style>
        .${stylePrefix}row {
          display: table;
          padding: 10px;
          width: 100%;
        }

        .${stylePrefix}cell {
          width: 8%;
          display: table-cell;
          height: 75px;
        }

        .${stylePrefix}cell30 {
          width: 30%;
        }

        .${stylePrefix}cell70 {
          width: 70%;
        }

        @media (max-width: 768px) {
          .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
            width: 100%;
            display: block;
          }
        }
      </style>
      `);
  }

  // Add blocks
  let loadBlocks = require('./blocks');
  loadBlocks.default(editor, c);

});
