define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var get   = Ember.get,
      a_slice = Array.prototype.slice;

    __exports__["default"] = function() {
      var separator  = a_slice.call(arguments, -1),
          properties = a_slice.call(arguments, 0, -1);

      var cp = Ember.computed(function(){
        var that = this;
        return properties.map(function(key) {
          return get(that, key);
        }).join(separator);
      });

      return cp.property.apply(cp, properties);
    }
  });