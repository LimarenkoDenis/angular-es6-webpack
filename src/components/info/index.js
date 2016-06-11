import ng from 'angular';

import infoComponent from './component';
import InfoService from './service';

export default ng.module('app.components.info', [])
  .component('info', infoComponent)
  .service('InfoService', InfoService)
  .name;
