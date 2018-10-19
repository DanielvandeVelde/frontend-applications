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
        var i = 0;

        for (i = 0; i < selects.length; i++) {
          for (var j = 0; j < selects.length; j++) {
            if (selectedOptions.id[i] == selects[j].id) {
              selects[j].selectedIndex = selectedOptions.index[i];
            }
          }
        }

        for (i = 0; i < selectedOptions.value.length; i++) {
          calcValue += Number(selectedOptions.value[i]);
        }

        var realValue = Number(
          ((1 / (1 + Math.exp(-1 * (-8.57219 + calcValue)))) * 100).toFixed(2)
        );

        risk.textContent = realValue + "%";
        /* from: https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage */
        risk.style.color = getColor(realValue / 100);
        function getColor(value) {
          //value from 0 to 1
          var hue = ((1 - value) * 120).toString(10);
          return ["hsl(", hue, ",100%,50%)"].join("");
        }
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
            var i = 0;
            var selectedOptions = JSON.parse(
              localStorage.getItem("selectedOptions")
            );

            for (i = 0; i < selects.length; i++) {
              for (var j = 0; j < selects.length; j++) {
                if (selectedOptions.id[i] == selects[j].id) {
                  selects[j].selectedIndex = selectedOptions.index[i];
                }
              }
            }

            for (i = 0; i < selectedOptions.value.length; i++) {
              calcValue += Number(selectedOptions.value[i]);
            }

            var realValue = Number(
              ((1 / (1 + Math.exp(-1 * (-8.57219 + calcValue)))) * 100).toFixed(
                2
              )
            );

            risk.textContent = realValue + "%";
            /* from: https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage */
            risk.style.color = getColor(realValue / 100);
            function getColor(value) {
              //value from 0 to 1
              var hue = ((1 - value) * 120).toString(10);
              return ["hsl(", hue, ",100%,50%)"].join("");
            }
          }, 10);
        }
      });
    }
  }
});
