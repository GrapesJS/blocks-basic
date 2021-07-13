import grapesjs from 'grapesjs';
import en from "./locale/en";
import pt from "./locale/pt";
import es from "./locale/es";

export default grapesjs.plugins.add('gjs-blocks-basic', (editor, opts = {}) => {
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
    en,
    pt,
    es,
  });

  const config = {
    blocks: [
      'column1',
      'column2',
      'column3',
      'column3-7',
      'text',
      'link',
      'image',
      'video',
      'map'
    ],
    flexGrid: 0,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    
    category: editor.I18n.t("grapesjs-blocks-basic.category"), // 'Basic',
    labelColumn1: editor.I18n.t("grapesjs-blocks-basic.labelColumn1"), // '1 Column',
    labelColumn2: editor.I18n.t("grapesjs-blocks-basic.labelColumn2"), // '2 Columns',
    labelColumn3: editor.I18n.t("grapesjs-blocks-basic.labelColumn3"), // '3 Columns',
    labelColumn37: editor.I18n.t("grapesjs-blocks-basic.labelColumn37"), // '2 Columns 3/7',
    labelText: editor.I18n.t("grapesjs-blocks-basic.labelText"), // 'Text',
    labelLink: editor.I18n.t("grapesjs-blocks-basic.labelLink"), // 'Link',
    labelImage: editor.I18n.t("grapesjs-blocks-basic.labelImage"), // 'Image',
    labelVideo: editor.I18n.t("grapesjs-blocks-basic.labelVideo"), // 'Video',
    labelMap: editor.I18n.t("grapesjs-blocks-basic.labelMap"), // 'Map',
    
    rowHeight: 75,
    ...opts
  };

  // Add blocks
  const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);
});
