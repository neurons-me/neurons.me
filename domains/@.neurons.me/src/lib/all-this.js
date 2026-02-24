import React from 'react';
import * as GUIExports from '../../../all.this/this/GUI/npm/dist/this-gui.es.js';

const isDev = typeof import.meta !== 'undefined' && import.meta.env?.MODE !== 'production';

const warn = (name) => () => {
  if (isDev) {
    console.warn(`[all.this shim] Component ${name} is not available in this.gui; rendering null.`);
  }
  return null;
};

const GUI = {
  ...GUIExports,
  GUIProvider: GUIExports.GuiProvider ?? (({ children }) => React.createElement(React.Fragment, null, children)),
  StickyOptions: GUIExports.StickyOptionsTop ?? warn('StickyOptions'),
  PageTitle: GUIExports.TextTitle ?? warn('PageTitle'),
  NavBar: warn('NavBar'),
  FullChatBot: warn('FullChatBot'),
};

export { GUI };
export default { GUI };
