grapesjs.plugins.add('gjs-blocks-basic', (editor, opts) => {
  let c = opts || {};
  let config = editor.getConfig();
  let pfx = config.stylePrefix;

  let defaults = {
    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
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

  // Add blocks
  let loadBlocks = require('./blocks');
  loadBlocks.default(editor, c);

});
