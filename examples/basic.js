
var Bucket = require('..');

var bucket = new Bucket(10);
var x = 15;

while (--x) {
  bucket.throttle(function () {
    console.log('yo!');
  });
}