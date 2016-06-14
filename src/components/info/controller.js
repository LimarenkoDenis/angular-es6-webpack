export default class infoController {
  constructor(InfoService, CardService) {
    'ngInject';
    this.InfoService = InfoService;
    this.CardService = CardService;
  }

  totalAmount() {
    return this.CardListController.totalAmount();
  }

  totalCount() {
    return this.CardListController.totalCount();
  }

  totalPrice() {
    return this.CardListController.totalPrice();
  }

  avg() {
    return this.CardListController.avg();
  }
}
