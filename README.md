# next-random-ua
> Get a random user agent.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-random-ua
```

## usage
```js
import '@jswork/next-random-ua';

nx.randomUa();
nx.randomUa(3);

// One: String
// 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5X Build/MDB08L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.124 Mobile Safari/537.36'

// Multiple: Array
// [
//   'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Chrome/9.0.601.0 Safari/534.14',
//   'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1',
//   'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 530) like Gecko'
// ] 
```

## resources
- https://github.com/skratchdot/random-useragent

## license
Code released under [the MIT license](https://github.com/afeiship/next-random-ua/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-random-ua
[version-url]: https://npmjs.org/package/@jswork/next-random-ua

[license-image]: https://img.shields.io/npm/l/@jswork/next-random-ua
[license-url]: https://github.com/afeiship/next-random-ua/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-random-ua
[size-url]: https://github.com/afeiship/next-random-ua/blob/master/dist/next-random-ua.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-random-ua
[download-url]: https://www.npmjs.com/package/@jswork/next-random-ua
