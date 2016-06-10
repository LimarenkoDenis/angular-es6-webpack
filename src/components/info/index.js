import ng from 'angular';

import infoComponent from './component';

export default ng.module('app.components.info', [])
  .component('info', infoComponent)
  .name;
