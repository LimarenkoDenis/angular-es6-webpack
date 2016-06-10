import template from './addCard-template.html';
import controller from './controller';

export default {
  template,
  controller,
  bindToController: true,
  scope: {
    item: '='
  },
  require: {
    CardListController: '^^cardList'
  }
};
