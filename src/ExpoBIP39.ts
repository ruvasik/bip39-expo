console.log('default bip39');

import './shim';
import 'react-native-get-random-values';
import * as bip39 from 'bip39';

const globalAny:any = global;

//
// Object.defineProperty(globalAny, 'crypto', {
//   configurable: true,
//   enumerable: true,
//   get: () => Crypto,
// });

console.log('test');
// console.log('webCrypto', webCrypto);
console.log('globalAny', globalAny);
// console.log('crypto', globalAny.crypto);

export default bip39;
