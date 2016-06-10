export default class AddCardController {
  constructor(CardService) {
    'ngInject';
    this.newCard = {
      title: 'default title',
      description: 'default description'
    };
    this.CardService = CardService;
  }

  addCard() {
    this.CardListController.add(this.newCard);
  }
}
