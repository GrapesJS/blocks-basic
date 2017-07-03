export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks;

  if (blocks.indexOf('column1') >= 0) {
    bm.add('column1', {
      label: c.labelColumn1,
      category: 'Basic',
      attributes: {class:'gjs-fonts gjs-f-b1'},
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        </div>`
    });
  }

  if (blocks.indexOf('column2') >= 0) {
    bm.add('column2', {
      label: c.labelColumn2,
      attributes: {class:'gjs-fonts gjs-f-b2'},
      category: 'Basic',
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        </div>`
    });
  }

  if (blocks.indexOf('column3') >= 0) {
    bm.add('column3', {
      label: c.labelColumn3,
      category: 'Basic',
      attributes: {class:'gjs-fonts gjs-f-b3'},
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
          <div class="cell" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        </div>`
    });
  }

  if (blocks.indexOf('column3-7') >= 0) {
    bm.add('column3-7', {
      label: c.labelColumn37,
      category: 'Basic',
      attributes: {class:'gjs-fonts gjs-f-b37'},
      content: `<div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
          <div class="cell cell30" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
          <div class="cell cell70" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        </div>`,
    });
  }

  if (blocks.indexOf('text') >= 0) {
    bm.add('text', {
      label: c.labelText,
      category: 'Basic',
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
        type:'text',
        content:'Insert your text here',
        style: {padding: '10px' },
        activeOnRender: 1
      },
    });
  }

  if (blocks.indexOf('link') >= 0) {
    bm.add('link', {
      label: c.labelLink,
      category: 'Basic',
      attributes: {class:'fa fa-link'},
      content: {
        type:'link',
        content:'Link',
        style: {color: '#d983a6'}
      },
    });
  }

  if (blocks.indexOf('image') >= 0) {
    bm.add('image', {
      label: c.labelImage,
      category: 'Basic',
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: {
        style: {color: 'black'},
        type:'image',
        activeOnRender: 1
      },
    });
  }

  if (blocks.indexOf('video') >= 0) {
    bm.add('video', {
      label: c.labelVideo,
      category: 'Basic',
      attributes: {class:'fa fa-youtube-play'},
      content: {
        type: 'video',
        src: 'img/video2.webm',
        style: {
          height: '350px',
          width: '615px',
        }
      },
    });
  }

  if (blocks.indexOf('map') >= 0) {
    bm.add('map', {
      label: c.labelMap,
      category: 'Basic',
      attributes: {class:'fa fa-map-o'},
      content: {
        type: 'map',
        style: {height: '350px'}
      },
    });
  }
}
