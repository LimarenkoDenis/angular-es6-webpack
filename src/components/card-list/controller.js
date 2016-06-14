export default class CardListController {
  constructor(CardService) {
    'ngInject';
    this.CardService = CardService;
  }

  $onInit() {
    this.CardService.list().then((resolve) => {
      this.items = resolve;
      this.cardAmount = this.items.length;
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
    return this.cardAmount;
  }

  totalCount() {
    let totalCount = 0;
    for (let i = 0; i < this.cardAmount; i++) {
      totalCount += this.items[i].count;
    }
    return totalCount;
  }

  totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.cardAmount; i++) {
      totalPrice += (this.items[i].count * this.items[i].price);
    }
    return totalPrice;
  }

  avg() {
    let totalPrice = 0;
    let totalCount = 0;
    for (let i = 0; i < this.cardAmount; i++) {
      totalPrice += (this.items[i].count * this.items[i].price);
    }
    for (let i = 0; i < this.cardAmount; i++) {
      totalCount += this.items[i].count;
    }
    return (totalPrice / totalCount).toFixed(2);
  }

  remove(card) {
    this.CardService.remove(card).then((resolve) => {
      this.items = resolve;
      this.$onInit();
    });
  }

}
