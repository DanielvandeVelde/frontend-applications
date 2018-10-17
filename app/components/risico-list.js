import Component from '@ember/component';

export default Component.extend({

actions: {
doSomething(event) {
    console.log(event.target);
    console.log("Index of Array weight to get = " + event.target.selectedIndex)
  }
}
});
