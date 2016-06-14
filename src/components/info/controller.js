export default class infoController {
  constructor(InfoService, CardService) {
    'ngInject';
    this.InfoService = InfoService;
    this.CardService = CardService;
  }

  totalAmount() {
    return this.CardListController.totalAmount()
  }
}
