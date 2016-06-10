export default class CardListController {
  constructor(CardService) {
    'ngInject';
    this.CardService = CardService;
  }

  $onInit() {
    this.CardService.list().then(function(resolve) {
    // console.log(resolve);
      this.items = resolve;
    });
  }

  add() {
    this.CardService.add(card)
      .then(function(resolve) {
            this.items = resolve;
            this.$onInit();
            // self.CardService.update()
        });
    }

    remove() {
        this.CardService.remove(card).then(function(resolve) {
            this.items = resolve;
            this.$onInit();
        });
    }
}
