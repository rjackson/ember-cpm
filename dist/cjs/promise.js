"use strict";
// TODO: Use RSVP?
var get = Ember.get;

exports["default"] = function(dependentKey) {
  return Ember.computed(dependentKey, function(){
    var value = get(this, dependentKey);
    if (value == null) { return value; }
    return $.when(value);
  });
}