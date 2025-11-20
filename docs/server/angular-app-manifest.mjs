
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/angular20/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/angular20/home",
    "route": "/Program%20Files/Git/angular20"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular20/home"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/angular20/parcial"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 804, hash: '8ff1a1dd43ef2d619960081cd711e38814188ed4e5c3745b07d6188d2fa65cd5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: '00110d010764a444e96d11ba6bbea1d02c07891473107ca87582b12f370c9c2d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PFVWLYCV.css': {size: 259, hash: 'eW6v8wDzvjU', text: () => import('./assets-chunks/styles-PFVWLYCV_css.mjs').then(m => m.default)}
  },
};
