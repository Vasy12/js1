function MyArray() {
  this.length = 0;
}

const myArrayProto = new MyArray();

myArrayProto.push = function push() {

  for (let i = 0; i < arguments.length; ++i) {
    this[this.length++] = arguments[i];
  }

  return this.length;
};

myArrayProto.shift = function shift() {

  if (this.length === 0) {
    return;
  }

  const firstItem = this[0];

  for (let i = 0; i < this.length - 1; ++i) {
    this[i] = this[i + 1];
  }

  delete this[--this.length];

  return firstItem;

};

myArrayProto.pop = function pop() {

  const lastItem = this[this.length - 1];

  delete this[--this.length];

  return lastItem;

};

myArrayProto.map = function (callBack) {

};

MyArray.prototype = myArrayProto;