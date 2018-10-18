import Component from '@ember/component';

export default Component.extend({
  classNames: ['risico-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('').then((allResults) => {
      this.set('results', allResults.results);
      setTimeout(function(){

      var selects = document.querySelectorAll('select');
      var selectedOptions = JSON.parse(localStorage.getItem('selectedOptions'));

      for (var i = 0; i < selects.length; i++) {
        for (var j = 0; j < selects.length; j++) {
        if (selectedOptions.id[i] == selects[j].id) {
            selects[j].selectedIndex = selectedOptions.index[i];
          }
        }
      }

    },10);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
        filterAction(filterInputValue).then((filterResults) => {
          if (filterResults.query === this.value) {
            this.set('results', filterResults.results);
            setTimeout(function(){

            var selects = document.querySelectorAll('select');
            var selectedOptions = JSON.parse(localStorage.getItem('selectedOptions'));

            for (var i = 0; i < selects.length; i++) {
              for (var j = 0; j < selects.length; j++) {
              if (selectedOptions.id[i] == selects[j].id) {
                  selects[j].selectedIndex = selectedOptions.index[i];
                }
              }
            }

          },10);
              }
            });
      }
  }



});
