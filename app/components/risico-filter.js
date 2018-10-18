import Component from "@ember/component";

export default Component.extend({
  classNames: ["risico-filter"],
  value: "",

  init() {
    this._super(...arguments);
    this.filter("").then(allResults => {
      this.set("results", allResults.results);
      setTimeout(function() {
        var selects = document.querySelectorAll("select");
        var risk = document.getElementById("risk");
        var calcValue = 0;
        var selectedOptions = JSON.parse(
          localStorage.getItem("selectedOptions")
        );

        for (var i = 0; i < selects.length; i++) {
          for (var j = 0; j < selects.length; j++) {
            if (selectedOptions.id[i] == selects[j].id) {
              selects[j].selectedIndex = selectedOptions.index[i];
            }
          }
        }

        for (var i = 0; i < selectedOptions.value.length; i++) {
          calcValue += Number(selectedOptions.value[i]);
        }

        var realValue = Number(
          ((1 / (1 + Math.exp(-1 * (-8.57219 + calcValue)))) * 100).toFixed(2)
        );

        risk.textContent = realValue + "%";
      }, 10);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then(filterResults => {
        if (filterResults.query === this.value) {
          this.set("results", filterResults.results);
          setTimeout(function() {
            var selects = document.querySelectorAll("select");
            var risk = document.getElementById("risk");
            var calcValue = 0;
            var selectedOptions = JSON.parse(
              localStorage.getItem("selectedOptions")
            );

            for (var i = 0; i < selects.length; i++) {
              for (var j = 0; j < selects.length; j++) {
                if (selectedOptions.id[i] == selects[j].id) {
                  selects[j].selectedIndex = selectedOptions.index[i];
                }
              }
            }

            for (var i = 0; i < selectedOptions.value.length; i++) {
              calcValue += Number(selectedOptions.value[i]);
            }

            var realValue = Number(
              ((1 / (1 + Math.exp(-1 * (-8.57219 + calcValue)))) * 100).toFixed(
                2
              )
            );

            risk.textContent = realValue + "%";
          }, 10);
        }
      });
    }
  }
});
