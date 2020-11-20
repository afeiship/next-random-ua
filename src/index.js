(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var randomUa = require('random-useragent');

  nx.randomUa = function (inLength) {
    if (!inLength) return randomUa.getRandom();
    var result = [];
    for (var i = 0; i < inLength; i++) {
      result.push(randomUa.getRandom());
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.randomUa;
  }
})();
