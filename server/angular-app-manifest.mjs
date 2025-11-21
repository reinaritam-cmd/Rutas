
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/3er-parcial/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/3er-parcial/home",
    "route": "/3er-parcial"
  },
  {
    "renderMode": 2,
    "route": "/3er-parcial/home"
  },
  {
    "renderMode": 2,
    "route": "/3er-parcial/parcial"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 786, hash: '9b75cf30baecca658e27da4a16b40be8d237e8454e74087868908b69bbc78fa1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '046295add8ed5182e412817a818e8757cdb74a946458d44bc334d0d7ab7e9920', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'parcial/index.html': {size: 6629, hash: 'c69578393ba68f9467c040c70c77d8e009eb01cb750b885a5aac7cb3cc29547d', text: () => import('./assets-chunks/parcial_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 6678, hash: '634b0d5698ece15f8aae73a37d36cbc491e0e0f01a51ac475c63833d6394183a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-PFVWLYCV.css': {size: 259, hash: 'eW6v8wDzvjU', text: () => import('./assets-chunks/styles-PFVWLYCV_css.mjs').then(m => m.default)}
  },
};
