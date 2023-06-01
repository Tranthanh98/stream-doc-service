'use strict';

importScripts('mupdf-wasm.js');
importScripts('mupdf.js');

mupdf.ready.then(result => {
  postMessage([ 'READY', result ]);
});

onmessage = async event => {
  let [ func, id, args ] = event.data;
  await mupdf.ready;

  try {
    let result = workerMethods[func](...args);
    postMessage([ 'RESULT', id, result ]);
  } catch (error) {
    if (error instanceof mupdf.TryLaterError) {
      trylaterQueue.push(event);
    } else {
      postMessage([ 'ERROR', id, { name: error.name, message: error.message, stack: error.stack } ]);
    }
  }
};

let trylaterScheduled = false;
let trylaterQueue = [];
mupdf.onFetchCompletedF = _id => {
  if (!trylaterScheduled) {
    trylaterScheduled = true;

    setTimeout(() => {
      trylaterScheduled = false;
      let currentQueue = trylaterQueue;
      trylaterQueue = [];
      currentQueue.forEach(onmessage);
    });
  }
};

const workerMethods = {};

let openDocument = null;

workerMethods.openDocumentFromBuffer = (from, magic) => {
  openDocument = mupdf.Document.openDocument(from, magic);
};

workerMethods.drawPageAsPNG = (pageNumber, scaleValue, degree) => {
  let ctm = mupdf.Matrix.identity;
  let page, pixmap, bbox, device;

  try {
    if (scaleValue) {
      const scaledCtm = mupdf.Matrix.scale(scaleValue, scaleValue);
      ctm = mupdf.Matrix.concat(ctm, scaledCtm);
    }
    if (degree) {
      const rotatedCtm = mupdf.Matrix.rotate(degree);
      ctm = mupdf.Matrix.concat(ctm, rotatedCtm);
    }
    page = openDocument.loadPage(pageNumber - 1);
    bbox = mupdf.Rect.transform(page.getBounds(), ctm);
    pixmap = new mupdf.Pixmap(ColorSpace.DeviceRGB, bbox, false);
    pixmap.clear(0xff);

    device = new mupdf.DrawDevice(ctm, pixmap);
    page.runPageContents(device, mupdf.Matrix.identity);
    device.close();
    device.destroy();

    let png = pixmap?.asPNG();

    return png;
  } finally {
    pixmap?.destroy();
    page?.destroy();
  }
};
