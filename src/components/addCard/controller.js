export default class AddCardController {
  constructor(CardService) {
    'ngInject';
    this.CardService = CardService;
  }

  addCard() {
    this.newCard = {
      title: 'default title',
      description: 'default description',
      count: 0,
      price: 0
    };
    this.CardListController.add(this.newCard);
  }
}
