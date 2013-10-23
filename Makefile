
REPORTER = spec
TESTS ?= $(wildcard test/*.test.js)

test:
	@NODE_ENV=test ./node_modules/.bin/mocha $(TESTS) \
		--require "should" \
	  --timeout 2000 \
	  --reporter $(REPORTER) \
	  --growl \

build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: test clean
