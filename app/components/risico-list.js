import Component from '@ember/component';

export default Component.extend({

actions: {

doSomething(event) {
var risk = document.getElementById('risk');
var indexValue = event.target.selectedIndex
var array = event.target.dataset.attribute.split(",");
var waarde = array[indexValue-1];
var selectId = event.target.name;
var calcValue = 0;
var check = true;

if (localStorage.length != 0) {
  var selectedOptions = JSON.parse(localStorage.getItem('selectedOptions'))
} else {
  var selectedOptions = {
    id: new Array,
    index: new Array,
    value: new Array
  }
}

function pushValues() {
  selectedOptions.id.push(event.target.id)
  selectedOptions.index.push(event.target.selectedIndex)
  selectedOptions.value.push(waarde)
}

function putValues(i) {
  selectedOptions.id[i] = event.target.id
  selectedOptions.index[i] = event.target.selectedIndex
  selectedOptions.value[i] = waarde
}

if (selectedOptions.id.length == 0) {
  pushValues()
} else {
  for (var i = 0; i < selectedOptions.id.length; i++) {
    if (selectedOptions.id[i] == event.target.id) {
      check = false
      putValues(i)
    }
  }

  if (check) {
    pushValues()
  }
}

localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions))

for (var i = 0; i < selectedOptions.value.length; i++ ) {
calcValue += Number(selectedOptions.value[i]);
}

risk.textContent = calcValue + "%";

}
}
});
