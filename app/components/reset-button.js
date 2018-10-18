import Component from '@ember/component';

export default Component.extend({
  actions: {
    doReset() {
      localStorage.clear();

      var selects = document.querySelectorAll('select')
      for(var i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;
      }
    }
  }
});
