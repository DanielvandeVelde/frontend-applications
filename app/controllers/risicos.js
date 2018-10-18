import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByLabel(param) {
      if (param !== '') {
        return this.store
        .query('risico', { label: param }).then((results) => {
        return { query: param, results: results };
        });
      } else {
        return this.store
        .findAll('risico').then((results) => {
        return { query: param, results: results };
        });
      }
    }
  }
});
