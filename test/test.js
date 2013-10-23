
var Bucket = require('..');

describe('Bucket', function () {
  var bucket;

  beforeEach(function () {
    bucket = new Bucket(5);
  });

  describe('when created', function () {
    it('should have a capacity', function () {
      bucket.should.have.property('capacity', 5);
    });

    it('should have nothing missing yet', function () {
      bucket.should.have.property('left', 5);
    });
  });

  describe('when throttling', function () {
    describe('when there is capacity', function () {
      it('should invoke the function', function (done) {
        var x = 4;

        bucket.throttle(next);
        bucket.throttle(next);
        bucket.throttle(next);
        bucket.throttle(next);

        function next() {
          --x || done();
        }
      });
    });

    describe('when over capacity', function () {
      it('should throttle the function');
    });
  });
});