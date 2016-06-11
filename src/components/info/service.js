export default class InfoService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    // this.items = [];
  }

  totalCount() {
    // return this.$http.get('http://localhost:3000/cards').then((response) => {
    //   return response.data.length;
    // }).catch((e) => {
    //   console.log(JSON.stringify(e));
    // });
    return 10
  }
}
