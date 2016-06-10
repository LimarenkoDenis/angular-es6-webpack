import ng from 'angular';

import AddCardComponent from './components';

export default ng.module('app.components.addCard', [])
  .component('addCard', AddCardComponent)
  .name;
