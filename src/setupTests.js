import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// global.fetch = () => {
//   const promise = {
//     then() {
//       return promise;
//     },
//     catch() {}
//   }

//   return promise
// }

class LocalStorage {
  constructor() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key]
  }

  setItem(key, string) {
    this.store[key] = string
  }

  clear() {
    this.store = {}
  }
}

global.localStorage = new LocalStorage;