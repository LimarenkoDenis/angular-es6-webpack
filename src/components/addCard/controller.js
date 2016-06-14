export default class AddCardController {
  constructor(CardService) {
    'ngInject';
    this.CardService = CardService;
  }

  addCard() {
    this.newCard = {
      title: 'default title',
      description: 'default description'
    };
    this.CardListController.add(this.newCard);
  }
}
