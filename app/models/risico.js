import DS from 'ember-data';

export default DS.Model.extend({
    label: DS.attr(),
    category: DS.attr(),
    name: DS.attr(),
    weight: DS.attr(),
    value: DS.attr()
});
