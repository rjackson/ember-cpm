define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var get   = Ember.get,
      a_slice = Array.prototype.slice;

    __exports__["default"] = function() {
      var formatString = '' + a_slice.call(arguments, -1),
          properties   = a_slice.call(arguments, 0, -1);

      return Ember.computed(function(){
        var values = [], i, value;

        for (i = 0; i < properties.length; ++i) {
          value = get(this, properties[i]);
          if (value === undefined) { return undefined; }
          if (value === null)      { return null; }
          values.push(value);
        }

        return Ember.String.fmt(formatString, values);
      });
    }
  });