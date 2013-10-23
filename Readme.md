
# token-bucket

  Function throttling via the [token-bucket algorithm](http://en.wikipedia.org/wiki/Token_bucket).

## Installation

  Install with npm.

    $ npm install token-bucket

  Install with component.

    $ component install gjohnson/token-bucket

## Example

This will invoke the function the first 10 times, but then throttle the next 5.

```js
var Bucket = require('..');

var bucket = new Bucket(10);
var x = 15;

while (--x) {
  bucket.throttle(function () {
    console.log('yo!');
  });
}
```

## Notes

This is similar to [node-rate-limiter](https://github.com/jhurliman/node-rate-limiter), but with more opinions and less options.

## License

  MIT