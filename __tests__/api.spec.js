const nx = require('@feizheng/next-js-core2');
require('../src/next-random-ua');

describe('api.basic test', () => {
  test('nx.randomUa should be string/array', function () {
    expect(typeof nx.randomUa()).toBe('string');
    expect(Array.isArray(nx.randomUa(3))).toBe(true);
  });
});
