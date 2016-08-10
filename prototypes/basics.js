(function () {
    'use strict';

    const colors = ['red', 'white', 'blue'];

    Object.defineProperty(Array.prototype, 'last', {
        get: function () {
          return this[this.length-1];
        }
    });
   
   
    console.log(colors.last);
})();