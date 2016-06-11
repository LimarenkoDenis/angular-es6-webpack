export default class infoController {
  constructor(InfoService) {
    'ngInject';
    this.InfoService = InfoService;
  }

  totalCount() {
    // this.InfoService.totalCount().then((resolve) => {
    //   return resolve
    // });
    return this.InfoService.totalCount()
  }

  cardAmount() {
    return 10;
  }
}
