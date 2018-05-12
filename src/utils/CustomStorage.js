class InMemoryStorage {
  storageObj = {};

  constructor(initState = {}) {
    this.storageObj = initState;
  }

  getItem(key) {
    return this.storageObj[key];
  }

  setItem(key, value) {
    this.storageObj[key] = value;
  }

  key(n) {
    return Object.keys(this.storageObj)[n];
  }

  removeItem(key) {
    delete this.storageObj[key];
  }

  clear() {
    this.storageObj = {};
  }
}

let customStorage;

try {
  customStorage = window.sessionStorage;
} catch (e) {
  customStorage = new InMemoryStorage({});
}

export default (Storage = {
  getItem: key => {
    return customStorage.getItem(key);
  },

  setItem: (key, value) => {
    customStorage.setItem(key, value);
  },

  removeItem: key => {
    customStorage.removeItem(key);
  },

  key: n => {
    return customStorage.key(n);
  },

  clear: () => {
    customStorage.clear();
  },
});
