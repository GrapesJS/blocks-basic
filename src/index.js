grapesjs.plugins.add('gjs-blocks-basic', (editor, opts) => {
  let c = opts || {};
  let config = editor.getConfig();
  let pfx = config.stylePrefix;

  let defaults = {
    blocks: ['column1'],
    labelColumn1: '1 Column',
  };

  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  // Add blocks
  let loadBlocks = require('./blocks');
  loadBlocks.default(editor, c);

});
