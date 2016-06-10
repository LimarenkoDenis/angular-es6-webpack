export default class infoController {
  constructor(CardService) {
    'ngInject';
    this.CardService = CardService;
  }

  totalCount() {
    return 20;
  }

  cardAmount() {
    return 10;
  }
}
