export default class CardListController {
  constructor(CardService) {
    'ngInject';
    this.CardService = CardService;
  }

  $onInit() {
    this.CardService.list().then((resolve) => {
      this.items = resolve;
      this.count = this.items.length;
    //   console.log(`this.items.length ${this.items.length}`);
    //   console.log(this.count);
    });
  }

  add(card) {
    this.CardService.add(card)
      .then((resolve) => {
        this.items = resolve;
        this.$onInit();
        // self.CardService.update()
      });
  }

  totalAmount() {
    return this.count;
  }

  remove(card) {
    this.CardService.remove(card).then((resolve) => {
      this.items = resolve;
      this.$onInit();
    });
  }

}
