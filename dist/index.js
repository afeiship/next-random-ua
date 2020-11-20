/*!
 * name: @jswork/next-random-ua
 * description: Get a random user agent.
 * homepage: https://github.com/afeiship/next-random-ua
 * version: 1.0.0
 * date: 2020-11-20 21:55:34
 * license: MIT
 */

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
