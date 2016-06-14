import template from './info.html';
import controller from './controller';

export default {
  template,
  controller,
  bindToController: true,
  require: {
    CardListController: '^^cardList'
  }
};
