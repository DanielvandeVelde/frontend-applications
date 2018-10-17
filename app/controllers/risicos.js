import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByLabel(param) {
      if (param !== '') {
        return this.store.query('risico', { label: param });
      } else {
        return this.store.findAll('risico');
      }
    }
  }
});
