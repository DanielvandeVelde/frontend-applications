import Component from "@ember/component";

export default Component.extend({
  actions: {
    doReset() {
      localStorage.clear();

      var selects = document.querySelectorAll("select");
      var risk = document.getElementById("risk");

      for (var i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;
      }

      risk.textContent = 0 + "%";
      risk.style.color = hsl("0,100%,50%");
    }
  }
});
