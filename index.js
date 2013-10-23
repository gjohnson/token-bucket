
/**
 * Dependencies.
 */

var debug = require('debug')('token-bucket');

/**
 * Export.
 */

module.exports = Bucket;

/**
 * Creates a "bucket" with `capacity`.
 *
 * @param {Number} capacity
 * @constructor
 * @public
 */

function Bucket (capacity) {
  this.capacity = capacity || Infinity;
  this.left = capacity;
  this.last = time();
}

/**
 * Invokes the `fn`, throttling accordingly.
 *
 * @param {Function} fn
 * @public
 */

Bucket.prototype.throttle = function (fn) {
  if (this.capacity === Infinity) return fn();

  var self = this;
  var now = time();
  var delta = Math.max(now - this.last, 0);
  var amount = delta * 0.001;

  this.last = now;
  this.left = Math.min(this.left + amount, this.capacity);

  if (this.left < 1) {
    debug('throttled');
    setTimeout(function () {
      self.throttle(fn);
    }, Math.ceil((1 - this.left) * 1000));
    return;
  }

  debug('calling');
  this.left -= 1;
  fn.call(null);
};

/**
 * Now utility (for shotty browsers).
 *
 * @private
 * @return {Number}
 */

function time() {
  return new Date().getTime();
}
