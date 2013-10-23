
var Bucket = require('..');

var bucket = new Bucket(5);

bucket.throttle(function () {
  console.log('yo! %s', 1);
});

bucket.throttle(function () {
  console.log('yo! %s', 2);
});

bucket.throttle(function () {
  console.log('yo! %s', 3);
});

bucket.throttle(function () {
  console.log('yo! %s', 4);
});

bucket.throttle(function () {
  console.log('yo! %s', 5);
});

// throttle here...

bucket.throttle(function () {
  console.log('yo! %s', 6);
});

// these will all run since new tokens were added per second.

setTimeout(function () {
  bucket.throttle(function () {
    console.log('yo! %s', 7);
  });

  bucket.throttle(function () {
    console.log('yo! %s', 8);
  });

  bucket.throttle(function () {
    console.log('yo! %s', 9);
  });
}, 5000);